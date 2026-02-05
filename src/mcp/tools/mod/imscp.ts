import type { ToolSpec } from "../../types.js";

export const mod_imscp_tools: ToolSpec[] = [
  {
    name: "mod_imscp_get_imscps_by_courses",
    moodleFunction: "mod_imscp_get_imscps_by_courses",
    description: "Moodle web service function `mod_imscp_get_imscps_by_courses`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_imscp_view_imscp",
    moodleFunction: "mod_imscp_view_imscp",
    description: "Moodle web service function `mod_imscp_view_imscp`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
