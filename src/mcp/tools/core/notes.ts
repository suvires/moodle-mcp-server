import type { ToolSpec } from "../../types.js";

export const core_notes_tools: ToolSpec[] = [
  {
    name: "core_notes_create_notes",
    moodleFunction: "core_notes_create_notes",
    description: "Moodle web service function `core_notes_create_notes`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_notes_delete_notes",
    moodleFunction: "core_notes_delete_notes",
    description: "Moodle web service function `core_notes_delete_notes`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_notes_get_course_notes",
    moodleFunction: "core_notes_get_course_notes",
    description: "Moodle web service function `core_notes_get_course_notes`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_notes_get_notes",
    moodleFunction: "core_notes_get_notes",
    description: "Moodle web service function `core_notes_get_notes`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_notes_update_notes",
    moodleFunction: "core_notes_update_notes",
    description: "Moodle web service function `core_notes_update_notes`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_notes_view_notes",
    moodleFunction: "core_notes_view_notes",
    description: "Moodle web service function `core_notes_view_notes`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
