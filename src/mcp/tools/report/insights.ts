import type { ToolSpec } from "../../types.js";

export const report_insights_tools: ToolSpec[] = [
  {
    name: "report_insights_action_executed",
    moodleFunction: "report_insights_action_executed",
    description: "Moodle web service function `report_insights_action_executed`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
