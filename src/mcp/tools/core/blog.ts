import type { ToolSpec } from "../../types.js";

export const core_blog_tools: ToolSpec[] = [
  {
    name: "core_blog_add_entry",
    moodleFunction: "core_blog_add_entry",
    description:
      "Creates a new blog entry. Returns the new entry ID on success.",
    inputSchema: {
      type: "object",
      properties: {
        subject: {
          type: "string",
          minLength: 1,
          description: "Blog entry title/subject.",
        },
        summary: {
          type: "string",
          minLength: 1,
          description: "Blog entry content (HTML).",
        },
        summaryformat: {
          type: "integer",
          enum: [0, 1, 2, 4],
          description: "Content format: 0=MOODLE, 1=HTML, 2=PLAIN, 4=MARKDOWN. Default 1.",
        },
        publishstate: {
          type: "string",
          enum: ["draft", "site", "public"],
          description: "Visibility: 'draft', 'site' (logged-in users), 'public'. Default 'site'.",
        },
        courseid: {
          type: "integer",
          minimum: 0,
          description: "Associate blog with course. Use 0 for no association.",
        },
        tags: {
          type: "array",
          description: "Array of tag names to apply to the entry.",
          items: {
            type: "string",
          },
        },
        options: {
          type: "array",
          description: "Additional options as name/value pairs.",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              value: { type: "string" },
            },
            required: ["name", "value"],
            additionalProperties: false,
          },
        },
      },
      required: ["subject", "summary"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { subject: "My First Blog", summary: "<p>Hello World!</p>" },
    },
  },
  {
    name: "core_blog_delete_entry",
    moodleFunction: "core_blog_delete_entry",
    description:
      "Deletes a blog entry by ID. User must be the author or have moderation permissions. Returns success status.",
    inputSchema: {
      type: "object",
      properties: {
        entryid: {
          type: "integer",
          minimum: 1,
          description: "Blog entry ID to delete.",
        },
      },
      required: ["entryid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { entryid: 5 },
    },
  },
  {
    name: "core_blog_get_access_information",
    moodleFunction: "core_blog_get_access_information",
    description:
      "Gets the current user's blog access permissions. Returns capabilities like canaddentry, canviewentries, etc.",
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
    name: "core_blog_get_entries",
    moodleFunction: "core_blog_get_entries",
    description:
      "Gets blog entries with optional filtering by user, course, tag, etc. Returns array of entry objects with pagination.",
    inputSchema: {
      type: "object",
      properties: {
        filters: {
          type: "array",
          description: "Filter criteria as name/value pairs.",
          items: {
            type: "object",
            properties: {
              name: {
                type: "string",
                description:
                  "Filter name: 'courseid', 'userid', 'tagid', 'tag', 'entryid', 'groupid', 'search'.",
              },
              value: {
                type: "string",
                description: "Filter value.",
              },
            },
            required: ["name", "value"],
            additionalProperties: false,
          },
        },
        page: {
          type: "integer",
          minimum: 0,
          description: "Page number for pagination. Default 0.",
        },
        perpage: {
          type: "integer",
          minimum: 1,
          description: "Entries per page. Default 10.",
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { filters: [{ name: "userid", value: "2" }] },
    },
  },
  {
    name: "core_blog_prepare_entry_for_edition",
    moodleFunction: "core_blog_prepare_entry_for_edition",
    description:
      "Prepares a blog entry for editing by loading it into draft area. Returns entry data and draft item ID for file uploads.",
    inputSchema: {
      type: "object",
      properties: {
        entryid: {
          type: "integer",
          minimum: 1,
          description: "Blog entry ID to prepare for editing.",
        },
      },
      required: ["entryid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { entryid: 5 },
    },
  },
  {
    name: "core_blog_update_entry",
    moodleFunction: "core_blog_update_entry",
    description:
      "Updates an existing blog entry. User must be the author or have moderation permissions. Returns success status.",
    inputSchema: {
      type: "object",
      properties: {
        entryid: {
          type: "integer",
          minimum: 1,
          description: "Blog entry ID to update.",
        },
        subject: {
          type: "string",
          minLength: 1,
          description: "New blog entry title/subject.",
        },
        summary: {
          type: "string",
          minLength: 1,
          description: "New blog entry content (HTML).",
        },
        summaryformat: {
          type: "integer",
          enum: [0, 1, 2, 4],
          description: "Content format.",
        },
        publishstate: {
          type: "string",
          enum: ["draft", "site", "public"],
          description: "New visibility setting.",
        },
        tags: {
          type: "array",
          description: "Updated array of tag names.",
          items: {
            type: "string",
          },
        },
        options: {
          type: "array",
          description: "Additional options as name/value pairs.",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              value: { type: "string" },
            },
            required: ["name", "value"],
            additionalProperties: false,
          },
        },
      },
      required: ["entryid", "subject", "summary"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { entryid: 5, subject: "Updated Title", summary: "<p>New content</p>" },
    },
  },
  {
    name: "core_blog_view_entries",
    moodleFunction: "core_blog_view_entries",
    description:
      "Triggers the blog entries viewed event for analytics/completion tracking. Returns success status.",
    inputSchema: {
      type: "object",
      properties: {
        filters: {
          type: "array",
          description: "Filter criteria matching what was viewed.",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              value: { type: "string" },
            },
            required: ["name", "value"],
            additionalProperties: false,
          },
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {},
    },
  },
];
