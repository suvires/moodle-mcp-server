import type { ToolSpec } from "../../types.js";

export const mod_scorm_tools: ToolSpec[] = [
  {
    name: "mod_scorm_get_scorm_access_information",
    moodleFunction: "mod_scorm_get_scorm_access_information",
    description: "Moodle web service function `mod_scorm_get_scorm_access_information`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_scorm_get_scorm_attempt_count",
    moodleFunction: "mod_scorm_get_scorm_attempt_count",
    description: "Moodle web service function `mod_scorm_get_scorm_attempt_count`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_scorm_get_scorm_sco_tracks",
    moodleFunction: "mod_scorm_get_scorm_sco_tracks",
    description: "Moodle web service function `mod_scorm_get_scorm_sco_tracks`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_scorm_get_scorm_scoes",
    moodleFunction: "mod_scorm_get_scorm_scoes",
    description: "Moodle web service function `mod_scorm_get_scorm_scoes`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_scorm_get_scorm_user_data",
    moodleFunction: "mod_scorm_get_scorm_user_data",
    description: "Moodle web service function `mod_scorm_get_scorm_user_data`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_scorm_get_scorms_by_courses",
    moodleFunction: "mod_scorm_get_scorms_by_courses",
    description: "Moodle web service function `mod_scorm_get_scorms_by_courses`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_scorm_insert_scorm_tracks",
    moodleFunction: "mod_scorm_insert_scorm_tracks",
    description: "Moodle web service function `mod_scorm_insert_scorm_tracks`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_scorm_launch_sco",
    moodleFunction: "mod_scorm_launch_sco",
    description: "Moodle web service function `mod_scorm_launch_sco`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_scorm_view_scorm",
    moodleFunction: "mod_scorm_view_scorm",
    description: "Moodle web service function `mod_scorm_view_scorm`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
