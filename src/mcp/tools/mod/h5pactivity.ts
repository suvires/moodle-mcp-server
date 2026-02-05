import type { ToolSpec } from "../../types.js";

export const mod_h5pactivity_tools: ToolSpec[] = [
  {
    name: "mod_h5pactivity_get_attempts",
    moodleFunction: "mod_h5pactivity_get_attempts",
    description: "Moodle web service function `mod_h5pactivity_get_attempts`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_h5pactivity_get_h5pactivities_by_courses",
    moodleFunction: "mod_h5pactivity_get_h5pactivities_by_courses",
    description: "Moodle web service function `mod_h5pactivity_get_h5pactivities_by_courses`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_h5pactivity_get_h5pactivity_access_information",
    moodleFunction: "mod_h5pactivity_get_h5pactivity_access_information",
    description: "Moodle web service function `mod_h5pactivity_get_h5pactivity_access_information`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_h5pactivity_get_results",
    moodleFunction: "mod_h5pactivity_get_results",
    description: "Moodle web service function `mod_h5pactivity_get_results`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_h5pactivity_get_user_attempts",
    moodleFunction: "mod_h5pactivity_get_user_attempts",
    description: "Moodle web service function `mod_h5pactivity_get_user_attempts`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_h5pactivity_log_report_viewed",
    moodleFunction: "mod_h5pactivity_log_report_viewed",
    description: "Moodle web service function `mod_h5pactivity_log_report_viewed`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_h5pactivity_view_h5pactivity",
    moodleFunction: "mod_h5pactivity_view_h5pactivity",
    description: "Moodle web service function `mod_h5pactivity_view_h5pactivity`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
