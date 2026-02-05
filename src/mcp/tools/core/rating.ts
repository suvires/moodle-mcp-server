import type { ToolSpec } from "../../types.js";

export const core_rating_tools: ToolSpec[] = [
  {
    name: "core_rating_add_rating",
    moodleFunction: "core_rating_add_rating",
    description: "Moodle web service function `core_rating_add_rating`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_rating_get_item_ratings",
    moodleFunction: "core_rating_get_item_ratings",
    description: "Moodle web service function `core_rating_get_item_ratings`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
