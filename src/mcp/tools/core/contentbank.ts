import type { ToolSpec } from "../../types.js";

export const core_contentbank_tools: ToolSpec[] = [
  {
    name: "core_contentbank_copy_content",
    moodleFunction: "core_contentbank_copy_content",
    description:
      "Creates a copy of content bank content in the same or different context. Returns the new content ID.",
    inputSchema: {
      type: "object",
      properties: {
        contentid: {
          type: "integer",
          minimum: 1,
          description: "ID of the content to copy.",
        },
        name: {
          type: "string",
          minLength: 1,
          description: "Name for the copied content.",
        },
        contextid: {
          type: "integer",
          minimum: 1,
          description:
            "Target context ID. Use same as source to copy in same context.",
        },
      },
      required: ["contentid", "name"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { contentid: 5, name: "Copy of Interactive Video" },
    },
  },
  {
    name: "core_contentbank_delete_content",
    moodleFunction: "core_contentbank_delete_content",
    description:
      "Deletes content from the content bank. Returns success status.",
    inputSchema: {
      type: "object",
      properties: {
        contentids: {
          type: "array",
          minItems: 1,
          description: "Array of content IDs to delete.",
          items: {
            type: "integer",
            minimum: 1,
          },
        },
      },
      required: ["contentids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { contentids: [1, 2, 3] },
    },
  },
  {
    name: "core_contentbank_rename_content",
    moodleFunction: "core_contentbank_rename_content",
    description:
      "Renames content in the content bank. Returns success status.",
    inputSchema: {
      type: "object",
      properties: {
        contentid: {
          type: "integer",
          minimum: 1,
          description: "ID of the content to rename.",
        },
        name: {
          type: "string",
          minLength: 1,
          description: "New name for the content.",
        },
      },
      required: ["contentid", "name"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { contentid: 5, name: "Renamed Content" },
    },
  },
  {
    name: "core_contentbank_set_content_visibility",
    moodleFunction: "core_contentbank_set_content_visibility",
    description:
      "Sets the visibility of content bank content. Hidden content is not available for use in courses.",
    inputSchema: {
      type: "object",
      properties: {
        contentid: {
          type: "integer",
          minimum: 1,
          description: "ID of the content to update visibility.",
        },
        visibility: {
          type: "integer",
          enum: [0, 1],
          description: "Visibility: 0=hidden, 1=visible.",
        },
      },
      required: ["contentid", "visibility"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { contentid: 5, visibility: 1 },
    },
  },
];
