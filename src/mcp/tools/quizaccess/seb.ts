import type { ToolSpec } from "../../types.js";

export const quizaccess_seb_tools: ToolSpec[] = [
  {
    name: "quizaccess_seb_validate_quiz_keys",
    moodleFunction: "quizaccess_seb_validate_quiz_keys",
    description:
      "Validates Safe Exam Browser (SEB) keys for a quiz attempt. Checks if the browser key and/or config key match the quiz requirements, allowing or denying access to the quiz.",
    inputSchema: {
      type: "object",
      properties: {
        cmid: {
          type: "integer",
          minimum: 1,
          description: "Course module ID of the quiz.",
        },
        url: {
          type: "string",
          minLength: 1,
          description: "Current page URL being accessed (used for key validation).",
        },
        configkey: {
          type: "string",
          description: "SEB config key hash sent by the browser.",
        },
        browserexamkey: {
          type: "string",
          description: "SEB browser exam key hash sent by the browser.",
        },
      },
      required: ["cmid", "url"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { cmid: 10, url: "https://moodle.example.com/mod/quiz/attempt.php?attempt=5" },
    },
  },
];
