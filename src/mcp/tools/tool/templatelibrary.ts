import type { ToolSpec } from "../../types.js";

export const tool_templatelibrary_tools: ToolSpec[] = [
  {
    name: "tool_templatelibrary_list_templates",
    moodleFunction: "tool_templatelibrary_list_templates",
    description:
      "Lists available Mustache templates in Moodle. Returns template names from all plugins that can be used for rendering UI components.",
    inputSchema: {
      type: "object",
      properties: {
        component: {
          type: "string",
          description: "Component to filter templates by (e.g., 'core', 'mod_forum').",
        },
        search: {
          type: "string",
          description: "Search term to filter template names.",
        },
        themename: {
          type: "string",
          description: "Theme name to get templates for.",
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: {},
      typical: { component: "core", search: "modal" },
    },
  },
  {
    name: "tool_templatelibrary_load_canonical_template",
    moodleFunction: "tool_templatelibrary_load_canonical_template",
    description:
      "Loads the canonical (original) version of a Mustache template. Returns the unmodified template source before any theme overrides.",
    inputSchema: {
      type: "object",
      properties: {
        component: {
          type: "string",
          minLength: 1,
          description: "Component containing the template (e.g., 'core', 'mod_forum').",
        },
        template: {
          type: "string",
          minLength: 1,
          description: "Template name without the component prefix.",
        },
      },
      required: ["component", "template"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { component: "core", template: "modal" },
    },
  },
];
