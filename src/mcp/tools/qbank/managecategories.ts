import type { ToolSpec } from "../../types.js";

export const qbank_managecategories_tools: ToolSpec[] = [
  {
    name: "qbank_managecategories_move_category",
    moodleFunction: "qbank_managecategories_move_category",
    description: "Moodle web service function `qbank_managecategories_move_category`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
