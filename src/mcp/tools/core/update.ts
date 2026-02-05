import type { ToolSpec } from "../../types.js";

export const core_update_tools: ToolSpec[] = [
  {
    name: "core_update_inplace_editable",
    moodleFunction: "core_update_inplace_editable",
    description:
      "Updates a value using Moodle's inplace editable component. Used for inline editing of names, titles, and other text fields throughout Moodle.",
    inputSchema: {
      type: "object",
      properties: {
        component: {
          type: "string",
          minLength: 1,
          description: "Component name (e.g., 'core_course', 'mod_forum').",
        },
        itemtype: {
          type: "string",
          minLength: 1,
          description: "Item type within the component (e.g., 'sectionname', 'activityname').",
        },
        itemid: {
          type: "integer",
          minimum: 0,
          description: "Item ID being edited.",
        },
        value: {
          type: "string",
          description: "New value for the field.",
        },
      },
      required: ["component", "itemtype", "itemid", "value"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: {
        component: "core_course",
        itemtype: "sectionname",
        itemid: 5,
        value: "Week 1: Introduction",
      },
    },
  },
];
