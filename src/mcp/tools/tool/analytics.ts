import type { ToolSpec } from "../../types.js";

export const tool_analytics_tools: ToolSpec[] = [
  {
    name: "tool_analytics_potential_contexts",
    moodleFunction: "tool_analytics_potential_contexts",
    description: "Moodle web service function `tool_analytics_potential_contexts`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager"],
    examples: { minimal: {} },
  },
];
