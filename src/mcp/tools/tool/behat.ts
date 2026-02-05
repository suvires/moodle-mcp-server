import type { ToolSpec } from "../../types.js";

export const tool_behat_tools: ToolSpec[] = [
  {
    name: "tool_behat_get_entity_generator",
    moodleFunction: "tool_behat_get_entity_generator",
    description:
      "Gets entity generator information for Behat testing. Returns available data generators for creating test fixtures (users, courses, activities, etc.) in automated tests.",
    inputSchema: {
      type: "object",
      properties: {
        entitytype: {
          type: "string",
          minLength: 1,
          description: "Entity type to get generator for (e.g., 'user', 'course', 'activity').",
        },
      },
      required: ["entitytype"],
      additionalProperties: false,
    },
    allowedRoles: ["admin"],
    examples: { minimal: { entitytype: "user" } },
  },
];
