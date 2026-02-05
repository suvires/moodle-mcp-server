import type { ToolSpec } from "../../types.js";

export const core_customfield_tools: ToolSpec[] = [
  {
    name: "core_customfield_create_category",
    moodleFunction: "core_customfield_create_category",
    description: "Creates a custom field category.",
    inputSchema: {
      type: "object",
      properties: {
        component: {
          type: "string",
          description: "Component name the category belongs to (e.g. 'core_course', 'core_user').",
          minLength: 1,
        },
        area: {
          type: "string",
          description: "Area name within the component (depends on component).",
          minLength: 1,
        },
        name: {
          type: "string",
          description: "Category name.",
          minLength: 1,
        },
        description: {
          type: "string",
          description: "Category description (optional).",
          default: "",
        },
        descriptionformat: {
          type: "integer",
          description: "Description format (e.g. 0=MOODLE, 1=HTML).",
          minimum: 0,
          default: 1,
        },
      },
      required: ["component", "area", "name"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: {
        component: "core_user",
        area: "user",
        name: "Datos adicionales",
      },
    },
  },

  {
    name: "core_customfield_delete_category",
    moodleFunction: "core_customfield_delete_category",
    description: "Deletes a custom field category (destructive).",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          description: "Custom field category ID.",
          minimum: 1,
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { id: 10 },
    },
  },

  {
    name: "core_customfield_delete_field",
    moodleFunction: "core_customfield_delete_field",
    description: "Deletes a custom field (destructive).",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          description: "Custom field ID.",
          minimum: 1,
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { id: 42 },
    },
  },

  {
    name: "core_customfield_move_category",
    moodleFunction: "core_customfield_move_category",
    description: "Moves a custom field category to a new position (reorders categories).",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          description: "Custom field category ID.",
          minimum: 1,
        },
        afterid: {
          type: "integer",
          description:
            "Category ID after which to place this category. Use 0 to move to the start (depending on Moodle version).",
          minimum: 0,
          default: 0,
        },
      },
      required: ["id", "afterid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { id: 10, afterid: 0 },
    },
  },

  {
    name: "core_customfield_move_field",
    moodleFunction: "core_customfield_move_field",
    description: "Moves a custom field to a new position/category (reorders fields).",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          description: "Custom field ID.",
          minimum: 1,
        },
        categoryid: {
          type: "integer",
          description: "Target category ID to move the field into.",
          minimum: 1,
        },
        afterid: {
          type: "integer",
          description:
            "Field ID after which to place this field within the target category. Use 0 to move to the start (depending on Moodle version).",
          minimum: 0,
          default: 0,
        },
      },
      required: ["id", "categoryid", "afterid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { id: 42, categoryid: 10, afterid: 0 },
    },
  },

  {
    name: "core_customfield_reload_template",
    moodleFunction: "core_customfield_reload_template",
    description:
      "Reloads a customfield template into a target (used to re-apply/refresh template-defined fields).",
    inputSchema: {
      type: "object",
      properties: {
        templateid: {
          type: "integer",
          description: "Template ID to reload.",
          minimum: 1,
        },
        target: {
          type: "string",
          description:
            "Template target/component string (depends on your Moodle configuration/templates).",
          minLength: 1,
        },
      },
      required: ["templateid", "target"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { templateid: 3, target: "core_user/user" },
    },
  },

  {
    name: "core_customfield_toggle_shared",
    moodleFunction: "core_customfield_toggle_shared",
    description:
      "Toggles whether a customfield template/category is shared (availability across contexts depends on Moodle config).",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          description: "Custom field category/template ID (depending on the Moodle endpoint semantics).",
          minimum: 1,
        },
        shared: {
          type: "integer",
          description: "1 to mark as shared, 0 to mark as not shared.",
          enum: [0, 1],
        },
      },
      required: ["id", "shared"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { id: 10, shared: 1 },
    },
  },
];