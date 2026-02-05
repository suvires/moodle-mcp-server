import type { ToolSpec } from "../../types.js";

export const core_auth_tools: ToolSpec[] = [
  {
    name: "core_auth_confirm_user",
    moodleFunction: "core_auth_confirm_user",
    description:
      "Confirms a user account using the confirmation key sent via email during self-registration. Returns success status and warnings.",
    inputSchema: {
      type: "object",
      properties: {
        username: {
          type: "string",
          minLength: 1,
          description: "Username of the account to confirm.",
        },
        secret: {
          type: "string",
          minLength: 1,
          description: "Confirmation secret/key from the email.",
        },
      },
      required: ["username", "secret"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { username: "newuser", secret: "abc123secret" },
    },
  },
  {
    name: "core_auth_is_age_digital_consent_verification_enabled",
    moodleFunction: "core_auth_is_age_digital_consent_verification_enabled",
    description:
      "Checks if digital age of consent verification is enabled on the site. Returns boolean status. Used for GDPR compliance during registration.",
    inputSchema: {
      type: "object",
      properties: {},
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {},
    },
  },
  {
    name: "core_auth_is_minor",
    moodleFunction: "core_auth_is_minor",
    description:
      "Checks if a user is considered a minor based on their age and country for GDPR digital consent purposes. Returns boolean.",
    inputSchema: {
      type: "object",
      properties: {
        age: {
          type: "integer",
          minimum: 0,
          maximum: 150,
          description: "User's age in years.",
        },
        country: {
          type: "string",
          minLength: 2,
          maxLength: 2,
          description: "Two-letter ISO country code (e.g., 'US', 'GB', 'ES').",
        },
      },
      required: ["age", "country"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { age: 15, country: "ES" },
    },
  },
  {
    name: "core_auth_request_password_reset",
    moodleFunction: "core_auth_request_password_reset",
    description:
      "Requests a password reset for a user. Sends a reset email if the user exists. Returns success status.",
    inputSchema: {
      type: "object",
      properties: {
        username: {
          type: "string",
          description: "Username of the account. Either username or email is required.",
        },
        email: {
          type: "string",
          format: "email",
          description: "Email address of the account. Either username or email is required.",
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { email: "user@example.com" },
    },
  },
  {
    name: "core_auth_resend_confirmation_email",
    moodleFunction: "core_auth_resend_confirmation_email",
    description:
      "Resends the account confirmation email to an unconfirmed user. Returns success status.",
    inputSchema: {
      type: "object",
      properties: {
        username: {
          type: "string",
          minLength: 1,
          description: "Username of the unconfirmed account.",
        },
        password: {
          type: "string",
          minLength: 1,
          description: "Password of the unconfirmed account (for verification).",
        },
        redirect: {
          type: "string",
          description: "Optional redirect URL after confirmation.",
        },
      },
      required: ["username", "password"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { username: "newuser", password: "userpassword" },
    },
  },
];
