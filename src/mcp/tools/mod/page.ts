import type { ToolSpec } from "../../types.js";

export const mod_page_tools: ToolSpec[] = [
  {
    name: "mod_page_get_pages_by_courses",
    moodleFunction: "mod_page_get_pages_by_courses",
    description: "Moodle web service function `mod_page_get_pages_by_courses`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_page_view_page",
    moodleFunction: "mod_page_view_page",
    description: "Moodle web service function `mod_page_view_page`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
