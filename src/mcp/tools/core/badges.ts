import type { ToolSpec } from "../../types.js";

export const core_badges_tools: ToolSpec[] = [
  {
    name: "core_badges_disable_badges",
    moodleFunction: "core_badges_disable_badges",
    description: "Moodle web service function `core_badges_disable_badges`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_badges_enable_badges",
    moodleFunction: "core_badges_enable_badges",
    description: "Moodle web service function `core_badges_enable_badges`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_badges_get_badge",
    moodleFunction: "core_badges_get_badge",
    description: "Moodle web service function `core_badges_get_badge`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_badges_get_user_badge_by_hash",
    moodleFunction: "core_badges_get_user_badge_by_hash",
    description: "Moodle web service function `core_badges_get_user_badge_by_hash`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_badges_get_user_badges",
    moodleFunction: "core_badges_get_user_badges",
    description: "Moodle web service function `core_badges_get_user_badges`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
