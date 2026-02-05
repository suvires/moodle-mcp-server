import type { ToolSpec } from "../../types.js";

export const core_filters_tools: ToolSpec[] = [
  {
    name: "core_filters_get_all_states",
    moodleFunction: "core_filters_get_all_states",
    description: "Moodle web service function `core_filters_get_all_states`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_filters_get_available_in_context",
    moodleFunction: "core_filters_get_available_in_context",
    description: "Moodle web service function `core_filters_get_available_in_context`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
