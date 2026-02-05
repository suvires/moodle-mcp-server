import type { ToolSpec } from "../../types.js";

export const core_create_tools: ToolSpec[] = [
  {
    name: "core_create_userfeedback_action_record",
    moodleFunction: "core_create_userfeedback_action_record",
    description:
      "Records a user feedback action (like clicking 'give feedback' or 'remind me later'). Used for Moodle's user feedback collection system.",
    inputSchema: {
      type: "object",
      properties: {
        action: {
          type: "string",
          enum: ["give", "remind"],
          description: "Action type: 'give' (will provide feedback) or 'remind' (remind later).",
        },
        contextid: {
          type: "integer",
          minimum: 1,
          description: "Context ID where the action was taken.",
        },
      },
      required: ["action", "contextid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { action: "give", contextid: 1 },
    },
  },
];
