import type { ToolSpec } from "../../types.js";

export const gradereport_grader_tools: ToolSpec[] = [
  {
    name: "gradereport_grader_get_users_in_report",
    moodleFunction: "gradereport_grader_get_users_in_report",
    description:
      "Gets the list of users displayed in the grader report for a course. Supports filtering, grouping, and pagination. Returns user details for the gradebook interface.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID to get grader report users for.",
        },
        groupid: {
          type: "integer",
          minimum: 0,
          description: "Group ID to filter by. 0 for all users.",
        },
        sortby: {
          type: "string",
          enum: ["firstname", "lastname", "email", "idnumber"],
          description: "Field to sort users by.",
        },
        sortdirection: {
          type: "string",
          enum: ["asc", "desc"],
          description: "Sort direction.",
        },
        perpage: {
          type: "integer",
          minimum: 1,
          maximum: 500,
          description: "Number of users per page.",
        },
        page: {
          type: "integer",
          minimum: 0,
          description: "Page number (0-indexed).",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { courseid: 2 },
      typical: { courseid: 2, perpage: 50, page: 0 },
    },
  },
];
