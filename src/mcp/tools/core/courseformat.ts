import type { ToolSpec } from "../../types.js";

export const core_courseformat_tools: ToolSpec[] = [
  {
    name: "core_courseformat_create_module",
    moodleFunction: "core_courseformat_create_module",
    description:
      "Creates a new activity module in a course section. Returns the new course module ID and other module info.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID to add the module to.",
        },
        sectionid: {
          type: "integer",
          minimum: 0,
          description: "Section ID within the course.",
        },
        modname: {
          type: "string",
          minLength: 1,
          description: "Module type name (e.g., 'assign', 'forum', 'quiz').",
        },
        options: {
          type: "array",
          description: "Additional module creation options.",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              value: { type: "string" },
            },
            required: ["name", "value"],
            additionalProperties: false,
          },
        },
      },
      required: ["courseid", "sectionid", "modname"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { courseid: 2, sectionid: 1, modname: "forum" },
    },
  },
  {
    name: "core_courseformat_file_handlers",
    moodleFunction: "core_courseformat_file_handlers",
    description:
      "Gets the list of available file handlers for course format operations. Returns handlers that can process uploaded files.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID to get file handlers for.",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { courseid: 2 },
    },
  },
  {
    name: "core_courseformat_get_overview_information",
    moodleFunction: "core_courseformat_get_overview_information",
    description:
      "Gets overview information for a course (summary, progress, completion stats). Used by course format overview displays.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID to get overview for.",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { courseid: 2 },
    },
  },
  {
    name: "core_courseformat_get_section_content_items",
    moodleFunction: "core_courseformat_get_section_content_items",
    description:
      "Gets the content items (activities/resources) in a course section. Returns array of module objects.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID.",
        },
        sectionid: {
          type: "integer",
          minimum: 0,
          description: "Section ID to get items from.",
        },
      },
      required: ["courseid", "sectionid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { courseid: 2, sectionid: 1 },
    },
  },
  {
    name: "core_courseformat_get_state",
    moodleFunction: "core_courseformat_get_state",
    description:
      "Gets the complete course format state including all sections and modules. Used by reactive course formats for dynamic updates.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID to get state for.",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { courseid: 2 },
    },
  },
  {
    name: "core_courseformat_log_view_overview_information",
    moodleFunction: "core_courseformat_log_view_overview_information",
    description:
      "Logs that the course overview information was viewed. Used for analytics and activity tracking.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID that was viewed.",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { courseid: 2 },
    },
  },
  {
    name: "core_courseformat_new_module",
    moodleFunction: "core_courseformat_new_module",
    description:
      "Gets the form and configuration for creating a new module. Returns module form HTML and default settings.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID.",
        },
        sectionid: {
          type: "integer",
          minimum: 0,
          description: "Section ID where module will be added.",
        },
        modname: {
          type: "string",
          minLength: 1,
          description: "Module type name (e.g., 'assign', 'forum').",
        },
      },
      required: ["courseid", "sectionid", "modname"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { courseid: 2, sectionid: 1, modname: "page" },
    },
  },
  {
    name: "core_courseformat_update_course",
    moodleFunction: "core_courseformat_update_course",
    description:
      "Performs bulk course format updates (move sections, modules, update visibility, etc.). Accepts an array of actions.",
    inputSchema: {
      type: "object",
      properties: {
        action: {
          type: "string",
          minLength: 1,
          description:
            "Action to perform (e.g., 'section_move', 'cm_move', 'section_hide').",
        },
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID.",
        },
        ids: {
          type: "array",
          description: "IDs of items to update (section IDs or cmids).",
          items: {
            type: "integer",
            minimum: 0,
          },
        },
        targetsectionid: {
          type: "integer",
          description: "Target section ID for move operations.",
        },
        targetcmid: {
          type: "integer",
          description: "Target course module ID for relative positioning.",
        },
      },
      required: ["action", "courseid", "ids"],
      additionalProperties: true,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { action: "section_hide", courseid: 2, ids: [3] },
    },
  },
];
