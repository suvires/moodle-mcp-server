import type { ToolSpec } from "../../types.js";

export const report_competency_tools: ToolSpec[] = [
  {
    name: "report_competency_data_for_report",
    moodleFunction: "report_competency_data_for_report",
    description:
      "Gets competency report data for a course or user. Returns competency framework, competencies, and user proficiency levels for competency-based reporting.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID to get competency report for.",
        },
        userid: {
          type: "integer",
          minimum: 0,
          description: "User ID to filter report for. 0 for all users.",
        },
        competencyid: {
          type: "integer",
          minimum: 0,
          description: "Competency ID to filter by. 0 for all competencies.",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { courseid: 2 },
      typical: { courseid: 2, userid: 5 },
    },
  },
];
