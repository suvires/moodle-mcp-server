import type { ToolSpec } from "../../types.js";

export const core_check_tools: ToolSpec[] = [
  {
    name: "core_check_get_result_admintree",
    moodleFunction: "core_check_get_result_admintree",
    description: "Moodle web service function `core_check_get_result_admintree`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
