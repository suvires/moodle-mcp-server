import type { ToolSpec } from "../../types.js";

export const customfield_number_tools: ToolSpec[] = [
  {
    name: "customfield_number_recalculate_value",
    moodleFunction: "customfield_number_recalculate_value",
    description:
      "Recalculates a calculated number custom field value. Used when formula-based custom fields need to be updated after dependent data changes.",
    inputSchema: {
      type: "object",
      properties: {
        instanceid: {
          type: "integer",
          minimum: 1,
          description: "Instance ID of the custom field data to recalculate.",
        },
      },
      required: ["instanceid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: { instanceid: 42 } },
  },
];
