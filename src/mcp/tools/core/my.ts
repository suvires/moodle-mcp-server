import type { ToolSpec } from "../../types.js";

export const core_my_tools: ToolSpec[] = [
  {
    name: "core_my_view_page",
    moodleFunction: "core_my_view_page",
    description: "Moodle web service function `core_my_view_page`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
