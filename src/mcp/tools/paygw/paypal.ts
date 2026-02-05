import type { ToolSpec } from "../../types.js";

export const paygw_paypal_tools: ToolSpec[] = [
  {
    name: "paygw_paypal_create_transaction_complete",
    moodleFunction: "paygw_paypal_create_transaction_complete",
    description:
      "Completes a PayPal payment transaction in Moodle. Called after PayPal redirects back to confirm the payment was successful and update the user's enrollment or purchase status.",
    inputSchema: {
      type: "object",
      properties: {
        component: {
          type: "string",
          minLength: 1,
          description: "Payment area component (e.g., 'enrol_fee').",
        },
        paymentarea: {
          type: "string",
          minLength: 1,
          description: "Payment area name (e.g., 'fee').",
        },
        itemid: {
          type: "integer",
          minimum: 1,
          description: "Item ID being purchased (e.g., course enrollment instance ID).",
        },
        orderid: {
          type: "string",
          minLength: 1,
          description: "PayPal order ID returned from PayPal checkout.",
        },
      },
      required: ["component", "paymentarea", "itemid", "orderid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {
        component: "enrol_fee",
        paymentarea: "fee",
        itemid: 10,
        orderid: "5O190127TN364715T",
      },
    },
  },
];
