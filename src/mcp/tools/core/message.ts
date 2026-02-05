import type { ToolSpec } from "../../types.js";

/**
 * NOTE:
 * Moodle's core_message WS signatures vary a bit by version.
 * For “complex” endpoints (preferences / processors), schemas here stay permissive enough
 * to avoid breaking across minor version differences while still guiding correct usage.
 */
export const core_message_tools: ToolSpec[] = [
  // ---- Blocking / contacts ----
  {
    name: "core_message_block_user",
    moodleFunction: "core_message_block_user",
    description: "Blocks a user for the current user.",
    inputSchema: {
      type: "object",
      properties: {
        userid: { type: "integer", minimum: 1, description: "User ID to block." },
      },
      required: ["userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { userid: 123 } },
  },
  {
    name: "core_message_unblock_user",
    moodleFunction: "core_message_unblock_user",
    description: "Unblocks a previously blocked user for the current user.",
    inputSchema: {
      type: "object",
      properties: {
        userid: { type: "integer", minimum: 1, description: "User ID to unblock." },
      },
      required: ["userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { userid: 123 } },
  },
  {
    name: "core_message_create_contact_request",
    moodleFunction: "core_message_create_contact_request",
    description: "Creates a contact request to another user.",
    inputSchema: {
      type: "object",
      properties: {
        userid: { type: "integer", minimum: 1, description: "User ID to request as contact." },
      },
      required: ["userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { userid: 123 } },
  },
  {
    name: "core_message_confirm_contact_request",
    moodleFunction: "core_message_confirm_contact_request",
    description: "Confirms a received contact request from another user.",
    inputSchema: {
      type: "object",
      properties: {
        userid: { type: "integer", minimum: 1, description: "User ID who sent the contact request." },
      },
      required: ["userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { userid: 123 } },
  },
  {
    name: "core_message_decline_contact_request",
    moodleFunction: "core_message_decline_contact_request",
    description: "Declines a received contact request from another user.",
    inputSchema: {
      type: "object",
      properties: {
        userid: { type: "integer", minimum: 1, description: "User ID who sent the contact request." },
      },
      required: ["userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { userid: 123 } },
  },
  {
    name: "core_message_delete_contacts",
    moodleFunction: "core_message_delete_contacts",
    description: "Deletes one or more contacts for the current user.",
    inputSchema: {
      type: "object",
      properties: {
        userids: {
          type: "array",
          minItems: 1,
          description: "User IDs to remove from contacts.",
          items: { type: "integer", minimum: 1 },
        },
      },
      required: ["userids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { userids: [123, 124] } },
  },

  // ---- Conversations ----
  {
    name: "core_message_get_conversation",
    moodleFunction: "core_message_get_conversation",
    description: "Retrieves a conversation by id.",
    inputSchema: {
      type: "object",
      properties: {
        conversationid: { type: "integer", minimum: 1, description: "Conversation ID." },
        includecontactrequests: {
          type: "boolean",
          description: "Whether to include contact request info when applicable.",
          default: false,
        },
      },
      required: ["conversationid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { conversationid: 10 } },
  },
  {
    name: "core_message_get_conversation_between_users",
    moodleFunction: "core_message_get_conversation_between_users",
    description: "Retrieves the conversation between two users (or creates/returns the existing one, depending on Moodle config).",
    inputSchema: {
      type: "object",
      properties: {
        userid: { type: "integer", minimum: 1, description: "One user ID (often the current user)." },
        otheruserid: { type: "integer", minimum: 1, description: "The other user ID." },
        includecontactrequests: { type: "boolean", default: false },
      },
      required: ["userid", "otheruserid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { userid: 0 as any, otheruserid: 123 } }, // many installs use current user implicitly; keep example flexible
  },
  {
    name: "core_message_get_self_conversation",
    moodleFunction: "core_message_get_self_conversation",
    description: "Retrieves the self-conversation for a user (notes to self).",
    inputSchema: {
      type: "object",
      properties: {
        userid: { type: "integer", minimum: 1, description: "User ID (often current user)." },
      },
      required: ["userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { userid: 123 } },
  },
  {
    name: "core_message_get_conversation_counts",
    moodleFunction: "core_message_get_conversation_counts",
    description: "Returns conversation counts for a user (by type/status).",
    inputSchema: {
      type: "object",
      properties: {
        userid: { type: "integer", minimum: 1, description: "User ID to get counts for." },
      },
      required: ["userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { userid: 123 } },
  },
  {
    name: "core_message_get_unread_conversation_counts",
    moodleFunction: "core_message_get_unread_conversation_counts",
    description: "Returns unread conversation counts for a user (by type).",
    inputSchema: {
      type: "object",
      properties: {
        userid: { type: "integer", minimum: 1, description: "User ID to get unread counts for." },
      },
      required: ["userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { userid: 123 } },
  },
  {
    name: "core_message_get_unread_conversations_count",
    moodleFunction: "core_message_get_unread_conversations_count",
    description: "Returns the total unread conversations count for a user.",
    inputSchema: {
      type: "object",
      properties: {
        userid: { type: "integer", minimum: 1, description: "User ID." },
      },
      required: ["userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { userid: 123 } },
  },
  {
    name: "core_message_get_conversation_members",
    moodleFunction: "core_message_get_conversation_members",
    description: "Retrieves the members in a conversation.",
    inputSchema: {
      type: "object",
      properties: {
        conversationid: { type: "integer", minimum: 1, description: "Conversation ID." },
        includecontactrequests: { type: "boolean", default: false },
        limitfrom: { type: "integer", minimum: 0, default: 0 },
        limitnum: { type: "integer", minimum: 0, default: 0 },
      },
      required: ["conversationid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { conversationid: 10 } },
  },
  {
    name: "core_message_get_conversation_messages",
    moodleFunction: "core_message_get_conversation_messages",
    description: "Retrieves messages for a conversation, optionally paginated.",
    inputSchema: {
      type: "object",
      properties: {
        conversationid: { type: "integer", minimum: 1, description: "Conversation ID." },
        limitfrom: { type: "integer", minimum: 0, default: 0, description: "Offset." },
        limitnum: { type: "integer", minimum: 0, default: 20, description: "Max messages." },
        newestfirst: { type: "boolean", default: true, description: "Order newest first." },
        timefrom: { type: "integer", minimum: 0, description: "Optional lower bound timestamp (seconds)." },
      },
      required: ["conversationid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { conversationid: 10, limitfrom: 0, limitnum: 20, newestfirst: true } },
  },
  {
    name: "core_message_get_conversations",
    moodleFunction: "core_message_get_conversations",
    description: "Retrieves a list of conversations for a user, optionally filtered and paginated.",
    inputSchema: {
      type: "object",
      properties: {
        userid: { type: "integer", minimum: 1, description: "User ID to list conversations for." },
        limitfrom: { type: "integer", minimum: 0, default: 0 },
        limitnum: { type: "integer", minimum: 0, default: 20 },
        type: {
          type: "integer",
          description: "Optional type filter (implementation depends on Moodle version).",
        },
        favourites: { type: "boolean", description: "If true, return favourites only." },
        includecontactrequests: { type: "boolean", default: false },
      },
      required: ["userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { userid: 123, limitfrom: 0, limitnum: 20 } },
  },
  {
    name: "core_message_delete_conversations_by_id",
    moodleFunction: "core_message_delete_conversations_by_id",
    description: "Deletes one or more conversations by id (destructive).",
    inputSchema: {
      type: "object",
      properties: {
        conversationids: {
          type: "array",
          minItems: 1,
          items: { type: "integer", minimum: 1 },
          description: "Conversation IDs to delete.",
        },
      },
      required: ["conversationids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { conversationids: [10, 11] } },
  },

  // ---- Contacts / blocked lists ----
  {
    name: "core_message_get_blocked_users",
    moodleFunction: "core_message_get_blocked_users",
    description: "Returns the list of blocked users for a user.",
    inputSchema: {
      type: "object",
      properties: {
        userid: { type: "integer", minimum: 1, description: "User ID (often current user)." },
      },
      required: ["userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { userid: 123 } },
  },
  {
    name: "core_message_get_user_contacts",
    moodleFunction: "core_message_get_user_contacts",
    description: "Returns the contacts for a user.",
    inputSchema: {
      type: "object",
      properties: {
        userid: { type: "integer", minimum: 1, description: "User ID." },
        limitfrom: { type: "integer", minimum: 0, default: 0 },
        limitnum: { type: "integer", minimum: 0, default: 0 },
      },
      required: ["userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { userid: 123 } },
  },
  {
    name: "core_message_get_contact_requests",
    moodleFunction: "core_message_get_contact_requests",
    description: "Returns contact requests for a user.",
    inputSchema: {
      type: "object",
      properties: {
        userid: { type: "integer", minimum: 1, description: "User ID." },
        limitfrom: { type: "integer", minimum: 0, default: 0 },
        limitnum: { type: "integer", minimum: 0, default: 0 },
      },
      required: ["userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { userid: 123 } },
  },
  {
    name: "core_message_get_received_contact_requests_count",
    moodleFunction: "core_message_get_received_contact_requests_count",
    description: "Returns the number of received contact requests for a user.",
    inputSchema: {
      type: "object",
      properties: {
        userid: { type: "integer", minimum: 1, description: "User ID." },
      },
      required: ["userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { userid: 123 } },
  },

  // ---- Messages / notifications ----
  {
    name: "core_message_get_messages",
    moodleFunction: "core_message_get_messages",
    description:
      "Retrieves messages sent/received by a user (conversations, notifications or both), with optional filters/pagination.",
    inputSchema: {
      type: "object",
      properties: {
        useridto: { type: "integer", minimum: 1, description: "Target user ID (recipient)." },
        useridfrom: { type: "integer", minimum: 0, description: "Optional sender user ID filter." },
        type: {
          type: "string",
          description: "Optional type filter (e.g., 'conversations', 'notifications', 'both' depending on version).",
        },
        read: { type: "boolean", description: "Optional filter by read/unread." },
        newestfirst: { type: "boolean", default: true },
        limitfrom: { type: "integer", minimum: 0, default: 0 },
        limitnum: { type: "integer", minimum: 0, default: 20 },
      },
      required: ["useridto"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { useridto: 123, newestfirst: true, limitfrom: 0, limitnum: 20 } },
  },
  {
    name: "core_message_delete_message",
    moodleFunction: "core_message_delete_message",
    description: "Deletes a message for the current user (local delete).",
    inputSchema: {
      type: "object",
      properties: {
        messageid: { type: "integer", minimum: 1, description: "Message ID." },
      },
      required: ["messageid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { messageid: 555 } },
  },
  {
    name: "core_message_delete_message_for_all_users",
    moodleFunction: "core_message_delete_message_for_all_users",
    description: "Deletes a message for all users (high impact).",
    inputSchema: {
      type: "object",
      properties: {
        messageid: { type: "integer", minimum: 1, description: "Message ID." },
      },
      required: ["messageid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: { messageid: 555 } },
  },

  {
    name: "core_message_get_unread_notification_count",
    moodleFunction: "core_message_get_unread_notification_count",
    description: "Returns the unread notification count for a user.",
    inputSchema: {
      type: "object",
      properties: {
        useridto: { type: "integer", minimum: 1, description: "User ID receiving notifications." },
      },
      required: ["useridto"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { useridto: 123 } },
  },

  {
    name: "core_message_mark_all_conversation_messages_as_read",
    moodleFunction: "core_message_mark_all_conversation_messages_as_read",
    description: "Marks all messages in a conversation as read for the current user.",
    inputSchema: {
      type: "object",
      properties: {
        conversationid: { type: "integer", minimum: 1, description: "Conversation ID." },
      },
      required: ["conversationid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { conversationid: 10 } },
  },
  {
    name: "core_message_mark_message_read",
    moodleFunction: "core_message_mark_message_read",
    description: "Marks a message as read for the current user.",
    inputSchema: {
      type: "object",
      properties: {
        messageid: { type: "integer", minimum: 1, description: "Message ID." },
      },
      required: ["messageid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { messageid: 555 } },
  },
  {
    name: "core_message_mark_all_notifications_as_read",
    moodleFunction: "core_message_mark_all_notifications_as_read",
    description: "Marks all notifications as read for the current user.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: {} },
  },
  {
    name: "core_message_mark_notification_read",
    moodleFunction: "core_message_mark_notification_read",
    description: "Marks a notification as read for the current user.",
    inputSchema: {
      type: "object",
      properties: {
        notificationid: { type: "integer", minimum: 1, description: "Notification ID." },
      },
      required: ["notificationid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { notificationid: 999 } },
  },

  // ---- Search / lookup helpers ----
  {
    name: "core_message_message_search_users",
    moodleFunction: "core_message_message_search_users",
    description: "Searches users for messaging (e.g., to start conversations).",
    inputSchema: {
      type: "object",
      properties: {
        search: { type: "string", minLength: 1, description: "Search string (name/email/etc.)." },
        limitfrom: { type: "integer", minimum: 0, default: 0 },
        limitnum: { type: "integer", minimum: 0, default: 20 },
      },
      required: ["search"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { search: "ana", limitfrom: 0, limitnum: 20 } },
  },
  {
    name: "core_message_search_contacts",
    moodleFunction: "core_message_search_contacts",
    description: "Searches within the current user's contacts.",
    inputSchema: {
      type: "object",
      properties: {
        search: { type: "string", minLength: 1, description: "Search string." },
        limitfrom: { type: "integer", minimum: 0, default: 0 },
        limitnum: { type: "integer", minimum: 0, default: 20 },
      },
      required: ["search"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { search: "ana", limitfrom: 0, limitnum: 20 } },
  },

  // ---- Sending messages ----
  {
    name: "core_message_send_instant_messages",
    moodleFunction: "core_message_send_instant_messages",
    description: "Sends one or more instant messages to users.",
    inputSchema: {
      type: "object",
      properties: {
        messages: {
          type: "array",
          minItems: 1,
          description: "Messages to send.",
          items: {
            type: "object",
            properties: {
              touserid: { type: "integer", minimum: 1, description: "Recipient user ID." },
              text: { type: "string", minLength: 1, description: "Message text." },
              textformat: {
                type: "integer",
                description: "Text format (commonly 0=MOODLE, 1=HTML).",
                minimum: 0,
                default: 0,
              },
            },
            required: ["touserid", "text"],
            additionalProperties: false,
          },
        },
      },
      required: ["messages"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { messages: [{ touserid: 123, text: "Hola 👋" }] },
    },
  },
  {
    name: "core_message_send_messages_to_conversation",
    moodleFunction: "core_message_send_messages_to_conversation",
    description: "Sends one or more messages to an existing conversation.",
    inputSchema: {
      type: "object",
      properties: {
        conversationid: { type: "integer", minimum: 1, description: "Conversation ID." },
        messages: {
          type: "array",
          minItems: 1,
          description: "Messages to send to the conversation.",
          items: {
            type: "object",
            properties: {
              text: { type: "string", minLength: 1, description: "Message text." },
              textformat: { type: "integer", minimum: 0, default: 0, description: "Text format." },
            },
            required: ["text"],
            additionalProperties: false,
          },
        },
      },
      required: ["conversationid", "messages"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { conversationid: 10, messages: [{ text: "Mensaje al hilo" }] },
    },
  },

  // ---- Mute / favourites ----
  {
    name: "core_message_mute_conversations",
    moodleFunction: "core_message_mute_conversations",
    description: "Mutes one or more conversations for the current user.",
    inputSchema: {
      type: "object",
      properties: {
        conversationids: {
          type: "array",
          minItems: 1,
          items: { type: "integer", minimum: 1 },
          description: "Conversation IDs to mute.",
        },
      },
      required: ["conversationids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { conversationids: [10] } },
  },
  {
    name: "core_message_unmute_conversations",
    moodleFunction: "core_message_unmute_conversations",
    description: "Unmutes one or more conversations for the current user.",
    inputSchema: {
      type: "object",
      properties: {
        conversationids: {
          type: "array",
          minItems: 1,
          items: { type: "integer", minimum: 1 },
          description: "Conversation IDs to unmute.",
        },
      },
      required: ["conversationids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { conversationids: [10] } },
  },
  {
    name: "core_message_set_favourite_conversations",
    moodleFunction: "core_message_set_favourite_conversations",
    description: "Marks one or more conversations as favourites for the current user.",
    inputSchema: {
      type: "object",
      properties: {
        conversationids: {
          type: "array",
          minItems: 1,
          items: { type: "integer", minimum: 1 },
          description: "Conversation IDs to favourite.",
        },
      },
      required: ["conversationids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { conversationids: [10] } },
  },
  {
    name: "core_message_unset_favourite_conversations",
    moodleFunction: "core_message_unset_favourite_conversations",
    description: "Removes favourite flag from one or more conversations for the current user.",
    inputSchema: {
      type: "object",
      properties: {
        conversationids: {
          type: "array",
          minItems: 1,
          items: { type: "integer", minimum: 1 },
          description: "Conversation IDs to unfavourite.",
        },
      },
      required: ["conversationids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { conversationids: [10] } },
  },

  // ---- Profile / member info ----
  {
    name: "core_message_get_member_info",
    moodleFunction: "core_message_get_member_info",
    description: "Retrieves messaging-related profile information for a user.",
    inputSchema: {
      type: "object",
      properties: {
        userid: { type: "integer", minimum: 1, description: "User ID to retrieve info for." },
      },
      required: ["userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { userid: 123 } },
  },

  // ---- Processors / preferences ----
  {
    name: "core_message_get_message_processor",
    moodleFunction: "core_message_get_message_processor",
    description: "Gets information about a message processor (e.g., popup, email) if available.",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string", minLength: 1, description: "Processor name (e.g., 'popup', 'email', 'airnotifier')." },
      },
      required: ["name"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { name: "popup" } },
  },
  {
    name: "core_message_get_user_message_preferences",
    moodleFunction: "core_message_get_user_message_preferences",
    description: "Returns messaging preferences for a user (often self).",
    inputSchema: {
      type: "object",
      properties: {
        userid: { type: "integer", minimum: 1, description: "User ID." },
      },
      required: ["userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { userid: 123 } },
  },
  {
    name: "core_message_get_user_notification_preferences",
    moodleFunction: "core_message_get_user_notification_preferences",
    description: "Returns notification preferences for a user (often self).",
    inputSchema: {
      type: "object",
      properties: {
        userid: { type: "integer", minimum: 1, description: "User ID." },
      },
      required: ["userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { userid: 123 } },
  },
  {
    name: "core_message_set_default_notification",
    moodleFunction: "core_message_set_default_notification",
    description:
      "Sets default notification preference for a processor/component/notification (settings-style endpoint).",
    inputSchema: {
      type: "object",
      properties: {
        component: { type: "string", minLength: 1, description: "Component name (e.g., 'core', 'mod_forum')." },
        notification: { type: "string", minLength: 1, description: "Notification name/id within the component." },
        processor: { type: "string", minLength: 1, description: "Processor name (e.g., 'popup', 'email', 'airnotifier')." },
        loggedin: { type: "integer", enum: [0, 1], description: "Preference for when user is logged in (0/1)." },
        loggedoff: { type: "integer", enum: [0, 1], description: "Preference for when user is logged off (0/1)." },
      },
      required: ["component", "notification", "processor"],
      additionalProperties: true, // keep permissive: Moodle versions can add fields
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { component: "core", notification: "message", processor: "popup", loggedin: 1, loggedoff: 1 },
    },
  },
];