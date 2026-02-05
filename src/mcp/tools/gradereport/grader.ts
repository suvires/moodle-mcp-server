import type { ToolSpec } from "../../types.js";

export const gradereport_grader_tools: ToolSpec[] = [
  {
    name: "gradereport_grader_get_users_in_report",
    moodleFunction: "gradereport_grader_get_users_in_report",
    description: "Moodle web service function `gradereport_grader_get_users_in_report`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
