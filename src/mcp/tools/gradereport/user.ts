import type { ToolSpec } from "../../types.js";

export const gradereport_user_tools: ToolSpec[] = [
  {
    name: "gradereport_user_get_access_information",
    moodleFunction: "gradereport_user_get_access_information",
    description:
      "Gets access information for the user grade report. Returns capabilities and permissions for viewing/managing grades in the specified course context.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID to check access for.",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { courseid: 2 },
    },
  },
  {
    name: "gradereport_user_get_grade_items",
    moodleFunction: "gradereport_user_get_grade_items",
    description:
      "Gets grade items and their grades for a user in a course. Returns detailed grade information including item names, grades, percentages, and feedback.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID to get grades from.",
        },
        userid: {
          type: "integer",
          minimum: 0,
          description: "User ID to get grades for. 0 for current user.",
        },
        groupid: {
          type: "integer",
          minimum: 0,
          description: "Group ID to filter by. 0 for no group filter.",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { courseid: 2 },
      typical: { courseid: 2, userid: 5 },
    },
  },
  {
    name: "gradereport_user_get_grades_table",
    moodleFunction: "gradereport_user_get_grades_table",
    description:
      "Gets the full grades table data for a user. Returns HTML-formatted grade table suitable for display, including all grade items, categories, and totals.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID to get grades table from.",
        },
        userid: {
          type: "integer",
          minimum: 0,
          description: "User ID to get grades for. 0 for current user.",
        },
        groupid: {
          type: "integer",
          minimum: 0,
          description: "Group ID context. 0 for no group filter.",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { courseid: 2 },
      typical: { courseid: 2, userid: 5 },
    },
  },
  {
    name: "gradereport_user_view_grade_report",
    moodleFunction: "gradereport_user_view_grade_report",
    description:
      "Triggers the user grade report viewed event for logging and analytics. Call this when displaying a user's grade report.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID context for the view event.",
        },
        userid: {
          type: "integer",
          minimum: 0,
          description: "User ID whose grades are being viewed. 0 for current user.",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { courseid: 2 },
      typical: { courseid: 2, userid: 5 },
    },
  },
];
