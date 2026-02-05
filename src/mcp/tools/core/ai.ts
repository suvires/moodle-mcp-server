import type { ToolSpec } from "../../types.js";

export const core_ai_tools: ToolSpec[] = [
  {
    name: "core_ai_delete_provider_instance",
    moodleFunction: "core_ai_delete_provider_instance",
    description: "Deletes an AI provider instance (admin action).",
    inputSchema: {
      type: "object",
      properties: {
        providerid: {
          type: "integer",
          description: "The provider instance ID to delete.",
          minimum: 1,
        },
      },
      required: ["providerid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin"],
    examples: {
      minimal: { providerid: 12 },
    },
  },

  {
    name: "core_ai_get_policy_status",
    moodleFunction: "core_ai_get_policy_status",
    description: "Gets a user's AI policy acceptance status.",
    inputSchema: {
      type: "object",
      properties: {
        userid: {
          type: "integer",
          description: "The user ID whose policy status will be retrieved.",
          minimum: 1,
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
    name: "core_ai_set_action",
    moodleFunction: "core_ai_set_action",
    description: "Enables/disables an AI action for a given plugin (admin action).",
    inputSchema: {
      type: "object",
      properties: {
        plugin: {
          type: "string",
          description: "The plugin name for the action to update.",
          minLength: 1,
        },
        state: {
          type: "integer",
          description: "Target state for the action (typically 0=disabled, 1=enabled).",
        },
      },
      required: ["plugin", "state"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { plugin: "aiplacement_courseassist", state: 1 },
    },
  },

  {
    name: "core_ai_set_policy_status",
    moodleFunction: "core_ai_set_policy_status",
    description: "Sets the AI policy acceptance status (typically records acceptance in a given context).",
    inputSchema: {
      type: "object",
      properties: {
        contextid: {
          type: "integer",
          description: "The context ID for which the policy acceptance is being set.",
          minimum: 1,
        },
      },
      required: ["contextid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { contextid: 56 },
    },
  },

  {
    name: "core_ai_set_provider_order",
    moodleFunction: "core_ai_set_provider_order",
    description: "Changes the ordering (priority) of an AI provider instance (admin action).",
    inputSchema: {
      type: "object",
      properties: {
        providerid: {
          type: "integer",
          description: "The provider instance ID to move.",
          minimum: 1,
        },
        direction: {
          type: "integer",
          description:
            "Direction to move the provider instance. Negative numbers typically move up, positive move down.",
        },
      },
      required: ["providerid", "direction"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { providerid: 12, direction: -1 },
    },
  },

  {
    name: "core_ai_set_provider_status",
    moodleFunction: "core_ai_set_provider_status",
    description: "Enables/disables an AI provider instance (admin action).",
    inputSchema: {
      type: "object",
      properties: {
        plugin: {
          type: "integer",
          description: "The provider instance ID.",
          minimum: 1,
        },
        state: {
          type: "integer",
          description: "Target state for the provider (typically 0=disabled, 1=enabled).",
        },
      },
      required: ["plugin", "state"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { plugin: 12, state: 1 },
    },
  },
];