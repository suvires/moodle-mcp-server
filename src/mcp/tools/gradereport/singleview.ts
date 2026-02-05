import type { ToolSpec } from "../../types.js";

export const gradereport_singleview_tools: ToolSpec[] = [
  {
    name: "gradereport_singleview_get_grade_items_for_search_widget",
    moodleFunction: "gradereport_singleview_get_grade_items_for_search_widget",
    description:
      "Gets grade items for the single view report search widget. Returns a list of gradeable items in the course that can be selected for single-item grading view.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID to get grade items for.",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { courseid: 2 },
    },
  },
];
