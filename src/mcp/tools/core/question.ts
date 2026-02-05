import type { ToolSpec } from "../../types.js";

export const core_question_tools: ToolSpec[] = [
  {
    name: "core_question_get_random_question_summaries",
    moodleFunction: "core_question_get_random_question_summaries",
    description: "Moodle web service function `core_question_get_random_question_summaries`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_question_move_questions",
    moodleFunction: "core_question_move_questions",
    description: "Moodle web service function `core_question_move_questions`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_question_search_shared_banks",
    moodleFunction: "core_question_search_shared_banks",
    description: "Moodle web service function `core_question_search_shared_banks`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_question_update_flag",
    moodleFunction: "core_question_update_flag",
    description: "Moodle web service function `core_question_update_flag`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
