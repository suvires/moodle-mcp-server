import type { ToolSpec } from "../../types.js";

export const block_starredcourses_tools: ToolSpec[] = [
  {
    name: "block_starredcourses_get_starred_courses",
    moodleFunction: "block_starredcourses_get_starred_courses",
    description:
      "Returns the current user's starred (favourite) courses as shown in the 'Starred courses' block. Returns array of course objects with id, fullname, shortname, summary, and progress info.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          minimum: 0,
          description: "Maximum number of courses to return. Use 0 for no limit.",
        },
        offset: {
          type: "integer",
          minimum: 0,
          description: "Number of courses to skip for pagination. Default 0.",
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
