import type { ToolSpec } from "../../types.js";

export const tool_xmldb_tools: ToolSpec[] = [
  {
    name: "tool_xmldb_invoke_move_action",
    moodleFunction: "tool_xmldb_invoke_move_action",
    description: "Moodle web service function `tool_xmldb_invoke_move_action`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin"],
    examples: { minimal: {} },
  },
];
