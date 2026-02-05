import type { ToolSpec } from "../../types.js";

export const block_recentlyaccesseditems_tools: ToolSpec[] = [
  {
    name: "block_recentlyaccesseditems_get_recent_items",
    moodleFunction: "block_recentlyaccesseditems_get_recent_items",
    description:
      "Returns the current user's recently accessed items (e.g., courses, activities) as shown in the 'Recently accessed items' block.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {},
    },
  },
];