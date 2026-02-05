import type { ToolSpec } from "../../types.js";

export const core_admin_tools: ToolSpec[] = [
  {
    name: "core_admin_set_block_protection",
    moodleFunction: "core_admin_set_block_protection",
    description: "Moodle web service function `core_admin_set_block_protection`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin"],
    examples: { minimal: {} },
  },
  {
    name: "core_admin_set_plugin_order",
    moodleFunction: "core_admin_set_plugin_order",
    description: "Moodle web service function `core_admin_set_plugin_order`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin"],
    examples: { minimal: {} },
  },
  {
    name: "core_admin_set_plugin_state",
    moodleFunction: "core_admin_set_plugin_state",
    description: "Moodle web service function `core_admin_set_plugin_state`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin"],
    examples: { minimal: {} },
  },
];
