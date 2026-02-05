import type { ToolSpec } from "../../types.js";

export const paygw_paypal_tools: ToolSpec[] = [
  {
    name: "paygw_paypal_create_transaction_complete",
    moodleFunction: "paygw_paypal_create_transaction_complete",
    description: "Moodle web service function `paygw_paypal_create_transaction_complete`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager"],
    examples: { minimal: {} },
  },
];
