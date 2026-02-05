import type { ToolSpec } from "../../types.js";

export const core_blog_tools: ToolSpec[] = [
  {
    name: "core_blog_add_entry",
    moodleFunction: "core_blog_add_entry",
    description: "Moodle web service function `core_blog_add_entry`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_blog_delete_entry",
    moodleFunction: "core_blog_delete_entry",
    description: "Moodle web service function `core_blog_delete_entry`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_blog_get_access_information",
    moodleFunction: "core_blog_get_access_information",
    description: "Moodle web service function `core_blog_get_access_information`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_blog_get_entries",
    moodleFunction: "core_blog_get_entries",
    description: "Moodle web service function `core_blog_get_entries`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_blog_prepare_entry_for_edition",
    moodleFunction: "core_blog_prepare_entry_for_edition",
    description: "Moodle web service function `core_blog_prepare_entry_for_edition`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_blog_update_entry",
    moodleFunction: "core_blog_update_entry",
    description: "Moodle web service function `core_blog_update_entry`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_blog_view_entries",
    moodleFunction: "core_blog_view_entries",
    description: "Moodle web service function `core_blog_view_entries`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
