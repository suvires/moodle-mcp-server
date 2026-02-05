import type { ToolSpec } from "../../types.js";

export const mod_forum_tools: ToolSpec[] = [
  {
    name: "mod_forum_add_discussion",
    moodleFunction: "mod_forum_add_discussion",
    description:
      "Creates a new discussion (topic) in a forum. Returns the new discussion ID.",
    inputSchema: {
      type: "object",
      properties: {
        forumid: {
          type: "integer",
          minimum: 1,
          description: "Forum instance ID",
        },
        subject: {
          type: "string",
          minLength: 1,
          description: "Discussion subject/title",
        },
        message: {
          type: "string",
          description: "Discussion message content (HTML)",
        },
        messageformat: {
          type: "integer",
          enum: [0, 1, 2, 4],
          default: 1,
          description: "Message format: 0=MOODLE, 1=HTML, 2=PLAIN, 4=MARKDOWN",
        },
        groupid: {
          type: "integer",
          default: 0,
          description: "Group ID for group forums (0 for no group)",
        },
        options: {
          type: "array",
          description: "Additional options",
          items: {
            type: "object",
            properties: {
              name: {
                type: "string",
                enum: ["discussionsubscribe", "discussionpinned", "inlineattachmentsid", "attachmentsid"],
                description: "Option name",
              },
              value: {
                type: "string",
                description: "Option value",
              },
            },
            required: ["name", "value"],
            additionalProperties: false,
          },
        },
      },
      required: ["forumid", "subject", "message"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: {
      minimal: {
        forumid: 5,
        subject: "New Discussion Topic",
        message: "<p>This is my discussion content.</p>",
      },
    },
  },
  {
    name: "mod_forum_add_discussion_post",
    moodleFunction: "mod_forum_add_discussion_post",
    description:
      "Adds a reply post to an existing discussion. Returns the new post ID.",
    inputSchema: {
      type: "object",
      properties: {
        postid: {
          type: "integer",
          minimum: 1,
          description: "Parent post ID to reply to",
        },
        subject: {
          type: "string",
          description: "Reply subject (often prefixed with 'Re:')",
        },
        message: {
          type: "string",
          description: "Reply message content (HTML)",
        },
        messageformat: {
          type: "integer",
          enum: [0, 1, 2, 4],
          default: 1,
          description: "Message format: 0=MOODLE, 1=HTML, 2=PLAIN, 4=MARKDOWN",
        },
        options: {
          type: "array",
          description: "Additional options",
          items: {
            type: "object",
            properties: {
              name: {
                type: "string",
                enum: ["discussionsubscribe", "private", "inlineattachmentsid", "attachmentsid", "topreferredformat"],
                description: "Option name",
              },
              value: {
                type: "string",
                description: "Option value",
              },
            },
            required: ["name", "value"],
            additionalProperties: false,
          },
        },
      },
      required: ["postid", "subject", "message"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: {
      minimal: {
        postid: 10,
        subject: "Re: Original topic",
        message: "<p>My reply to the discussion.</p>",
      },
    },
  },
  {
    name: "mod_forum_can_add_discussion",
    moodleFunction: "mod_forum_can_add_discussion",
    description:
      "Checks if the current user can add a discussion to a forum.",
    inputSchema: {
      type: "object",
      properties: {
        forumid: {
          type: "integer",
          minimum: 1,
          description: "Forum instance ID",
        },
        groupid: {
          type: "integer",
          default: 0,
          description: "Group ID for group forums",
        },
      },
      required: ["forumid"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: { minimal: { forumid: 5 } },
  },
  {
    name: "mod_forum_delete_post",
    moodleFunction: "mod_forum_delete_post",
    description:
      "Deletes a forum post. User must have permission (own post or moderator).",
    inputSchema: {
      type: "object",
      properties: {
        postid: {
          type: "integer",
          minimum: 1,
          description: "Post ID to delete",
        },
      },
      required: ["postid"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
    ],
    examples: { minimal: { postid: 25 } },
  },
  {
    name: "mod_forum_get_discussion_post",
    moodleFunction: "mod_forum_get_discussion_post",
    description:
      "Gets a single forum post by ID with all its details.",
    inputSchema: {
      type: "object",
      properties: {
        postid: {
          type: "integer",
          minimum: 1,
          description: "Post ID to retrieve",
        },
      },
      required: ["postid"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: { minimal: { postid: 25 } },
  },
  {
    name: "mod_forum_get_discussion_posts",
    moodleFunction: "mod_forum_get_discussion_posts",
    description:
      "Gets all posts in a discussion thread with their hierarchy.",
    inputSchema: {
      type: "object",
      properties: {
        discussionid: {
          type: "integer",
          minimum: 1,
          description: "Discussion ID",
        },
        sortby: {
          type: "string",
          enum: ["id", "created", "modified"],
          default: "created",
          description: "Field to sort by",
        },
        sortdirection: {
          type: "string",
          enum: ["ASC", "DESC"],
          default: "DESC",
          description: "Sort direction",
        },
        includeinlineattachments: {
          type: "integer",
          enum: [0, 1],
          default: 0,
          description: "Include inline attachments",
        },
      },
      required: ["discussionid"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: {
      minimal: { discussionid: 10 },
      typical: { discussionid: 10, sortby: "created", sortdirection: "ASC" },
    },
  },
  {
    name: "mod_forum_get_discussion_posts_by_userid",
    moodleFunction: "mod_forum_get_discussion_posts_by_userid",
    description:
      "Gets all posts in a discussion made by a specific user.",
    inputSchema: {
      type: "object",
      properties: {
        discussionid: {
          type: "integer",
          minimum: 1,
          description: "Discussion ID",
        },
        userid: {
          type: "integer",
          minimum: 1,
          description: "User ID to filter posts by",
        },
        sortby: {
          type: "string",
          enum: ["id", "created", "modified"],
          default: "created",
          description: "Field to sort by",
        },
        sortdirection: {
          type: "string",
          enum: ["ASC", "DESC"],
          default: "DESC",
          description: "Sort direction",
        },
      },
      required: ["discussionid", "userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: { minimal: { discussionid: 10, userid: 5 } },
  },
  {
    name: "mod_forum_get_forum_access_information",
    moodleFunction: "mod_forum_get_forum_access_information",
    description:
      "Gets access information and capabilities for a forum.",
    inputSchema: {
      type: "object",
      properties: {
        forumid: {
          type: "integer",
          minimum: 1,
          description: "Forum instance ID",
        },
      },
      required: ["forumid"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: { minimal: { forumid: 5 } },
  },
  {
    name: "mod_forum_get_forum_discussions",
    moodleFunction: "mod_forum_get_forum_discussions",
    description:
      "Gets discussions (topics) in a forum with pagination support.",
    inputSchema: {
      type: "object",
      properties: {
        forumid: {
          type: "integer",
          minimum: 1,
          description: "Forum instance ID",
        },
        sortorder: {
          type: "integer",
          enum: [-1, 1, 2, 3, 4, 5],
          default: -1,
          description: "Sort order: -1=default, 1=lastpost desc, 2=lastpost asc, 3=created desc, 4=created asc, 5=replies desc",
        },
        page: {
          type: "integer",
          minimum: -1,
          default: -1,
          description: "Page number (-1 for all)",
        },
        perpage: {
          type: "integer",
          minimum: 0,
          default: 0,
          description: "Discussions per page (0 for default)",
        },
        groupid: {
          type: "integer",
          default: 0,
          description: "Group ID filter (0 for all groups)",
        },
      },
      required: ["forumid"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: {
      minimal: { forumid: 5 },
      typical: { forumid: 5, sortorder: 1, page: 0, perpage: 20 },
    },
  },
  {
    name: "mod_forum_get_forums_by_courses",
    moodleFunction: "mod_forum_get_forums_by_courses",
    description:
      "Gets forums in specified courses with their settings and info.",
    inputSchema: {
      type: "object",
      properties: {
        courseids: {
          type: "array",
          description: "Array of course IDs (empty for all enrolled courses)",
          items: { type: "integer", minimum: 1 },
        },
      },
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: {
      minimal: {},
      typical: { courseids: [2, 3] },
    },
  },
  {
    name: "mod_forum_prepare_draft_area_for_post",
    moodleFunction: "mod_forum_prepare_draft_area_for_post",
    description:
      "Prepares the draft file area for a forum post. Returns draft item ID for attachments.",
    inputSchema: {
      type: "object",
      properties: {
        postid: {
          type: "integer",
          minimum: 0,
          description: "Post ID (0 for new post)",
        },
        area: {
          type: "string",
          enum: ["attachment", "post"],
          default: "attachment",
          description: "Draft area: 'attachment' for files, 'post' for inline images",
        },
        draftitemid: {
          type: "integer",
          default: 0,
          description: "Existing draft item ID (0 to create new)",
        },
        filestokeep: {
          type: "array",
          description: "Filenames to keep when editing",
          items: {
            type: "object",
            properties: {
              filename: { type: "string" },
              filepath: { type: "string" },
            },
            additionalProperties: false,
          },
        },
      },
      required: ["postid", "area"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: { minimal: { postid: 0, area: "attachment" } },
  },
  {
    name: "mod_forum_set_forum_subscription",
    moodleFunction: "mod_forum_set_forum_subscription",
    description:
      "Sets the subscription state for a forum (subscribe/unsubscribe to all discussions).",
    inputSchema: {
      type: "object",
      properties: {
        forumid: {
          type: "integer",
          minimum: 1,
          description: "Forum instance ID",
        },
        status: {
          type: "integer",
          enum: [0, 1],
          description: "Subscription status: 1=subscribe, 0=unsubscribe",
        },
      },
      required: ["forumid", "status"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: { minimal: { forumid: 5, status: 1 } },
  },
  {
    name: "mod_forum_set_forum_tracking",
    moodleFunction: "mod_forum_set_forum_tracking",
    description:
      "Sets tracking state for a forum (track read/unread posts).",
    inputSchema: {
      type: "object",
      properties: {
        forumid: {
          type: "integer",
          minimum: 1,
          description: "Forum instance ID",
        },
        status: {
          type: "integer",
          enum: [0, 1],
          description: "Tracking status: 1=track, 0=don't track",
        },
      },
      required: ["forumid", "status"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: { minimal: { forumid: 5, status: 1 } },
  },
  {
    name: "mod_forum_set_lock_state",
    moodleFunction: "mod_forum_set_lock_state",
    description:
      "Locks or unlocks a discussion to prevent new replies.",
    inputSchema: {
      type: "object",
      properties: {
        forumid: {
          type: "integer",
          minimum: 1,
          description: "Forum instance ID",
        },
        discussionid: {
          type: "integer",
          minimum: 1,
          description: "Discussion ID to lock/unlock",
        },
        targetstate: {
          type: "integer",
          enum: [0, 1],
          description: "Lock state: 1=locked, 0=unlocked",
        },
      },
      required: ["forumid", "discussionid", "targetstate"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: { minimal: { forumid: 5, discussionid: 10, targetstate: 1 } },
  },
  {
    name: "mod_forum_set_pin_state",
    moodleFunction: "mod_forum_set_pin_state",
    description:
      "Pins or unpins a discussion to keep it at the top of the forum.",
    inputSchema: {
      type: "object",
      properties: {
        discussionid: {
          type: "integer",
          minimum: 1,
          description: "Discussion ID to pin/unpin",
        },
        targetstate: {
          type: "integer",
          enum: [0, 1],
          description: "Pin state: 1=pinned, 0=unpinned",
        },
      },
      required: ["discussionid", "targetstate"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: { minimal: { discussionid: 10, targetstate: 1 } },
  },
  {
    name: "mod_forum_set_subscription_state",
    moodleFunction: "mod_forum_set_subscription_state",
    description:
      "Sets subscription state for a specific discussion (not the whole forum).",
    inputSchema: {
      type: "object",
      properties: {
        forumid: {
          type: "integer",
          minimum: 1,
          description: "Forum instance ID",
        },
        discussionid: {
          type: "integer",
          minimum: 1,
          description: "Discussion ID",
        },
        targetstate: {
          type: "integer",
          enum: [0, 1],
          description: "Subscription state: 1=subscribed, 0=unsubscribed",
        },
      },
      required: ["forumid", "discussionid", "targetstate"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: { minimal: { forumid: 5, discussionid: 10, targetstate: 1 } },
  },
  {
    name: "mod_forum_toggle_favourite_state",
    moodleFunction: "mod_forum_toggle_favourite_state",
    description:
      "Toggles the favourite (starred) state of a discussion for the current user.",
    inputSchema: {
      type: "object",
      properties: {
        discussionid: {
          type: "integer",
          minimum: 1,
          description: "Discussion ID to toggle favourite",
        },
        targetstate: {
          type: "integer",
          enum: [0, 1],
          description: "Favourite state: 1=favourite, 0=unfavourite",
        },
      },
      required: ["discussionid", "targetstate"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: { minimal: { discussionid: 10, targetstate: 1 } },
  },
  {
    name: "mod_forum_update_discussion_post",
    moodleFunction: "mod_forum_update_discussion_post",
    description:
      "Updates an existing forum post. User must be author or have edit rights.",
    inputSchema: {
      type: "object",
      properties: {
        postid: {
          type: "integer",
          minimum: 1,
          description: "Post ID to update",
        },
        subject: {
          type: "string",
          description: "New subject (optional if not changing)",
        },
        message: {
          type: "string",
          description: "New message content (optional if not changing)",
        },
        messageformat: {
          type: "integer",
          enum: [0, 1, 2, 4],
          default: 1,
          description: "Message format",
        },
        options: {
          type: "array",
          description: "Additional options",
          items: {
            type: "object",
            properties: {
              name: {
                type: "string",
                enum: ["discussionsubscribe", "private", "inlineattachmentsid", "attachmentsid"],
                description: "Option name",
              },
              value: {
                type: "string",
                description: "Option value",
              },
            },
            required: ["name", "value"],
            additionalProperties: false,
          },
        },
      },
      required: ["postid"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
    ],
    examples: {
      minimal: { postid: 25 },
      typical: {
        postid: 25,
        subject: "Updated subject",
        message: "<p>Updated content</p>",
      },
    },
  },
  {
    name: "mod_forum_view_forum",
    moodleFunction: "mod_forum_view_forum",
    description:
      "Triggers the forum viewed event. Use when navigating to a forum.",
    inputSchema: {
      type: "object",
      properties: {
        forumid: {
          type: "integer",
          minimum: 1,
          description: "Forum instance ID",
        },
      },
      required: ["forumid"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: { minimal: { forumid: 5 } },
  },
  {
    name: "mod_forum_view_forum_discussion",
    moodleFunction: "mod_forum_view_forum_discussion",
    description:
      "Triggers the discussion viewed event. Use when opening a discussion thread.",
    inputSchema: {
      type: "object",
      properties: {
        discussionid: {
          type: "integer",
          minimum: 1,
          description: "Discussion ID being viewed",
        },
      },
      required: ["discussionid"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: { minimal: { discussionid: 10 } },
  },
];
