import type { ToolSpec } from "../../types.js";

export const core_get_tools: ToolSpec[] = [
  {
    name: "core_get_string",
    moodleFunction: "core_get_string",
    description:
      "Returns a single localized string from Moodle language packs (useful to display official Moodle text in the user's language).",
    inputSchema: {
      type: "object",
      properties: {
        stringid: {
          type: "string",
          description: "String identifier/key (e.g., 'fullname').",
          minLength: 1,
        },
        component: {
          type: "string",
          description: "Component name (e.g., 'moodle', 'core', 'enrol_manual', 'mod_assign').",
          minLength: 1,
        },
        lang: {
          type: "string",
          description:
            "Optional language code (e.g., 'en', 'es'). If omitted, uses the current user's language.",
        },
        stringparams: {
          type: "array",
          description:
            "Optional parameters for string placeholders. Each item is an object with a name and value.",
          items: {
            type: "object",
            properties: {
              name: { type: "string", minLength: 1, description: "Parameter name." },
              value: { type: "string", description: "Parameter value." },
            },
            required: ["name", "value"],
            additionalProperties: false,
          },
        },
      },
      required: ["stringid", "component"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {
        stringid: "fullname",
        component: "moodle",
      },
    },
  },

  {
    name: "core_get_strings",
    moodleFunction: "core_get_strings",
    description:
      "Returns multiple localized strings in one call (batch). Useful to reduce round-trips.",
    inputSchema: {
      type: "object",
      properties: {
        strings: {
          type: "array",
          minItems: 1,
          description: "List of strings to retrieve.",
          items: {
            type: "object",
            properties: {
              stringid: { type: "string", minLength: 1, description: "String identifier/key." },
              component: { type: "string", minLength: 1, description: "Component name." },
              lang: {
                type: "string",
                description:
                  "Optional language code. If omitted, uses the current user's language.",
              },
              stringparams: {
                type: "array",
                description: "Optional parameters for string placeholders.",
                items: {
                  type: "object",
                  properties: {
                    name: { type: "string", minLength: 1 },
                    value: { type: "string" },
                  },
                  required: ["name", "value"],
                  additionalProperties: false,
                },
              },
            },
            required: ["stringid", "component"],
            additionalProperties: false,
          },
        },
      },
      required: ["strings"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {
        strings: [
          { stringid: "fullname", component: "moodle" },
          { stringid: "course", component: "moodle" },
        ],
      },
    },
  },

  {
    name: "core_get_user_dates",
    moodleFunction: "core_get_user_dates",
    description:
      "Converts timestamps to user-formatted dates using the user's timezone and locale settings.",
    inputSchema: {
      type: "object",
      properties: {
        timestamps: {
          type: "array",
          minItems: 1,
          description: "List of Unix timestamps (seconds) to format for the user.",
          items: { type: "integer", minimum: 0 },
        },
      },
      required: ["timestamps"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {
        timestamps: [1764871200],
      },
    },
  },
];