import type { ToolSpec } from "../../types.js";

export const gradereport_overview_tools: ToolSpec[] = [
  {
    name: "gradereport_overview_get_course_grades",
    moodleFunction: "gradereport_overview_get_course_grades",
    description:
      "Gets course grades for a user across multiple courses. Returns final grades summary for course overview display. Users can only view their own grades unless they have gradereport/overview:viewall capability.",
    inputSchema: {
      type: "object",
      properties: {
        userid: {
          type: "integer",
          minimum: 1,
          description: "User ID to get grades for. Users can typically only view their own grades.",
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {},
      typical: { userid: 5 },
    },
  },
  {
    name: "gradereport_overview_view_grade_report",
    moodleFunction: "gradereport_overview_view_grade_report",
    description:
      "Triggers the overview grade report viewed event for logging and analytics. Call this when displaying the overview grades page.",
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
          minimum: 1,
          description: "User ID whose report is being viewed.",
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
