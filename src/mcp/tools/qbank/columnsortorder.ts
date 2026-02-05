import type { ToolSpec } from "../../types.js";

export const qbank_columnsortorder_tools: ToolSpec[] = [
  {
    name: "qbank_columnsortorder_set_column_size",
    moodleFunction: "qbank_columnsortorder_set_column_size",
    description: "Moodle web service function `qbank_columnsortorder_set_column_size`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "qbank_columnsortorder_set_columnbank_order",
    moodleFunction: "qbank_columnsortorder_set_columnbank_order",
    description: "Moodle web service function `qbank_columnsortorder_set_columnbank_order`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "qbank_columnsortorder_set_hidden_columns",
    moodleFunction: "qbank_columnsortorder_set_hidden_columns",
    description: "Moodle web service function `qbank_columnsortorder_set_hidden_columns`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
