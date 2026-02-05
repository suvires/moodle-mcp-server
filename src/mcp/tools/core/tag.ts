import type { ToolSpec } from "../../types.js";

export const core_tag_tools: ToolSpec[] = [
  {
    name: "core_tag_get_tag_areas",
    moodleFunction: "core_tag_get_tag_areas",
    description:
      "Returns the list of tag areas (components and item types) where tags can be used.",
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
    name: "core_tag_get_tag_collections",
    moodleFunction: "core_tag_get_tag_collections",
    description: "Returns the available tag collections configured on the site.",
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
    name: "core_tag_get_tagindex",
    moodleFunction: "core_tag_get_tagindex",
    description:
      "Returns the tag index for a given tag (items/content associated with the tag), optionally filtered.",
    inputSchema: {
      type: "object",
      properties: {
        tagid: {
          type: "integer",
          description: "Tag ID.",
          minimum: 1,
        },
        from: {
          type: "integer",
          description: "Pagination offset.",
          minimum: 0,
          default: 0,
        },
        limit: {
          type: "integer",
          description: "Maximum number of items to return.",
          minimum: 0,
          default: 20,
        },
      },
      required: ["tagid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { tagid: 12 },
    },
  },

  {
    name: "core_tag_get_tagindex_per_area",
    moodleFunction: "core_tag_get_tagindex_per_area",
    description:
      "Returns the tag index for a given tag restricted to a specific tag area (component + itemtype), optionally filtered.",
    inputSchema: {
      type: "object",
      properties: {
        tagid: {
          type: "integer",
          description: "Tag ID.",
          minimum: 1,
        },
        ta: {
          type: "string",
          description:
            "Tag area identifier, typically formatted as '<component>-<itemtype>' (as returned by core_tag_get_tag_areas).",
          minLength: 1,
        },
        from: {
          type: "integer",
          description: "Pagination offset.",
          minimum: 0,
          default: 0,
        },
        limit: {
          type: "integer",
          description: "Maximum number of items to return.",
          minimum: 0,
          default: 20,
        },
      },
      required: ["tagid", "ta"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { tagid: 12, ta: "core-course" },
    },
  },

  {
    name: "core_tag_get_tags",
    moodleFunction: "core_tag_get_tags",
    description:
      "Searches and returns tags, optionally filtered by collection and search query (useful for autocomplete).",
    inputSchema: {
      type: "object",
      properties: {
        tagcollid: {
          type: "integer",
          description: "Optional tag collection ID to filter by.",
          minimum: 0,
          default: 0,
        },
        query: {
          type: "string",
          description: "Search query text to match tag names.",
          default: "",
        },
        from: {
          type: "integer",
          description: "Pagination offset.",
          minimum: 0,
          default: 0,
        },
        limit: {
          type: "integer",
          description: "Maximum number of tags to return.",
          minimum: 0,
          default: 20,
        },
      },
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { query: "bio", limit: 20, from: 0 },
    },
  },

  {
    name: "core_tag_update_tags",
    moodleFunction: "core_tag_update_tags",
    description:
      "Updates one or more tags (e.g., rename/update properties). Admin/manager only due to global impact.",
    inputSchema: {
      type: "object",
      properties: {
        tags: {
          type: "array",
          description: "List of tags to update.",
          minItems: 1,
          items: {
            type: "object",
            properties: {
              id: { type: "integer", description: "Tag ID.", minimum: 1 },
              rawname: { type: "string", description: "New tag name (raw)." },
              isstandard: {
                type: "integer",
                description: "Whether the tag is standard (1) or not (0), if supported.",
                enum: [0, 1],
              },
              description: { type: "string", description: "Optional tag description." },
              descriptionformat: {
                type: "integer",
                description: "Description format (e.g., 0=MOODLE, 1=HTML).",
                minimum: 0,
              },
            },
            required: ["id"],
            additionalProperties: true,
          },
        },
      },
      required: ["tags"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { tags: [{ id: 12, rawname: "Biología" }] },
    },
  },
];