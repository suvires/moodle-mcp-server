import type { ToolSpec } from "../../types.js";

export const editor_tiny_tools: ToolSpec[] = [
  {
    name: "editor_tiny_get_configuration",
    moodleFunction: "editor_tiny_get_configuration",
    description:
      "Gets the TinyMCE editor configuration for a given context. Returns plugin settings, toolbar configuration, and feature flags needed to initialize the editor.",
    inputSchema: {
      type: "object",
      properties: {
        contextid: {
          type: "integer",
          minimum: 1,
          description: "Context ID for the editor configuration.",
        },
        elementid: {
          type: "string",
          minLength: 1,
          description: "HTML element ID where the editor will be rendered.",
        },
        draftitemid: {
          type: "integer",
          minimum: 0,
          description: "Draft item ID for file handling. 0 for new drafts.",
        },
      },
      required: ["contextid", "elementid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { contextid: 50, elementid: "id_description_editor" },
    },
  },
];
