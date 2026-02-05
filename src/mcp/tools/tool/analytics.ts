import type { ToolSpec } from "../../types.js";

export const tool_analytics_tools: ToolSpec[] = [
  {
    name: "tool_analytics_potential_contexts",
    moodleFunction: "tool_analytics_potential_contexts",
    description:
      "Gets potential contexts for analytics models. Returns a list of contexts (courses, categories, etc.) that can be used to train or apply analytics models.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Search query to filter contexts by name.",
        },
        modelid: {
          type: "integer",
          minimum: 1,
          description: "Analytics model ID to find contexts for.",
        },
      },
      required: ["modelid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: { modelid: 1 } },
  },
];
