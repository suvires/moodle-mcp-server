import type { ToolSpec } from "../../types.js";

export const core_moodlenet_tools: ToolSpec[] = [
  {
    name: "core_moodlenet_auth_check",
    moodleFunction: "core_moodlenet_auth_check",
    description: "Moodle web service function `core_moodlenet_auth_check`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_moodlenet_get_share_info_activity",
    moodleFunction: "core_moodlenet_get_share_info_activity",
    description: "Moodle web service function `core_moodlenet_get_share_info_activity`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_moodlenet_get_shared_course_info",
    moodleFunction: "core_moodlenet_get_shared_course_info",
    description: "Moodle web service function `core_moodlenet_get_shared_course_info`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_moodlenet_send_activity",
    moodleFunction: "core_moodlenet_send_activity",
    description: "Moodle web service function `core_moodlenet_send_activity`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_moodlenet_send_course",
    moodleFunction: "core_moodlenet_send_course",
    description: "Moodle web service function `core_moodlenet_send_course`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
