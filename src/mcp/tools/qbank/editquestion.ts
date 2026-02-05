import type { ToolSpec } from "../../types.js";

export const qbank_editquestion_tools: ToolSpec[] = [
  {
    name: "qbank_editquestion_set_status",
    moodleFunction: "qbank_editquestion_set_status",
    description: "Moodle web service function `qbank_editquestion_set_status`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
