import type { ToolSpec } from "../../types.js";

export const gradereport_overview_tools: ToolSpec[] = [
  {
    name: "gradereport_overview_get_course_grades",
    moodleFunction: "gradereport_overview_get_course_grades",
    description: "Moodle web service function `gradereport_overview_get_course_grades`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "gradereport_overview_view_grade_report",
    moodleFunction: "gradereport_overview_view_grade_report",
    description: "Moodle web service function `gradereport_overview_view_grade_report`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
