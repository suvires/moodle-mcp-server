import type { ToolSpec } from "../../types.js";

export const customfield_number_tools: ToolSpec[] = [
  {
    name: "customfield_number_recalculate_value",
    moodleFunction: "customfield_number_recalculate_value",
    description: "Moodle web service function `customfield_number_recalculate_value`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
