#!/usr/bin/env node
import "dotenv/config";
import express, { type Request, type Response } from "express";
import { randomUUID } from "node:crypto";

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

import { callMoodleAPI } from "./moodle-client.js";

const PORT = Number(process.env.PORT || 3000);
const app = express();
app.use(express.json());

// ====== Config del panel ======
const MCP_KEYS_ENDPOINT =
  process.env.MCP_KEYS_ENDPOINT ?? "https://app.moodlemcp.com/api/mcp";

type Tenant = {
  moodleUrl: string;
  moodleToken: string;
};

async function fetchTenantFromPanel(mcpKey: string): Promise<Tenant> {
  const res = await fetch(MCP_KEYS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // opcional: si quieres identificar el MCP server
      "User-Agent": "moodle-mcp-server/1.0",
    },
    body: JSON.stringify({ mcpKey }),
  });

  if (res.status === 200) {
    const data = (await res.json()) as { moodleUrl: string; moodleToken: string };
    if (!data?.moodleUrl || !data?.moodleToken) {
      throw new Error("Invalid response from MCP Keys endpoint");
    }
    return { moodleUrl: data.moodleUrl, moodleToken: data.moodleToken };
  }

  // Mantén semántica: 404 no existe; 403 revocada/suspendida/expirada
  if (res.status === 404) {
    const err = new Error("MCP Key not found");
    // @ts-expect-error attach status
    err.statusCode = 404;
    throw err;
  }

  if (res.status === 403) {
    const err = new Error("MCP Key forbidden");
    // @ts-expect-error attach status
    err.statusCode = 403;
    throw err;
  }

  const text = await res.text().catch(() => "");
  const err = new Error(
    `MCP Keys endpoint error (${res.status}): ${text || res.statusText}`,
  );
  // @ts-expect-error attach status
  err.statusCode = 502;
  throw err;
}

// ====== Sesiones: sessionId -> tenant ======
type SessionCtx = {
  transport: StreamableHTTPServerTransport;
  mcpServer: Server;
  tenant: Tenant;
};

const sessions = new Map<string, SessionCtx>();

function getSessionIdFromReq(req: Request): string | undefined {
  return (
    req.header("Mcp-Session-Id") || req.header("mcp-session-id") || undefined
  );
}

// Crea un MCP Server “atado” al tenant (closure)
function createServerForTenant(tenant: Tenant): Server {
  const mcpServer = new Server(
    { name: "moodle-mcp", version: "1.0.0" },
    { capabilities: { tools: {} } },
  );

  mcpServer.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: [
        {
          name: "get_site_info",
          description: "Gets general information about the Moodle site",
          inputSchema: { type: "object", properties: {} },
        },
        {
          name: "get_courses",
          description: "Gets the list of available courses in Moodle",
          inputSchema: { type: "object", properties: {} },
        },
      ],
    };
  });

  mcpServer.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name } = request.params;

    try {
      let result: unknown;

      switch (name) {
        case "get_site_info":
          result = await callMoodleAPI(
            tenant.moodleUrl,
            tenant.moodleToken,
            "core_webservice_get_site_info",
            {},
          );
          break;

        case "get_courses":
          result = await callMoodleAPI(
            tenant.moodleUrl,
            tenant.moodleToken,
            "core_course_get_courses",
            {},
          );
          break;

        default:
          throw new Error(`Unknown tool: ${name}`);
      }

      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      };
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      return {
        content: [{ type: "text", text: `Error: ${msg}` }],
        isError: true,
      };
    }
  });

  return mcpServer;
}

// ====== Endpoint MCP: key en la URL (solo para enrutar el tenant) ======
// Nota: tu key ya no valida local: la validamos llamando al panel.
app.all("/mcp/:mcpKey", async (req: Request, res: Response) => {
  try {
    const method = req.method.toUpperCase();
    const sessionId = getSessionIdFromReq(req);

    // Si ya hay sesión, usa la existente
    if (sessionId) {
      const ctx = sessions.get(sessionId);
      if (!ctx) {
        res.status(404).send("Unknown Mcp-Session-Id");
        return;
      }
      if (method === "POST") await ctx.transport.handleRequest(req, res, req.body);
      else await ctx.transport.handleRequest(req, res);
      return;
    }

    // Si NO hay sesión, valida mcpKey contra el panel y crea sesión
    const mcpKeyParam = req.params.mcpKey;
    const mcpKey = Array.isArray(mcpKeyParam) ? mcpKeyParam[0] : mcpKeyParam;

    if (!mcpKey) {
      res.status(400).send("Missing MCP key");
      return;
    }

    // 🔥 Aquí está el cambio: fetch al panel
    const tenant = await fetchTenantFromPanel(mcpKey);

    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: () => randomUUID(),
    });

    const mcpServer = createServerForTenant(tenant);
    await mcpServer.connect(transport);

    // Maneja request de inicio
    if (method === "POST") await transport.handleRequest(req, res, req.body);
    else await transport.handleRequest(req, res);

    // Guarda sesión cuando ya exista sessionId
    if (transport.sessionId) {
      sessions.set(transport.sessionId, { transport, mcpServer, tenant });

      transport.onclose = () => {
        if (transport.sessionId) sessions.delete(transport.sessionId);
      };
    }
  } catch (err: any) {
    const status = err?.statusCode ?? 500;
    const msg = err instanceof Error ? err.message : String(err);
    if (!res.headersSent) res.status(status).send(msg);
  }
});

// Health
app.get("/health", (_req, res) => {
  res.json({ status: "ok", ts: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 MCP multi-tenant on http://localhost:${PORT}/mcp/<MCP_KEY>`);
  console.log(`🔑 MCP Keys endpoint: ${MCP_KEYS_ENDPOINT}`);
});