import type { ToolSpec } from "../../types.js";

export const core_contentbank_tools: ToolSpec[] = [
  {
    name: "core_contentbank_copy_content",
    moodleFunction: "core_contentbank_copy_content",
    description: "Moodle web service function `core_contentbank_copy_content`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_contentbank_delete_content",
    moodleFunction: "core_contentbank_delete_content",
    description: "Moodle web service function `core_contentbank_delete_content`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_contentbank_rename_content",
    moodleFunction: "core_contentbank_rename_content",
    description: "Moodle web service function `core_contentbank_rename_content`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_contentbank_set_content_visibility",
    moodleFunction: "core_contentbank_set_content_visibility",
    description: "Moodle web service function `core_contentbank_set_content_visibility`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
