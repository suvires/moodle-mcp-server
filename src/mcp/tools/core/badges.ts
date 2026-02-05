import type { ToolSpec } from "../../types.js";

export const core_badges_tools: ToolSpec[] = [
  {
    name: "core_badges_disable_badges",
    moodleFunction: "core_badges_disable_badges",
    description:
      "Disables one or more badges by their IDs. Disabled badges cannot be earned by users. Returns success status.",
    inputSchema: {
      type: "object",
      properties: {
        badgeids: {
          type: "array",
          minItems: 1,
          description: "Array of badge IDs to disable.",
          items: {
            type: "integer",
            minimum: 1,
          },
        },
      },
      required: ["badgeids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { badgeids: [1, 2, 3] },
    },
  },
  {
    name: "core_badges_enable_badges",
    moodleFunction: "core_badges_enable_badges",
    description:
      "Enables one or more badges by their IDs. Enabled badges can be earned by users. Returns success status.",
    inputSchema: {
      type: "object",
      properties: {
        badgeids: {
          type: "array",
          minItems: 1,
          description: "Array of badge IDs to enable.",
          items: {
            type: "integer",
            minimum: 1,
          },
        },
      },
      required: ["badgeids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { badgeids: [1, 2, 3] },
    },
  },
  {
    name: "core_badges_get_badge",
    moodleFunction: "core_badges_get_badge",
    description:
      "Gets detailed information about a specific badge including criteria, description, and image URL.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Badge ID to retrieve.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { id: 1 },
    },
  },
  {
    name: "core_badges_get_user_badge_by_hash",
    moodleFunction: "core_badges_get_user_badge_by_hash",
    description:
      "Gets a user's badge assertion by its unique hash. Used for Open Badges verification. Returns badge details and assertion data.",
    inputSchema: {
      type: "object",
      properties: {
        hash: {
          type: "string",
          minLength: 1,
          description: "Unique hash of the badge assertion.",
        },
      },
      required: ["hash"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { hash: "abc123def456" },
    },
  },
  {
    name: "core_badges_get_user_badges",
    moodleFunction: "core_badges_get_user_badges",
    description:
      "Gets all badges earned by a user, optionally filtered by course. Returns array of badge objects with award details.",
    inputSchema: {
      type: "object",
      properties: {
        userid: {
          type: "integer",
          minimum: 0,
          description: "User ID. Use 0 for current user.",
        },
        courseid: {
          type: "integer",
          minimum: 0,
          description: "Course ID to filter badges. Use 0 for all badges.",
        },
        page: {
          type: "integer",
          minimum: 0,
          description: "Page number for pagination. Default 0.",
        },
        perpage: {
          type: "integer",
          minimum: 1,
          description: "Number of badges per page. Default 0 (all).",
        },
        search: {
          type: "string",
          description: "Text to search in badge name or description.",
        },
        onlypublic: {
          type: "boolean",
          description: "If true, only return publicly visible badges. Default false.",
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { userid: 0 },
    },
  },
];
