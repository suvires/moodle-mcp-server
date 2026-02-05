import type { ToolSpec } from "../../types.js";

export const core_comment_tools: ToolSpec[] = [
  {
    name: "core_comment_add_comments",
    moodleFunction: "core_comment_add_comments",
    description:
      "Adds one or more comments to various Moodle items (activities, blog posts, etc.). Returns array of created comment objects.",
    inputSchema: {
      type: "object",
      properties: {
        comments: {
          type: "array",
          minItems: 1,
          description: "List of comments to add.",
          items: {
            type: "object",
            properties: {
              contextlevel: {
                type: "string",
                description:
                  "Context level: 'block', 'course', 'coursecat', 'module', 'system', 'user'.",
              },
              instanceid: {
                type: "integer",
                minimum: 1,
                description: "Instance ID within the context.",
              },
              component: {
                type: "string",
                minLength: 1,
                description: "Component name (e.g., 'mod_data', 'blog').",
              },
              content: {
                type: "string",
                minLength: 1,
                description: "Comment content text.",
              },
              itemid: {
                type: "integer",
                minimum: 0,
                description: "Item ID within the component.",
              },
              area: {
                type: "string",
                description: "Comment area within the component. Default empty.",
              },
            },
            required: ["contextlevel", "instanceid", "component", "content", "itemid"],
            additionalProperties: false,
          },
        },
      },
      required: ["comments"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {
        comments: [
          {
            contextlevel: "module",
            instanceid: 5,
            component: "mod_data",
            content: "Great work!",
            itemid: 10,
          },
        ],
      },
    },
  },
  {
    name: "core_comment_delete_comments",
    moodleFunction: "core_comment_delete_comments",
    description:
      "Deletes comments by their IDs. User must be the author or have moderation permissions.",
    inputSchema: {
      type: "object",
      properties: {
        comments: {
          type: "array",
          minItems: 1,
          description: "Array of comment IDs to delete.",
          items: {
            type: "integer",
            minimum: 1,
          },
        },
      },
      required: ["comments"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { comments: [1, 2, 3] },
    },
  },
  {
    name: "core_comment_get_comments",
    moodleFunction: "core_comment_get_comments",
    description:
      "Gets comments for a specific item with pagination. Returns array of comment objects with author info.",
    inputSchema: {
      type: "object",
      properties: {
        contextlevel: {
          type: "string",
          description:
            "Context level: 'block', 'course', 'coursecat', 'module', 'system', 'user'.",
        },
        instanceid: {
          type: "integer",
          minimum: 1,
          description: "Instance ID within the context.",
        },
        component: {
          type: "string",
          minLength: 1,
          description: "Component name.",
        },
        itemid: {
          type: "integer",
          minimum: 0,
          description: "Item ID within the component.",
        },
        area: {
          type: "string",
          description: "Comment area within the component. Default empty.",
        },
        page: {
          type: "integer",
          minimum: 0,
          description: "Page number for pagination. Default 0.",
        },
        sortdirection: {
          type: "string",
          enum: ["ASC", "DESC"],
          description: "Sort direction by date. Default 'DESC'.",
        },
      },
      required: ["contextlevel", "instanceid", "component", "itemid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {
        contextlevel: "module",
        instanceid: 5,
        component: "mod_data",
        itemid: 10,
      },
    },
  },
];
