import type { ToolSpec } from "../../types.js";

export const block_recentlyaccesseditems_tools: ToolSpec[] = [
  {
    name: "block_recentlyaccesseditems_get_recent_items",
    moodleFunction: "block_recentlyaccesseditems_get_recent_items",
    description:
      "Returns the current user's recently accessed items (courses, activities, resources) as shown in the 'Recently accessed items' block. Returns array of items with id, name, type, courseid, and viewurl.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          minimum: 1,
          maximum: 100,
          description: "Maximum number of items to return. Default is site-configured limit.",
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {},
    },
  },
];
