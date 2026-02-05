import type { ToolSpec } from "../../types.js";

export const tool_mobile_tools: ToolSpec[] = [
  {
    name: "tool_mobile_call_external_functions",
    moodleFunction: "tool_mobile_call_external_functions",
    description:
      "Calls multiple external functions in a single request. Used by mobile apps to batch API calls for efficiency.",
    inputSchema: {
      type: "object",
      properties: {
        requests: {
          type: "array",
          description: "List of web service function calls to execute.",
          items: {
            type: "object",
            properties: {
              function: { type: "string", minLength: 1, description: "Web service function name." },
              arguments: { type: "string", description: "JSON-encoded arguments for the function." },
            },
            required: ["function"],
          },
          minItems: 1,
        },
      },
      required: ["requests"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {
        requests: [{ function: "core_webservice_get_site_info", arguments: "{}" }],
      },
    },
  },
  {
    name: "tool_mobile_get_autologin_key",
    moodleFunction: "tool_mobile_get_autologin_key",
    description:
      "Gets a one-time autologin key for the mobile app. Key can be used once to automatically log in without credentials.",
    inputSchema: {
      type: "object",
      properties: {
        privatetoken: {
          type: "string",
          minLength: 1,
          description: "Private token for the user session.",
        },
      },
      required: ["privatetoken"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { privatetoken: "abc123def456" },
    },
  },
  {
    name: "tool_mobile_get_config",
    moodleFunction: "tool_mobile_get_config",
    description:
      "Gets mobile app configuration for the site. Returns settings like offline mode, download options, and feature flags.",
    inputSchema: {
      type: "object",
      properties: {
        section: {
          type: "string",
          description: "Configuration section to retrieve. Empty for all sections.",
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: {} },
  },
  {
    name: "tool_mobile_get_content",
    moodleFunction: "tool_mobile_get_content",
    description:
      "Gets content for a mobile app page. Returns page data based on the component and method specified.",
    inputSchema: {
      type: "object",
      properties: {
        component: {
          type: "string",
          minLength: 1,
          description: "Component providing the content (e.g., 'mod_forum').",
        },
        method: {
          type: "string",
          minLength: 1,
          description: "Method name within the component.",
        },
        args: {
          type: "array",
          description: "Arguments for the method.",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              value: { type: "string" },
            },
          },
        },
      },
      required: ["component", "method"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { component: "mod_forum", method: "view_forum" },
    },
  },
  {
    name: "tool_mobile_get_plugins_supporting_mobile",
    moodleFunction: "tool_mobile_get_plugins_supporting_mobile",
    description:
      "Gets list of plugins that support the mobile app. Returns plugin handlers and capabilities for mobile rendering.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: {} },
  },
  {
    name: "tool_mobile_get_public_config",
    moodleFunction: "tool_mobile_get_public_config",
    description:
      "Gets public configuration for the site (no authentication required). Returns branding, login options, and site info.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: {} },
  },
  {
    name: "tool_mobile_get_tokens_for_qr_login",
    moodleFunction: "tool_mobile_get_tokens_for_qr_login",
    description:
      "Gets tokens for QR code login. Returns tokens that can be encoded in a QR code for mobile app authentication.",
    inputSchema: {
      type: "object",
      properties: {
        qrloginkey: {
          type: "string",
          minLength: 1,
          description: "QR login key from the desktop browser session.",
        },
        userid: {
          type: "integer",
          minimum: 1,
          description: "User ID requesting the login.",
        },
      },
      required: ["qrloginkey", "userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { qrloginkey: "abc123", userid: 5 },
    },
  },
  {
    name: "tool_mobile_validate_subscription_key",
    moodleFunction: "tool_mobile_validate_subscription_key",
    description:
      "Validates a Moodle App subscription key. Checks if the key is valid for premium app features.",
    inputSchema: {
      type: "object",
      properties: {
        key: {
          type: "string",
          minLength: 1,
          description: "Subscription key to validate.",
        },
      },
      required: ["key"],
      additionalProperties: false,
    },
    allowedRoles: ["admin"],
    examples: {
      minimal: { key: "SUBSCRIPTION-KEY-123" },
    },
  },
];
