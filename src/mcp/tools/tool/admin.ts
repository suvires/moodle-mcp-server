import type { ToolSpec } from "../../types.js";

export const tool_admin_tools: ToolSpec[] = [
  {
    name: "tool_admin_presets_delete_preset",
    moodleFunction: "tool_admin_presets_delete_preset",
    description: "Moodle web service function `tool_admin_presets_delete_preset`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager"],
    examples: { minimal: {} },
  },
];
