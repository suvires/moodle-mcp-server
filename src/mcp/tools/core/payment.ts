import type { ToolSpec } from "../../types.js";

export const core_payment_tools: ToolSpec[] = [
  {
    name: "core_payment_get_available_gateways",
    moodleFunction: "core_payment_get_available_gateways",
    description: "Moodle web service function `core_payment_get_available_gateways`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
