import type { ToolSpec } from "../../types.js";

export const core_admin_tools: ToolSpec[] = [
  {
    name: "core_admin_set_block_protection",
    moodleFunction: "core_admin_set_block_protection",
    description:
      "Sets the protection status for a block type, preventing it from being deleted by users. Admin-only operation.",
    inputSchema: {
      type: "object",
      properties: {
        block: {
          type: "string",
          minLength: 1,
          description: "Block plugin name (e.g., 'online_users', 'calendar_month').",
        },
        state: {
          type: "integer",
          enum: [0, 1],
          description: "Protection state: 0=unprotected (can be deleted), 1=protected.",
        },
      },
      required: ["block", "state"],
      additionalProperties: false,
    },
    allowedRoles: ["admin"],
    examples: {
      minimal: { block: "online_users", state: 1 },
    },
  },
  {
    name: "core_admin_set_plugin_order",
    moodleFunction: "core_admin_set_plugin_order",
    description:
      "Changes the display/processing order of a plugin within its type. Admin-only operation.",
    inputSchema: {
      type: "object",
      properties: {
        plugin: {
          type: "string",
          minLength: 1,
          description: "Full plugin component name (e.g., 'block_online_users', 'mod_assign').",
        },
        direction: {
          type: "integer",
          description: "Direction to move: negative=up, positive=down (e.g., -1 or 1).",
        },
      },
      required: ["plugin", "direction"],
      additionalProperties: false,
    },
    allowedRoles: ["admin"],
    examples: {
      minimal: { plugin: "block_online_users", direction: -1 },
    },
  },
  {
    name: "core_admin_set_plugin_state",
    moodleFunction: "core_admin_set_plugin_state",
    description:
      "Enables or disables a plugin. Admin-only operation. Returns null on success.",
    inputSchema: {
      type: "object",
      properties: {
        plugin: {
          type: "string",
          minLength: 1,
          description: "Full plugin component name (e.g., 'block_online_users', 'mod_assign').",
        },
        state: {
          type: "integer",
          enum: [0, 1],
          description: "Plugin state: 0=disabled, 1=enabled.",
        },
      },
      required: ["plugin", "state"],
      additionalProperties: false,
    },
    allowedRoles: ["admin"],
    examples: {
      minimal: { plugin: "block_online_users", state: 1 },
    },
  },
];
