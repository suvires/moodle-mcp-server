import type { ToolSpec } from "../../types.js";

export const core_completion_tools: ToolSpec[] = [
  {
    name: "core_completion_get_activities_completion_status",
    moodleFunction: "core_completion_get_activities_completion_status",
    description: "Moodle web service function `core_completion_get_activities_completion_status`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_completion_get_course_completion_status",
    moodleFunction: "core_completion_get_course_completion_status",
    description: "Moodle web service function `core_completion_get_course_completion_status`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_completion_mark_course_self_completed",
    moodleFunction: "core_completion_mark_course_self_completed",
    description: "Moodle web service function `core_completion_mark_course_self_completed`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_completion_override_activity_completion_status",
    moodleFunction: "core_completion_override_activity_completion_status",
    description: "Moodle web service function `core_completion_override_activity_completion_status`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_completion_update_activity_completion_status_manually",
    moodleFunction: "core_completion_update_activity_completion_status_manually",
    description: "Moodle web service function `core_completion_update_activity_completion_status_manually`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
