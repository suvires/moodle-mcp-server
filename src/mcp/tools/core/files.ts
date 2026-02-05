import type { ToolSpec } from "../../types.js";

export const core_files_tools: ToolSpec[] = [
  {
    name: "core_files_delete_draft_files",
    moodleFunction: "core_files_delete_draft_files",
    description: "Moodle web service function `core_files_delete_draft_files`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_files_get_files",
    moodleFunction: "core_files_get_files",
    description: "Moodle web service function `core_files_get_files`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_files_get_unused_draft_itemid",
    moodleFunction: "core_files_get_unused_draft_itemid",
    description: "Moodle web service function `core_files_get_unused_draft_itemid`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_files_upload",
    moodleFunction: "core_files_upload",
    description: "Moodle web service function `core_files_upload`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
