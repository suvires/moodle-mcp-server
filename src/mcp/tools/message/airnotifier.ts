import type { ToolSpec } from "../../types.js";

export const message_airnotifier_tools: ToolSpec[] = [
  {
    name: "message_airnotifier_is_system_configured",
    moodleFunction: "message_airnotifier_is_system_configured",
    description: "Tests whether the AirNotifier (mobile push notifications) settings have been configured on the site.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {},
    },
  },

  {
    name: "message_airnotifier_are_notification_preferences_configured",
    moodleFunction: "message_airnotifier_are_notification_preferences_configured",
    description:
      "Checks whether the given users have notification preferences configured for the AirNotifier message output.",
    inputSchema: {
      type: "object",
      properties: {
        userids: {
          type: "array",
          description: "Array of user IDs to check.",
          minItems: 1,
          items: { type: "integer", minimum: 1 },
        },
      },
      required: ["userids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { userids: [123] },
    },
  },

  {
    name: "message_airnotifier_get_user_devices",
    moodleFunction: "message_airnotifier_get_user_devices",
    description:
      "Returns the list of mobile devices registered in Moodle for push notifications for a given user (or current user if userid=0).",
    inputSchema: {
      type: "object",
      properties: {
        appid: {
          type: "string",
          description:
            "App unique id (usually a reversed domain). For the standard Moodle app this is often something like 'com.moodle.moodlemobile'.",
          minLength: 1,
        },
        userid: {
          type: "integer",
          description: "User ID to retrieve devices for. Use 0 for current user.",
          minimum: 0,
          default: 0,
        },
      },
      required: ["appid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { appid: "com.moodle.moodlemobile", userid: 0 },
    },
  },

  {
    name: "message_airnotifier_enable_device",
    moodleFunction: "message_airnotifier_enable_device",
    description:
      "Enables or disables a registered user device so it can receive push notifications.",
    inputSchema: {
      type: "object",
      properties: {
        deviceid: {
          type: "integer",
          description: "The device ID to enable/disable.",
          minimum: 1,
        },
        enable: {
          type: "boolean",
          description: "Whether to enable the device (true) or disable it (false).",
        },
      },
      required: ["deviceid", "enable"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { deviceid: 42, enable: true },
    },
  },
];