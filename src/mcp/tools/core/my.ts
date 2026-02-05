import type { ToolSpec } from "../../types.js";

export const core_my_tools: ToolSpec[] = [
  {
    name: "core_my_view_page",
    moodleFunction: "core_my_view_page",
    description:
      "Triggers the 'My' (dashboard) page viewed event for logging and analytics. Returns success status.",
    inputSchema: {
      type: "object",
      properties: {
        page: {
          type: "string",
          enum: ["my", "mycourses"],
          description: "Page type: 'my' for dashboard, 'mycourses' for course overview.",
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {},
    },
  },
];
