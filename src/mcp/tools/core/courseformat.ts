import type { ToolSpec } from "../../types.js";

export const core_courseformat_tools: ToolSpec[] = [
  {
    name: "core_courseformat_create_module",
    moodleFunction: "core_courseformat_create_module",
    description: "Moodle web service function `core_courseformat_create_module`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_courseformat_file_handlers",
    moodleFunction: "core_courseformat_file_handlers",
    description: "Moodle web service function `core_courseformat_file_handlers`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_courseformat_get_overview_information",
    moodleFunction: "core_courseformat_get_overview_information",
    description: "Moodle web service function `core_courseformat_get_overview_information`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_courseformat_get_section_content_items",
    moodleFunction: "core_courseformat_get_section_content_items",
    description: "Moodle web service function `core_courseformat_get_section_content_items`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_courseformat_get_state",
    moodleFunction: "core_courseformat_get_state",
    description: "Moodle web service function `core_courseformat_get_state`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_courseformat_log_view_overview_information",
    moodleFunction: "core_courseformat_log_view_overview_information",
    description: "Moodle web service function `core_courseformat_log_view_overview_information`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_courseformat_new_module",
    moodleFunction: "core_courseformat_new_module",
    description: "Moodle web service function `core_courseformat_new_module`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_courseformat_update_course",
    moodleFunction: "core_courseformat_update_course",
    description: "Moodle web service function `core_courseformat_update_course`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
