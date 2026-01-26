import type { ToolSpec } from "../../types.js";

export const core_course_tools: ToolSpec[] = [
  {
    name: "core_course_get_courses",
    moodleFunction: "core_course_get_courses",
    description: "Gets the list of available courses in Moodle.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: {},
    },
  },
  {
    name: "core_course_get_contents",
    moodleFunction: "core_course_get_contents",
    description: "Gets the contents of a specific course in Moodle.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          description: "The ID of the course to retrieve contents for.",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "teacher", "editingteacher", "student"],
    examples: {
      minimal: {
        courseid: 2,
      },
    },
  },
];