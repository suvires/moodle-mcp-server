import type { ToolSpec } from "../../types.js";

export const core_create_tools: ToolSpec[] = [
  {
    name: "core_create_userfeedback_action_record",
    moodleFunction: "core_create_userfeedback_action_record",
    description: "Moodle web service function `core_create_userfeedback_action_record`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
