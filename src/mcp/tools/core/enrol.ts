import type { ToolSpec } from "../../types.js";

export const core_enrol_tools: ToolSpec[] = [
  {
    name: "core_enrol_get_course_enrolment_methods",
    moodleFunction: "core_enrol_get_course_enrolment_methods",
    description: "Returns the list of enrolment methods configured for a given course.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          description: "Course ID to retrieve enrolment methods for.",
          minimum: 1,
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { courseid: 45 },
    },
  },

  {
    name: "core_enrol_get_enrolled_users",
    moodleFunction: "core_enrol_get_enrolled_users",
    description:
      "Returns users enrolled in a given course, with optional field selection and filtering.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          description: "Course ID to retrieve enrolled users for.",
          minimum: 1,
        },
        options: {
          type: "array",
          description:
            "Optional query options (e.g., filtering, included fields). The exact option names depend on Moodle version.",
          items: {
            type: "object",
            properties: {
              name: { type: "string", description: "Option name." },
              value: { type: "string", description: "Option value." },
            },
            required: ["name", "value"],
            additionalProperties: false,
          },
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { courseid: 45 },
    },
  },

  {
    name: "core_enrol_get_enrolled_users_with_capability",
    moodleFunction: "core_enrol_get_enrolled_users_with_capability",
    description:
      "Returns enrolled users in a course who have a given capability, optionally within a group.",
    inputSchema: {
      type: "object",
      properties: {
        coursecapabilities: {
          type: "array",
          description:
            "List of course+capability queries. Each item requests users in a course that have a specific capability.",
          minItems: 1,
          items: {
            type: "object",
            properties: {
              courseid: {
                type: "integer",
                description: "Course ID to check.",
                minimum: 1,
              },
              capability: {
                type: "string",
                description: "Capability string, e.g. 'moodle/course:update' or 'mod/assign:grade'.",
                minLength: 1,
              },
              groupid: {
                type: "integer",
                description: "Optional group ID filter.",
                minimum: 0,
                default: 0,
              },
            },
            required: ["courseid", "capability"],
            additionalProperties: false,
          },
        },
      },
      required: ["coursecapabilities"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: {
        coursecapabilities: [{ courseid: 45, capability: "mod/assign:grade" }],
      },
    },
  },

  {
    name: "core_enrol_get_potential_users",
    moodleFunction: "core_enrol_get_potential_users",
    description:
      "Returns users who could potentially be enrolled in a given course (not currently enrolled), optionally filtered by search and role.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          description: "Course ID to find potential users for.",
          minimum: 1,
        },
        search: {
          type: "string",
          description: "Optional search term to filter users (name, email, etc.).",
          default: "",
        },
        roleid: {
          type: "integer",
          description: "Optional role ID to filter potential users by assignable role.",
          minimum: 0,
          default: 0,
        },
        enrolid: {
          type: "integer",
          description:
            "Optional enrolment instance ID context (if required by your Moodle version/site config).",
          minimum: 0,
          default: 0,
        },
        limitfrom: {
          type: "integer",
          description: "Pagination offset.",
          minimum: 0,
          default: 0,
        },
        limitnum: {
          type: "integer",
          description: "Pagination limit.",
          minimum: 0,
          default: 0,
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { courseid: 45, search: "ana" },
    },
  },

  {
    name: "core_enrol_get_users_courses",
    moodleFunction: "core_enrol_get_users_courses",
    description: "Returns the courses a given user is enrolled in.",
    inputSchema: {
      type: "object",
      properties: {
        userid: {
          type: "integer",
          description: "User ID to retrieve courses for.",
          minimum: 1,
        },
        returnusercount: {
          type: "boolean",
          description:
            "Whether to include user count information in the response (if supported by your Moodle version).",
          default: false,
        },
      },
      required: ["userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { userid: 123 },
    },
  },

  {
    name: "core_enrol_search_users",
    moodleFunction: "core_enrol_search_users",
    description:
      "Searches for users that match a given query, usually for enrolment-related selection UIs.",
    inputSchema: {
      type: "object",
      properties: {
        search: {
          type: "string",
          description: "Search term (name, email, idnumber, etc.).",
          minLength: 1,
        },
        courseid: {
          type: "integer",
          description:
            "Optional course context to filter results / permissions (recommended when possible).",
          minimum: 1,
        },
        limitfrom: {
          type: "integer",
          description: "Pagination offset.",
          minimum: 0,
          default: 0,
        },
        limitnum: {
          type: "integer",
          description: "Pagination limit.",
          minimum: 0,
          default: 0,
        },
      },
      required: ["search"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { search: "ana", limitfrom: 0, limitnum: 20 },
    },
  },

  {
    name: "core_enrol_unenrol_user_enrolment",
    moodleFunction: "core_enrol_unenrol_user_enrolment",
    description:
      "Unenrols a single user from a course enrolment (core-level unenrol action, not limited to the manual plugin).",
    inputSchema: {
      type: "object",
      properties: {
        userid: {
          type: "integer",
          description: "User ID to unenrol.",
          minimum: 1,
        },
        courseid: {
          type: "integer",
          description: "Course ID to unenrol the user from.",
          minimum: 1,
        },
      },
      required: ["userid", "courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { userid: 123, courseid: 45 },
    },
  },
];