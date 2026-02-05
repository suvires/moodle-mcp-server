import type { ToolSpec } from "../../types.js";

export const qbank_managecategories_tools: ToolSpec[] = [
  {
    name: "qbank_managecategories_move_category",
    moodleFunction: "qbank_managecategories_move_category",
    description:
      "Moves a question category to a new parent category or context. Used to reorganize the question bank hierarchy.",
    inputSchema: {
      type: "object",
      properties: {
        categoryid: {
          type: "integer",
          minimum: 1,
          description: "ID of the category to move.",
        },
        targetcategoryid: {
          type: "integer",
          minimum: 0,
          description: "ID of the new parent category. 0 for context root.",
        },
        contextid: {
          type: "integer",
          minimum: 1,
          description: "Context ID where the category should be moved.",
        },
        precedingsiblingid: {
          type: "integer",
          minimum: 0,
          description: "ID of the sibling category to place after. 0 for first position.",
        },
      },
      required: ["categoryid", "targetcategoryid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { categoryid: 5, targetcategoryid: 10 },
    },
  },
];
