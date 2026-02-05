import type { ToolSpec } from "../../types.js";

export const qbank_editquestion_tools: ToolSpec[] = [
  {
    name: "qbank_editquestion_set_status",
    moodleFunction: "qbank_editquestion_set_status",
    description:
      "Sets the status of a question in the question bank. Statuses include draft, ready, and hidden, controlling question availability in quizzes.",
    inputSchema: {
      type: "object",
      properties: {
        questionid: {
          type: "integer",
          minimum: 1,
          description: "Question ID to update.",
        },
        status: {
          type: "string",
          enum: ["draft", "ready", "hidden"],
          description: "New status for the question.",
        },
      },
      required: ["questionid", "status"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { questionid: 42, status: "ready" },
    },
  },
];
