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
  {
    name: "core_course_search_courses",
    moodleFunction: "core_course_search_courses",
    description: "Search courses by name, module, block, or tag.",
    inputSchema: {
      type: "object",
      properties: {
        criterianame: {
          type: "string",
          description: "Criteria name: search, modulelist (admin only), blocklist (admin only), or tagid.",
          enum: ["search", "modulelist", "blocklist", "tagid"],
        },
        criteriavalue: {
          type: "string",
          description: "Criteria value to search for.",
        },
        page: {
          type: "integer",
          description: "Page number (0 based). Default is 0.",
          default: 0,
        },
        perpage: {
          type: "integer",
          description: "Items per page. Default is 0.",
          default: 0,
        },
        requiredcapabilities: {
          type: "array",
          items: {
            type: "string",
          },
          description: "Optional list of required capabilities to filter courses by permission.",
          default: [],
        },
        limittoenrolled: {
          type: "integer",
          description: "Limit to enrolled courses (0 or 1). Default is 0.",
          default: 0,
        },
        onlywithcompletion: {
          type: "integer",
          description: "Limit to courses where completion is enabled (0 or 1). Default is 0.",
          default: 0,
        },
      },
      required: ["criterianame", "criteriavalue"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "teacher", "editingteacher", "student"],
    examples: {
      minimal: {
        criterianame: "search",
        criteriavalue: "python",
      },
      typical: {
        criterianame: "search",
        criteriavalue: "python",
        page: 0,
        perpage: 10,
        limittoenrolled: 1,
      },
    },
  },
];