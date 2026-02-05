import type { ToolSpec } from "../../types.js";

export const tool_behat_tools: ToolSpec[] = [
  {
    name: "tool_behat_get_entity_generator",
    moodleFunction: "tool_behat_get_entity_generator",
    description: "Moodle web service function `tool_behat_get_entity_generator`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin"],
    examples: { minimal: {} },
  },
];
