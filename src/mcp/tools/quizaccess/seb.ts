import type { ToolSpec } from "../../types.js";

export const quizaccess_seb_tools: ToolSpec[] = [
  {
    name: "quizaccess_seb_validate_quiz_keys",
    moodleFunction: "quizaccess_seb_validate_quiz_keys",
    description: "Moodle web service function `quizaccess_seb_validate_quiz_keys`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
