import type { ToolSpec } from "../../types.js";

export const core_comment_tools: ToolSpec[] = [
  {
    name: "core_comment_add_comments",
    moodleFunction: "core_comment_add_comments",
    description: "Moodle web service function `core_comment_add_comments`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_comment_delete_comments",
    moodleFunction: "core_comment_delete_comments",
    description: "Moodle web service function `core_comment_delete_comments`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_comment_get_comments",
    moodleFunction: "core_comment_get_comments",
    description: "Moodle web service function `core_comment_get_comments`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
