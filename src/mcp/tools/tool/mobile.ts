import type { ToolSpec } from "../../types.js";

export const tool_mobile_tools: ToolSpec[] = [
  {
    name: "tool_mobile_call_external_functions",
    moodleFunction: "tool_mobile_call_external_functions",
    description: "Moodle web service function `tool_mobile_call_external_functions`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "tool_mobile_get_autologin_key",
    moodleFunction: "tool_mobile_get_autologin_key",
    description: "Moodle web service function `tool_mobile_get_autologin_key`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "tool_mobile_get_config",
    moodleFunction: "tool_mobile_get_config",
    description: "Moodle web service function `tool_mobile_get_config`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "tool_mobile_get_content",
    moodleFunction: "tool_mobile_get_content",
    description: "Moodle web service function `tool_mobile_get_content`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "tool_mobile_get_plugins_supporting_mobile",
    moodleFunction: "tool_mobile_get_plugins_supporting_mobile",
    description: "Moodle web service function `tool_mobile_get_plugins_supporting_mobile`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "tool_mobile_get_public_config",
    moodleFunction: "tool_mobile_get_public_config",
    description: "Moodle web service function `tool_mobile_get_public_config`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "tool_mobile_get_tokens_for_qr_login",
    moodleFunction: "tool_mobile_get_tokens_for_qr_login",
    description: "Moodle web service function `tool_mobile_get_tokens_for_qr_login`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "tool_mobile_validate_subscription_key",
    moodleFunction: "tool_mobile_validate_subscription_key",
    description: "Moodle web service function `tool_mobile_validate_subscription_key`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
