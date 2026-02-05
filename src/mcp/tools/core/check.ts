import type { ToolSpec } from "../../types.js";

export const core_check_tools: ToolSpec[] = [
  {
    name: "core_check_get_result_admintree",
    moodleFunction: "core_check_get_result_admintree",
    description:
      "Gets the admin tree check results showing system health status. Returns hierarchical check results for site administration. Admin-only.",
    inputSchema: {
      type: "object",
      properties: {
        section: {
          type: "string",
          description: "Admin tree section to check. Leave empty for root.",
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin"],
    examples: {
      minimal: {},
    },
  },
];
