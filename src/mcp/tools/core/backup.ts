import type { ToolSpec } from "../../types.js";

export const core_backup_tools: ToolSpec[] = [
  {
    name: "core_backup_get_async_backup_links_backup",
    moodleFunction: "core_backup_get_async_backup_links_backup",
    description: "Moodle web service function `core_backup_get_async_backup_links_backup`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_backup_get_async_backup_links_restore",
    moodleFunction: "core_backup_get_async_backup_links_restore",
    description: "Moodle web service function `core_backup_get_async_backup_links_restore`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_backup_get_async_backup_progress",
    moodleFunction: "core_backup_get_async_backup_progress",
    description: "Moodle web service function `core_backup_get_async_backup_progress`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_backup_get_copy_progress",
    moodleFunction: "core_backup_get_copy_progress",
    description: "Moodle web service function `core_backup_get_copy_progress`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_backup_submit_copy_form",
    moodleFunction: "core_backup_submit_copy_form",
    description: "Moodle web service function `core_backup_submit_copy_form`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
