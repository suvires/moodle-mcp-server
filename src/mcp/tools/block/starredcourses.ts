import type { ToolSpec } from "../../types.js";

export const block_starredcourses_tools: ToolSpec[] = [
  {
    name: "block_starredcourses_get_starred_courses",
    moodleFunction: "block_starredcourses_get_starred_courses",
    description:
      "Returns the current user's starred (favourite) courses, as shown in the 'Starred courses' block.",
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