import type { ToolSpec } from "../../types.js";

export const core_sms_tools: ToolSpec[] = [
  {
    name: "core_sms_set_gateway_status",
    moodleFunction: "core_sms_set_gateway_status",
    description:
      "Enables or disables an SMS gateway. Only admins can manage SMS gateway configurations.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "SMS gateway instance ID.",
        },
        enabled: {
          type: "boolean",
          description: "True to enable the gateway, false to disable.",
        },
      },
      required: ["id", "enabled"],
      additionalProperties: false,
    },
    allowedRoles: ["admin"],
    examples: {
      minimal: { id: 1, enabled: true },
    },
  },
];
