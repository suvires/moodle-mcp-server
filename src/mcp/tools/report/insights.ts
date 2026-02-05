import type { ToolSpec } from "../../types.js";

export const report_insights_tools: ToolSpec[] = [
  {
    name: "report_insights_action_executed",
    moodleFunction: "report_insights_action_executed",
    description:
      "Records that an action was taken on an analytics insight/prediction. Used to track responses to analytics predictions like 'students at risk' for model improvement.",
    inputSchema: {
      type: "object",
      properties: {
        actionname: {
          type: "string",
          minLength: 1,
          description: "Name of the action taken (e.g., 'notused', 'useful', 'notuseful', 'fixed', 'incorrectlyflagged').",
        },
        predictionid: {
          type: "integer",
          minimum: 1,
          description: "Prediction ID the action was taken on.",
        },
      },
      required: ["actionname", "predictionid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { actionname: "useful", predictionid: 42 },
    },
  },
];
