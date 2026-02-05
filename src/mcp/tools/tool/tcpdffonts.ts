import type { ToolSpec } from "../../types.js";

export const tool_tcpdffonts_tools: ToolSpec[] = [
  {
    name: "tool_tcpdffonts_core_reset",
    moodleFunction: "tool_tcpdffonts_core_reset",
    description: "Moodle web service function `tool_tcpdffonts_core_reset`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin"],
    examples: { minimal: {} },
  },
  {
    name: "tool_tcpdffonts_delete_font",
    moodleFunction: "tool_tcpdffonts_delete_font",
    description: "Moodle web service function `tool_tcpdffonts_delete_font`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin"],
    examples: { minimal: {} },
  },
  {
    name: "tool_tcpdffonts_init_custom_fonts",
    moodleFunction: "tool_tcpdffonts_init_custom_fonts",
    description: "Moodle web service function `tool_tcpdffonts_init_custom_fonts`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin"],
    examples: { minimal: {} },
  },
];
