import type { ToolSpec } from "../../types.js";

export const mod_choice_tools: ToolSpec[] = [
  {
    name: "mod_choice_delete_choice_responses",
    moodleFunction: "mod_choice_delete_choice_responses",
    description: "Moodle web service function `mod_choice_delete_choice_responses`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_choice_get_choice_options",
    moodleFunction: "mod_choice_get_choice_options",
    description: "Moodle web service function `mod_choice_get_choice_options`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_choice_get_choice_results",
    moodleFunction: "mod_choice_get_choice_results",
    description: "Moodle web service function `mod_choice_get_choice_results`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_choice_get_choices_by_courses",
    moodleFunction: "mod_choice_get_choices_by_courses",
    description: "Moodle web service function `mod_choice_get_choices_by_courses`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_choice_submit_choice_response",
    moodleFunction: "mod_choice_submit_choice_response",
    description: "Moodle web service function `mod_choice_submit_choice_response`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_choice_view_choice",
    moodleFunction: "mod_choice_view_choice",
    description: "Moodle web service function `mod_choice_view_choice`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
