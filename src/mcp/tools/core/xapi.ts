import type { ToolSpec } from "../../types.js";

export const core_xapi_tools: ToolSpec[] = [
  {
    name: "core_xapi_delete_state",
    moodleFunction: "core_xapi_delete_state",
    description: "Moodle web service function `core_xapi_delete_state`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_xapi_delete_states",
    moodleFunction: "core_xapi_delete_states",
    description: "Moodle web service function `core_xapi_delete_states`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_xapi_get_state",
    moodleFunction: "core_xapi_get_state",
    description: "Moodle web service function `core_xapi_get_state`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_xapi_get_states",
    moodleFunction: "core_xapi_get_states",
    description: "Moodle web service function `core_xapi_get_states`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_xapi_post_state",
    moodleFunction: "core_xapi_post_state",
    description: "Moodle web service function `core_xapi_post_state`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_xapi_statement_post",
    moodleFunction: "core_xapi_statement_post",
    description: "Moodle web service function `core_xapi_statement_post`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
