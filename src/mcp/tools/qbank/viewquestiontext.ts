import type { ToolSpec } from "../../types.js";

export const qbank_viewquestiontext_tools: ToolSpec[] = [
  {
    name: "qbank_viewquestiontext_set_question_text_format",
    moodleFunction: "qbank_viewquestiontext_set_question_text_format",
    description:
      "Sets the display format for question text in the question bank. Controls whether question text is shown as plain text or with formatting.",
    inputSchema: {
      type: "object",
      properties: {
        format: {
          type: "string",
          enum: ["plain", "full"],
          description: "Display format: 'plain' for text only, 'full' for formatted HTML.",
        },
      },
      required: ["format"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { format: "plain" },
    },
  },
];
