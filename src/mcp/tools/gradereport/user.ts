import type { ToolSpec } from "../../types.js";

export const gradereport_user_tools: ToolSpec[] = [
  {
    name: "gradereport_user_get_access_information",
    moodleFunction: "gradereport_user_get_access_information",
    description: "Moodle web service function `gradereport_user_get_access_information`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "gradereport_user_get_grade_items",
    moodleFunction: "gradereport_user_get_grade_items",
    description: "Moodle web service function `gradereport_user_get_grade_items`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "gradereport_user_get_grades_table",
    moodleFunction: "gradereport_user_get_grades_table",
    description: "Moodle web service function `gradereport_user_get_grades_table`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "gradereport_user_view_grade_report",
    moodleFunction: "gradereport_user_view_grade_report",
    description: "Moodle web service function `gradereport_user_view_grade_report`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
