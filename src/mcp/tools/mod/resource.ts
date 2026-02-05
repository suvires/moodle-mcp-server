import type { ToolSpec } from "../../types.js";

export const mod_resource_tools: ToolSpec[] = [
  {
    name: "mod_resource_get_resources_by_courses",
    moodleFunction: "mod_resource_get_resources_by_courses",
    description: "Moodle web service function `mod_resource_get_resources_by_courses`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_resource_view_resource",
    moodleFunction: "mod_resource_view_resource",
    description: "Moodle web service function `mod_resource_view_resource`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
