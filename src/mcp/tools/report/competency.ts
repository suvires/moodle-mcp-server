import type { ToolSpec } from "../../types.js";

export const report_competency_tools: ToolSpec[] = [
  {
    name: "report_competency_data_for_report",
    moodleFunction: "report_competency_data_for_report",
    description: "Moodle web service function `report_competency_data_for_report`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
