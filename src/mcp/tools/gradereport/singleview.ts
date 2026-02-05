import type { ToolSpec } from "../../types.js";

export const gradereport_singleview_tools: ToolSpec[] = [
  {
    name: "gradereport_singleview_get_grade_items_for_search_widget",
    moodleFunction: "gradereport_singleview_get_grade_items_for_search_widget",
    description: "Moodle web service function `gradereport_singleview_get_grade_items_for_search_widget`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
