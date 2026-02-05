import type { ToolSpec } from "../../types.js";

export const mod_url_tools: ToolSpec[] = [
  {
    name: "mod_url_get_urls_by_courses",
    moodleFunction: "mod_url_get_urls_by_courses",
    description: "Moodle web service function `mod_url_get_urls_by_courses`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_url_view_url",
    moodleFunction: "mod_url_view_url",
    description: "Moodle web service function `mod_url_view_url`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
