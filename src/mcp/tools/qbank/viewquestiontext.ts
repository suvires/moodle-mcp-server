import type { ToolSpec } from "../../types.js";

export const qbank_viewquestiontext_tools: ToolSpec[] = [
  {
    name: "qbank_viewquestiontext_set_question_text_format",
    moodleFunction: "qbank_viewquestiontext_set_question_text_format",
    description: "Moodle web service function `qbank_viewquestiontext_set_question_text_format`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
