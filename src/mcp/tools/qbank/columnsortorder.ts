import type { ToolSpec } from "../../types.js";

export const qbank_columnsortorder_tools: ToolSpec[] = [
  {
    name: "qbank_columnsortorder_set_column_size",
    moodleFunction: "qbank_columnsortorder_set_column_size",
    description:
      "Sets the display width of a column in the question bank view. Allows customizing column widths for better readability.",
    inputSchema: {
      type: "object",
      properties: {
        column: {
          type: "string",
          minLength: 1,
          description: "Column identifier to resize.",
        },
        width: {
          type: "string",
          description: "New width value (e.g., '150px', '10%').",
        },
      },
      required: ["column", "width"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { column: "questionname", width: "200px" },
    },
  },
  {
    name: "qbank_columnsortorder_set_columnbank_order",
    moodleFunction: "qbank_columnsortorder_set_columnbank_order",
    description:
      "Sets the display order of columns in the question bank view. Reorders columns according to user preference.",
    inputSchema: {
      type: "object",
      properties: {
        columns: {
          type: "array",
          description: "Ordered list of column identifiers.",
          items: { type: "string", minLength: 1 },
          minItems: 1,
        },
      },
      required: ["columns"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { columns: ["checkbox", "questionname", "status", "version", "actions"] },
    },
  },
  {
    name: "qbank_columnsortorder_set_hidden_columns",
    moodleFunction: "qbank_columnsortorder_set_hidden_columns",
    description:
      "Sets which columns are hidden in the question bank view. Hidden columns won't be displayed in the question list.",
    inputSchema: {
      type: "object",
      properties: {
        columns: {
          type: "array",
          description: "List of column identifiers to hide.",
          items: { type: "string", minLength: 1 },
        },
      },
      required: ["columns"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { columns: ["version", "idnumber"] },
    },
  },
];
