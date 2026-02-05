import type { ToolSpec } from "../../types.js";

export const core_sms_tools: ToolSpec[] = [
  {
    name: "core_sms_set_gateway_status",
    moodleFunction: "core_sms_set_gateway_status",
    description: "Moodle web service function `core_sms_set_gateway_status`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
