import type { ToolSpec } from "../../types.js";

export const mod_subcourse_tools: ToolSpec[] = [
  {
    name: "mod_subcourse_view_subcourse",
    moodleFunction: "mod_subcourse_view_subcourse",
    description: "Moodle web service function `mod_subcourse_view_subcourse`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
