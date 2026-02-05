import type { ToolSpec } from "../../types.js";

export const core_payment_tools: ToolSpec[] = [
  {
    name: "core_payment_get_available_gateways",
    moodleFunction: "core_payment_get_available_gateways",
    description:
      "Gets available payment gateways for a specific payment area. Returns gateway info including name, description, and fee.",
    inputSchema: {
      type: "object",
      properties: {
        component: {
          type: "string",
          minLength: 1,
          description: "Component requesting payment (e.g., 'enrol_fee').",
        },
        paymentarea: {
          type: "string",
          minLength: 1,
          description: "Payment area within the component (e.g., 'fee').",
        },
        itemid: {
          type: "integer",
          minimum: 1,
          description: "Item ID being paid for (e.g., course enrolment instance ID).",
        },
      },
      required: ["component", "paymentarea", "itemid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { component: "enrol_fee", paymentarea: "fee", itemid: 5 },
    },
  },
];
