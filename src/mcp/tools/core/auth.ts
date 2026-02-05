import type { ToolSpec } from "../../types.js";

export const core_auth_tools: ToolSpec[] = [
  {
    name: "core_auth_confirm_user",
    moodleFunction: "core_auth_confirm_user",
    description: "Moodle web service function `core_auth_confirm_user`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_auth_is_age_digital_consent_verification_enabled",
    moodleFunction: "core_auth_is_age_digital_consent_verification_enabled",
    description: "Moodle web service function `core_auth_is_age_digital_consent_verification_enabled`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_auth_is_minor",
    moodleFunction: "core_auth_is_minor",
    description: "Moodle web service function `core_auth_is_minor`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_auth_request_password_reset",
    moodleFunction: "core_auth_request_password_reset",
    description: "Moodle web service function `core_auth_request_password_reset`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_auth_resend_confirmation_email",
    moodleFunction: "core_auth_resend_confirmation_email",
    description: "Moodle web service function `core_auth_resend_confirmation_email`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
