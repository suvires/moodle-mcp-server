import type { ToolSpec } from "../../types.js";

export const message_popup_tools: ToolSpec[] = [
  {
    name: "message_popup_get_popup_notifications",
    moodleFunction: "message_popup_get_popup_notifications",
    description:
      "Gets popup notifications for a specified user (usually the current user), with ordering and pagination.",
    inputSchema: {
      type: "object",
      properties: {
        useridto: {
          type: "integer",
          description: "The user ID who received the notifications.",
          minimum: 1,
        },
        newestfirst: {
          type: "boolean",
          description: "True to order by newest first, false for oldest first.",
          default: true,
        },
        limit: {
          type: "integer",
          description: "Maximum number of notifications to return.",
          minimum: 0,
          default: 20,
        },
        offset: {
          type: "integer",
          description: "Offset for pagination.",
          minimum: 0,
          default: 0,
        },
      },
      required: ["useridto", "newestfirst", "limit", "offset"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { useridto: 123, newestfirst: true, limit: 20, offset: 0 },
    },
  },

  {
    name: "message_popup_get_unread_popup_notification_count",
    moodleFunction: "message_popup_get_unread_popup_notification_count",
    description: "Gets the unread popup notification count for a specified user (usually the current user).",
    inputSchema: {
      type: "object",
      properties: {
        useridto: {
          type: "integer",
         description: "The user ID who received the notifications.",
          minimum: 1,
        },
      },
      required: ["useridto"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { useridto: 123 },
    },
  },
];