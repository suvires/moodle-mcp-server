import type { ToolSpec } from "../../types.js";

export const core_course_tools: ToolSpec[] = [
  {
    name: "core_course_add_content_item_to_user_favourites",
    moodleFunction: "core_course_add_content_item_to_user_favourites",
    description:
      "Adds a content item (activity type) to user's favourites. Returns the updated favourite status.",
    inputSchema: {
      type: "object",
      properties: {
        componentname: {
          type: "string",
          description: "Component name, e.g. 'mod_forum', 'mod_quiz'",
        },
        contentitemid: {
          type: "integer",
          minimum: 1,
          description: "Content item ID",
        },
      },
      required: ["componentname", "contentitemid"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: { minimal: { componentname: "mod_forum", contentitemid: 1 } },
  },
  {
    name: "core_course_check_updates",
    moodleFunction: "core_course_check_updates",
    description:
      "Checks for updates in course modules since a given time. Returns list of modules with updates.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID to check",
        },
        tocheck: {
          type: "array",
          description: "Modules to check for updates",
          items: {
            type: "object",
            properties: {
              contextlevel: {
                type: "string",
                enum: ["module"],
                description: "Context level",
              },
              id: {
                type: "integer",
                description: "Course module ID",
              },
              since: {
                type: "integer",
                description: "Unix timestamp to check updates since",
              },
            },
            required: ["contextlevel", "id", "since"],
            additionalProperties: false,
          },
        },
        filter: {
          type: "array",
          description: "Optional filter for update types",
          items: { type: "string" },
        },
      },
      required: ["courseid", "tocheck"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: {
      minimal: {
        courseid: 2,
        tocheck: [{ contextlevel: "module", id: 5, since: 1700000000 }],
      },
    },
  },
  {
    name: "core_course_create_categories",
    moodleFunction: "core_course_create_categories",
    description:
      "Creates one or more course categories. Returns array of created category objects with id, name.",
    inputSchema: {
      type: "object",
      properties: {
        categories: {
          type: "array",
          minItems: 1,
          description: "Categories to create",
          items: {
            type: "object",
            properties: {
              name: {
                type: "string",
                minLength: 1,
                description: "Category name",
              },
              parent: {
                type: "integer",
                default: 0,
                description: "Parent category ID (0 for top level)",
              },
              idnumber: {
                type: "string",
                description: "Optional ID number for external reference",
              },
              description: {
                type: "string",
                description: "Category description",
              },
              descriptionformat: {
                type: "integer",
                enum: [0, 1, 2, 4],
                default: 1,
                description: "Description format: 0=MOODLE, 1=HTML, 2=PLAIN, 4=MARKDOWN",
              },
              theme: {
                type: "string",
                description: "Theme to force for this category",
              },
            },
            required: ["name"],
            additionalProperties: true, // Moodle may accept additional fields
          },
        },
      },
      required: ["categories"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { categories: [{ name: "New Category" }] },
      typical: {
        categories: [
          { name: "Science", parent: 0, description: "Science courses" },
        ],
      },
    },
  },
  {
    name: "core_course_create_courses",
    moodleFunction: "core_course_create_courses",
    description:
      "Creates one or more courses. Returns array of created course objects with id, shortname.",
    inputSchema: {
      type: "object",
      properties: {
        courses: {
          type: "array",
          minItems: 1,
          description: "Courses to create",
          items: {
            type: "object",
            properties: {
              fullname: {
                type: "string",
                minLength: 1,
                description: "Full course name",
              },
              shortname: {
                type: "string",
                minLength: 1,
                description: "Short course name (unique identifier)",
              },
              categoryid: {
                type: "integer",
                minimum: 1,
                description: "Category ID where the course will be created",
              },
              idnumber: {
                type: "string",
                description: "Optional ID number for external reference",
              },
              summary: {
                type: "string",
                description: "Course summary/description",
              },
              summaryformat: {
                type: "integer",
                enum: [0, 1, 2, 4],
                default: 1,
                description: "Summary format: 0=MOODLE, 1=HTML, 2=PLAIN, 4=MARKDOWN",
              },
              format: {
                type: "string",
                enum: ["topics", "weeks", "social", "singleactivity"],
                default: "topics",
                description: "Course format",
              },
              showgrades: {
                type: "integer",
                enum: [0, 1],
                default: 1,
                description: "Show gradebook to students",
              },
              newsitems: {
                type: "integer",
                minimum: 0,
                maximum: 10,
                default: 5,
                description: "Number of news items to show",
              },
              startdate: {
                type: "integer",
                description: "Course start date (Unix timestamp)",
              },
              enddate: {
                type: "integer",
                description: "Course end date (Unix timestamp, 0 for no end)",
              },
              numsections: {
                type: "integer",
                minimum: 0,
                description: "Number of course sections",
              },
              maxbytes: {
                type: "integer",
                description: "Maximum upload file size",
              },
              showreports: {
                type: "integer",
                enum: [0, 1],
                description: "Show activity reports",
              },
              visible: {
                type: "integer",
                enum: [0, 1],
                default: 1,
                description: "Course visibility (1=visible, 0=hidden)",
              },
              groupmode: {
                type: "integer",
                enum: [0, 1, 2],
                default: 0,
                description: "Group mode: 0=no groups, 1=separate, 2=visible",
              },
              groupmodeforce: {
                type: "integer",
                enum: [0, 1],
                default: 0,
                description: "Force group mode for all activities",
              },
              enablecompletion: {
                type: "integer",
                enum: [0, 1],
                description: "Enable completion tracking",
              },
              lang: {
                type: "string",
                description: "Force language (empty for default)",
              },
            },
            required: ["fullname", "shortname", "categoryid"],
            additionalProperties: true, // Moodle accepts many optional fields
          },
        },
      },
      required: ["courses"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: {
        courses: [
          { fullname: "Introduction to AI", shortname: "AI101", categoryid: 1 },
        ],
      },
      typical: {
        courses: [
          {
            fullname: "Introduction to AI",
            shortname: "AI101",
            categoryid: 1,
            summary: "Learn the basics of artificial intelligence",
            format: "topics",
            visible: 1,
            startdate: 1704067200,
          },
        ],
      },
    },
  },
  {
    name: "core_course_delete_categories",
    moodleFunction: "core_course_delete_categories",
    description:
      "Deletes course categories. Courses can be moved to another category or deleted.",
    inputSchema: {
      type: "object",
      properties: {
        categories: {
          type: "array",
          minItems: 1,
          description: "Categories to delete",
          items: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                minimum: 1,
                description: "Category ID to delete",
              },
              newparent: {
                type: "integer",
                description:
                  "New parent category for courses (if not deleting courses)",
              },
              recursive: {
                type: "integer",
                enum: [0, 1],
                default: 0,
                description: "Delete subcategories recursively",
              },
            },
            required: ["id"],
            additionalProperties: false,
          },
        },
      },
      required: ["categories"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { categories: [{ id: 5 }] },
      typical: { categories: [{ id: 5, newparent: 1, recursive: 1 }] },
    },
  },
  {
    name: "core_course_delete_courses",
    moodleFunction: "core_course_delete_courses",
    description:
      "Deletes courses by ID. This is a destructive operation and cannot be undone.",
    inputSchema: {
      type: "object",
      properties: {
        courseids: {
          type: "array",
          minItems: 1,
          description: "Array of course IDs to delete",
          items: {
            type: "integer",
            minimum: 1,
          },
        },
      },
      required: ["courseids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: { courseids: [5, 6, 7] } },
  },
  {
    name: "core_course_delete_modules",
    moodleFunction: "core_course_delete_modules",
    description:
      "Deletes course modules (activities) by their course module ID. Destructive operation.",
    inputSchema: {
      type: "object",
      properties: {
        cmids: {
          type: "array",
          minItems: 1,
          description: "Array of course module IDs to delete",
          items: {
            type: "integer",
            minimum: 1,
          },
        },
      },
      required: ["cmids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: { minimal: { cmids: [10, 11] } },
  },
  {
    name: "core_course_duplicate_course",
    moodleFunction: "core_course_duplicate_course",
    description:
      "Duplicates an existing course with optional settings. Returns new course ID.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Source course ID to duplicate",
        },
        fullname: {
          type: "string",
          minLength: 1,
          description: "Full name for the new course",
        },
        shortname: {
          type: "string",
          minLength: 1,
          description: "Short name for the new course (must be unique)",
        },
        categoryid: {
          type: "integer",
          minimum: 1,
          description: "Category ID for the new course",
        },
        visible: {
          type: "integer",
          enum: [0, 1],
          default: 1,
          description: "Visibility of the new course",
        },
        options: {
          type: "array",
          description: "Backup/restore options",
          items: {
            type: "object",
            properties: {
              name: {
                type: "string",
                description: "Option name (e.g., 'activities', 'blocks', 'users')",
              },
              value: {
                type: "string",
                description: "Option value ('0' or '1')",
              },
            },
            required: ["name", "value"],
            additionalProperties: false,
          },
        },
      },
      required: ["courseid", "fullname", "shortname", "categoryid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: {
        courseid: 2,
        fullname: "AI Course Copy",
        shortname: "AI101-COPY",
        categoryid: 1,
      },
      typical: {
        courseid: 2,
        fullname: "AI Course 2024",
        shortname: "AI101-2024",
        categoryid: 1,
        visible: 0,
        options: [
          { name: "activities", value: "1" },
          { name: "users", value: "0" },
        ],
      },
    },
  },
  {
    name: "core_course_edit_module",
    moodleFunction: "core_course_edit_module",
    description:
      "Performs editing actions on a course module (show, hide, duplicate, etc.).",
    inputSchema: {
      type: "object",
      properties: {
        action: {
          type: "string",
          enum: ["show", "hide", "stealth", "duplicate", "delete", "moveleft", "moveright"],
          description: "Action to perform",
        },
        id: {
          type: "integer",
          minimum: 1,
          description: "Course module ID",
        },
        sectionreturn: {
          type: "integer",
          description: "Section to return to after action",
        },
      },
      required: ["action", "id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { action: "hide", id: 5 },
      typical: { action: "duplicate", id: 5, sectionreturn: 1 },
    },
  },
  {
    name: "core_course_edit_section",
    moodleFunction: "core_course_edit_section",
    description:
      "Performs editing actions on a course section (show, hide, mark highlighted).",
    inputSchema: {
      type: "object",
      properties: {
        action: {
          type: "string",
          enum: ["show", "hide", "sethighlight", "setmarker"],
          description: "Action to perform",
        },
        id: {
          type: "integer",
          minimum: 0,
          description: "Section ID",
        },
        sectionreturn: {
          type: "integer",
          description: "Section number to return to",
        },
      },
      required: ["action", "id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: { minimal: { action: "hide", id: 2 } },
  },
  {
    name: "core_course_get_categories",
    moodleFunction: "core_course_get_categories",
    description:
      "Gets course categories list with optional filtering. Returns array of category objects.",
    inputSchema: {
      type: "object",
      properties: {
        criteria: {
          type: "array",
          description: "Filter criteria (empty for all categories)",
          items: {
            type: "object",
            properties: {
              key: {
                type: "string",
                enum: ["id", "ids", "name", "parent", "idnumber", "visible", "theme"],
                description: "Field to filter by",
              },
              value: {
                type: "string",
                description: "Value to match",
              },
            },
            required: ["key", "value"],
            additionalProperties: false,
          },
        },
        addsubcategories: {
          type: "integer",
          enum: [0, 1],
          default: 1,
          description: "Include subcategories in results",
        },
      },
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: {
      minimal: {},
      typical: { criteria: [{ key: "parent", value: "0" }] },
    },
  },
  {
    name: "core_course_get_contents",
    moodleFunction: "core_course_get_contents",
    description:
      "Gets the complete course content structure including sections and modules. Essential for navigating course activities.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID",
        },
        options: {
          type: "array",
          description: "Options to filter content",
          items: {
            type: "object",
            properties: {
              name: {
                type: "string",
                enum: [
                  "excludemodules",
                  "excludecontents",
                  "includestealthmodules",
                  "sectionid",
                  "sectionnumber",
                  "cmid",
                  "modname",
                  "modid",
                ],
                description: "Option name",
              },
              value: {
                type: "string",
                description: "Option value",
              },
            },
            required: ["name", "value"],
            additionalProperties: false,
          },
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: {
      minimal: { courseid: 2 },
      typical: {
        courseid: 2,
        options: [{ name: "excludecontents", value: "0" }],
      },
    },
  },
  {
    name: "core_course_get_course_content_items",
    moodleFunction: "core_course_get_course_content_items",
    description:
      "Gets available content items (activity types) that can be added to a course.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: { minimal: { courseid: 2 } },
  },
  {
    name: "core_course_get_course_module",
    moodleFunction: "core_course_get_course_module",
    description:
      "Gets detailed information about a single course module by its ID.",
    inputSchema: {
      type: "object",
      properties: {
        cmid: {
          type: "integer",
          minimum: 1,
          description: "Course module ID",
        },
      },
      required: ["cmid"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: { minimal: { cmid: 5 } },
  },
  {
    name: "core_course_get_course_module_by_instance",
    moodleFunction: "core_course_get_course_module_by_instance",
    description:
      "Gets course module info by module name and instance ID. Useful when you have the activity ID but not the cmid.",
    inputSchema: {
      type: "object",
      properties: {
        module: {
          type: "string",
          description: "Module type name (e.g., 'forum', 'quiz', 'assign')",
        },
        instance: {
          type: "integer",
          minimum: 1,
          description: "Module instance ID (the activity's own ID)",
        },
      },
      required: ["module", "instance"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: { minimal: { module: "forum", instance: 3 } },
  },
  {
    name: "core_course_get_courses",
    moodleFunction: "core_course_get_courses",
    description:
      "Gets courses by ID array. Without parameters, returns all courses user can view. Returns full course details.",
    inputSchema: {
      type: "object",
      properties: {
        options: {
          type: "object",
          description: "Query options",
          properties: {
            ids: {
              type: "array",
              description: "Array of course IDs to retrieve",
              items: { type: "integer", minimum: 1 },
            },
          },
          additionalProperties: false,
        },
      },
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: {
      minimal: {},
      typical: { options: { ids: [2, 3, 4] } },
    },
  },
  {
    name: "core_course_get_courses_by_field",
    moodleFunction: "core_course_get_courses_by_field",
    description:
      "Gets courses filtered by a specific field. More flexible than get_courses for searching.",
    inputSchema: {
      type: "object",
      properties: {
        field: {
          type: "string",
          enum: ["id", "ids", "shortname", "idnumber", "category"],
          default: "",
          description: "Field to filter by (empty for all courses)",
        },
        value: {
          type: "string",
          description: "Value to match (comma-separated for 'ids')",
        },
      },
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: {
      minimal: {},
      typical: { field: "category", value: "1" },
    },
  },
  {
    name: "core_course_get_enrolled_courses_by_timeline_classification",
    moodleFunction: "core_course_get_enrolled_courses_by_timeline_classification",
    description:
      "Gets user's enrolled courses filtered by timeline classification (past, inprogress, future).",
    inputSchema: {
      type: "object",
      properties: {
        classification: {
          type: "string",
          enum: ["all", "past", "inprogress", "future", "favourites", "hidden"],
          description: "Timeline classification filter",
        },
        limit: {
          type: "integer",
          minimum: 0,
          default: 0,
          description: "Max courses to return (0 for all)",
        },
        offset: {
          type: "integer",
          minimum: 0,
          default: 0,
          description: "Number of courses to skip",
        },
        sort: {
          type: "string",
          description: "Sort field",
        },
      },
      required: ["classification"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: {
      minimal: { classification: "inprogress" },
      typical: { classification: "inprogress", limit: 10, offset: 0 },
    },
  },
  // Shortened from core_course_get_enrolled_courses_with_action_events_by_timeline_classification (MCP 64-char limit)
  {
    name: "core_course_get_enrolled_action_events_by_timeline",
    moodleFunction:
      "core_course_get_enrolled_courses_with_action_events_by_timeline_classification",
    description:
      "Gets enrolled courses with their upcoming action events (deadlines, etc.) by timeline.",
    inputSchema: {
      type: "object",
      properties: {
        classification: {
          type: "string",
          enum: ["all", "past", "inprogress", "future", "favourites", "hidden"],
          description: "Timeline classification filter",
        },
        limit: {
          type: "integer",
          minimum: 0,
          default: 0,
          description: "Max courses to return",
        },
        offset: {
          type: "integer",
          minimum: 0,
          default: 0,
          description: "Number of courses to skip",
        },
        sort: {
          type: "string",
          description: "Sort field",
        },
        customfieldname: {
          type: "string",
          description: "Custom field name to filter by",
        },
        customfieldvalue: {
          type: "string",
          description: "Custom field value to match",
        },
        searchvalue: {
          type: "string",
          description: "Search string for course name",
        },
        eventsfrom: {
          type: "integer",
          description: "Unix timestamp for event start range",
        },
        eventsto: {
          type: "integer",
          description: "Unix timestamp for event end range",
        },
      },
      required: ["classification"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: {
      minimal: { classification: "inprogress" },
    },
  },
  {
    name: "core_course_get_enrolled_users_by_cmid",
    moodleFunction: "core_course_get_enrolled_users_by_cmid",
    description:
      "Gets users enrolled in the course containing a specific course module.",
    inputSchema: {
      type: "object",
      properties: {
        cmid: {
          type: "integer",
          minimum: 1,
          description: "Course module ID",
        },
        groupid: {
          type: "integer",
          description: "Group ID to filter by (0 for all groups)",
        },
        onlyactive: {
          type: "integer",
          enum: [0, 1],
          default: 0,
          description: "Only return active enrolments",
        },
      },
      required: ["cmid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { cmid: 5 },
      typical: { cmid: 5, groupid: 0, onlyactive: 1 },
    },
  },
  {
    name: "core_course_get_module",
    moodleFunction: "core_course_get_module",
    description:
      "Gets basic module information. Simpler than get_course_module.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Course module ID",
        },
        sectionreturn: {
          type: "integer",
          description: "Section to return to",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: { minimal: { id: 5 } },
  },
  {
    name: "core_course_get_recent_courses",
    moodleFunction: "core_course_get_recent_courses",
    description:
      "Gets courses recently accessed by the current user, sorted by access time.",
    inputSchema: {
      type: "object",
      properties: {
        userid: {
          type: "integer",
          minimum: 1,
          description: "User ID (default: current user)",
        },
        limit: {
          type: "integer",
          minimum: 0,
          default: 0,
          description: "Max courses to return (0 for all)",
        },
        offset: {
          type: "integer",
          minimum: 0,
          default: 0,
          description: "Number of courses to skip",
        },
        sort: {
          type: "string",
          description: "Sort field",
        },
      },
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: {
      minimal: {},
      typical: { limit: 5 },
    },
  },
  {
    name: "core_course_get_updates_since",
    moodleFunction: "core_course_get_updates_since",
    description:
      "Gets all updates in a course since a given timestamp. Useful for syncing.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID",
        },
        since: {
          type: "integer",
          description: "Unix timestamp to check updates since",
        },
        filter: {
          type: "array",
          description: "Filter for specific update types",
          items: { type: "string" },
        },
      },
      required: ["courseid", "since"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: { minimal: { courseid: 2, since: 1700000000 } },
  },
  {
    name: "core_course_get_user_administration_options",
    moodleFunction: "core_course_get_user_administration_options",
    description:
      "Gets available administration options for courses for the current user.",
    inputSchema: {
      type: "object",
      properties: {
        courseids: {
          type: "array",
          minItems: 1,
          description: "Array of course IDs",
          items: { type: "integer", minimum: 1 },
        },
      },
      required: ["courseids"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: { minimal: { courseids: [2, 3] } },
  },
  {
    name: "core_course_get_user_navigation_options",
    moodleFunction: "core_course_get_user_navigation_options",
    description:
      "Gets available navigation options for courses for the current user.",
    inputSchema: {
      type: "object",
      properties: {
        courseids: {
          type: "array",
          minItems: 1,
          description: "Array of course IDs",
          items: { type: "integer", minimum: 1 },
        },
      },
      required: ["courseids"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: { minimal: { courseids: [2] } },
  },
  {
    name: "core_course_import_course",
    moodleFunction: "core_course_import_course",
    description:
      "Imports content from one course to another using backup/restore.",
    inputSchema: {
      type: "object",
      properties: {
        importfrom: {
          type: "integer",
          minimum: 1,
          description: "Source course ID",
        },
        importto: {
          type: "integer",
          minimum: 1,
          description: "Destination course ID",
        },
        deletecontent: {
          type: "integer",
          enum: [0, 1],
          default: 0,
          description: "Delete existing content in destination",
        },
        options: {
          type: "array",
          description: "Import options",
          items: {
            type: "object",
            properties: {
              name: { type: "string", description: "Option name" },
              value: { type: "integer", description: "Option value" },
            },
            required: ["name", "value"],
            additionalProperties: false,
          },
        },
      },
      required: ["importfrom", "importto"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { importfrom: 2, importto: 5 },
      typical: {
        importfrom: 2,
        importto: 5,
        deletecontent: 0,
        options: [{ name: "activities", value: 1 }],
      },
    },
  },
  {
    name: "core_course_remove_content_item_from_user_favourites",
    moodleFunction: "core_course_remove_content_item_from_user_favourites",
    description:
      "Removes a content item (activity type) from user's favourites.",
    inputSchema: {
      type: "object",
      properties: {
        componentname: {
          type: "string",
          description: "Component name, e.g. 'mod_forum'",
        },
        contentitemid: {
          type: "integer",
          minimum: 1,
          description: "Content item ID",
        },
      },
      required: ["componentname", "contentitemid"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: { minimal: { componentname: "mod_forum", contentitemid: 1 } },
  },
  {
    name: "core_course_search_courses",
    moodleFunction: "core_course_search_courses",
    description:
      "Searches courses by text query. Returns courses matching the search criteria.",
    inputSchema: {
      type: "object",
      properties: {
        criterianame: {
          type: "string",
          enum: ["search", "modulelist", "blocklist", "tagid"],
          description: "Search criteria type",
        },
        criteriavalue: {
          type: "string",
          description: "Search value",
        },
        page: {
          type: "integer",
          minimum: 0,
          default: 0,
          description: "Page number for pagination",
        },
        perpage: {
          type: "integer",
          minimum: 1,
          default: 20,
          description: "Results per page",
        },
        requiredcapabilities: {
          type: "array",
          description: "Required capabilities to filter results",
          items: { type: "string" },
        },
        limittoenrolled: {
          type: "integer",
          enum: [0, 1],
          default: 0,
          description: "Limit to enrolled courses only",
        },
        onlywithcompletion: {
          type: "integer",
          enum: [0, 1],
          default: 0,
          description: "Only courses with completion enabled",
        },
      },
      required: ["criterianame", "criteriavalue"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: {
      minimal: { criterianame: "search", criteriavalue: "programming" },
      typical: {
        criterianame: "search",
        criteriavalue: "python",
        page: 0,
        perpage: 10,
      },
    },
  },
  {
    name: "core_course_set_favourite_courses",
    moodleFunction: "core_course_set_favourite_courses",
    description:
      "Sets courses as favourites or removes them from favourites for the current user.",
    inputSchema: {
      type: "object",
      properties: {
        courses: {
          type: "array",
          minItems: 1,
          description: "Courses to update favourite status",
          items: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                minimum: 1,
                description: "Course ID",
              },
              favourite: {
                type: "integer",
                enum: [0, 1],
                description: "1 to favourite, 0 to unfavourite",
              },
            },
            required: ["id", "favourite"],
            additionalProperties: false,
          },
        },
      },
      required: ["courses"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: {
      minimal: { courses: [{ id: 2, favourite: 1 }] },
    },
  },
  {
    name: "core_course_toggle_activity_recommendation",
    moodleFunction: "core_course_toggle_activity_recommendation",
    description:
      "Toggles activity recommendation status for a content item in a course.",
    inputSchema: {
      type: "object",
      properties: {
        area: {
          type: "string",
          description: "Activity area identifier",
        },
        id: {
          type: "integer",
          minimum: 1,
          description: "Activity ID",
        },
      },
      required: ["area", "id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: { area: "mod_forum", id: 1 } },
  },
  {
    name: "core_course_update_categories",
    moodleFunction: "core_course_update_categories",
    description:
      "Updates existing course categories. Only specified fields are updated.",
    inputSchema: {
      type: "object",
      properties: {
        categories: {
          type: "array",
          minItems: 1,
          description: "Categories to update",
          items: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                minimum: 1,
                description: "Category ID to update",
              },
              name: {
                type: "string",
                description: "New category name",
              },
              idnumber: {
                type: "string",
                description: "New ID number",
              },
              parent: {
                type: "integer",
                description: "New parent category ID",
              },
              description: {
                type: "string",
                description: "New description",
              },
              descriptionformat: {
                type: "integer",
                enum: [0, 1, 2, 4],
                description: "Description format",
              },
              theme: {
                type: "string",
                description: "Theme override",
              },
            },
            required: ["id"],
            additionalProperties: true, // May vary by Moodle version
          },
        },
      },
      required: ["categories"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { categories: [{ id: 2, name: "Updated Name" }] },
    },
  },
  {
    name: "core_course_update_courses",
    moodleFunction: "core_course_update_courses",
    description:
      "Updates existing courses. Only specified fields are updated.",
    inputSchema: {
      type: "object",
      properties: {
        courses: {
          type: "array",
          minItems: 1,
          description: "Courses to update",
          items: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                minimum: 1,
                description: "Course ID to update",
              },
              fullname: {
                type: "string",
                description: "New full name",
              },
              shortname: {
                type: "string",
                description: "New short name",
              },
              categoryid: {
                type: "integer",
                description: "New category ID",
              },
              idnumber: {
                type: "string",
                description: "New ID number",
              },
              summary: {
                type: "string",
                description: "New summary",
              },
              summaryformat: {
                type: "integer",
                enum: [0, 1, 2, 4],
                description: "Summary format",
              },
              format: {
                type: "string",
                description: "Course format",
              },
              showgrades: {
                type: "integer",
                enum: [0, 1],
                description: "Show grades",
              },
              newsitems: {
                type: "integer",
                description: "News items count",
              },
              startdate: {
                type: "integer",
                description: "Start date (Unix timestamp)",
              },
              enddate: {
                type: "integer",
                description: "End date (Unix timestamp)",
              },
              numsections: {
                type: "integer",
                description: "Number of sections",
              },
              maxbytes: {
                type: "integer",
                description: "Max upload size",
              },
              showreports: {
                type: "integer",
                enum: [0, 1],
                description: "Show reports",
              },
              visible: {
                type: "integer",
                enum: [0, 1],
                description: "Visibility",
              },
              groupmode: {
                type: "integer",
                enum: [0, 1, 2],
                description: "Group mode",
              },
              groupmodeforce: {
                type: "integer",
                enum: [0, 1],
                description: "Force group mode",
              },
              enablecompletion: {
                type: "integer",
                enum: [0, 1],
                description: "Enable completion",
              },
              lang: {
                type: "string",
                description: "Force language",
              },
            },
            required: ["id"],
            additionalProperties: true, // Courses have many optional fields
          },
        },
      },
      required: ["courses"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { courses: [{ id: 2, fullname: "Updated Course Name" }] },
      typical: {
        courses: [{ id: 2, fullname: "Updated Name", visible: 1, enddate: 1735689600 }],
      },
    },
  },
  {
    name: "core_course_view_course",
    moodleFunction: "core_course_view_course",
    description:
      "Triggers the course viewed event. Use when navigating to a course to track access.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID being viewed",
        },
        sectionnumber: {
          type: "integer",
          minimum: 0,
          description: "Section number being viewed (optional)",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: {
      minimal: { courseid: 2 },
      typical: { courseid: 2, sectionnumber: 1 },
    },
  },
  {
    name: "core_course_view_module_instance_list",
    moodleFunction: "core_course_view_module_instance_list",
    description:
      "Triggers module instance list view event. Use when viewing all activities of a type.",
    inputSchema: {
      type: "object",
      properties: {
        module: {
          type: "string",
          description: "Module name (e.g. 'forum', 'quiz')",
        },
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID",
        },
      },
      required: ["module", "courseid"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: { minimal: { module: "forum", courseid: 2 } },
  },
];
