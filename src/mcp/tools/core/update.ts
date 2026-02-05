import type { ToolSpec } from "../../types.js";

export const core_update_tools: ToolSpec[] = [
  {
    name: "core_update_inplace_editable",
    moodleFunction: "core_update_inplace_editable",
    description: "Moodle web service function `core_update_inplace_editable`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
