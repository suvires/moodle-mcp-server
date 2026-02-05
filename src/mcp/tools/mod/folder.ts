import type { ToolSpec } from "../../types.js";

export const mod_folder_tools: ToolSpec[] = [
  {
    name: "mod_folder_get_folders_by_courses",
    moodleFunction: "mod_folder_get_folders_by_courses",
    description: "Moodle web service function `mod_folder_get_folders_by_courses`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_folder_view_folder",
    moodleFunction: "mod_folder_view_folder",
    description: "Moodle web service function `mod_folder_view_folder`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
