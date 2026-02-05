import type { ToolSpec } from "../../types.js";

export const mod_label_tools: ToolSpec[] = [
  {
    name: "mod_label_get_labels_by_courses",
    moodleFunction: "mod_label_get_labels_by_courses",
    description: "Moodle web service function `mod_label_get_labels_by_courses`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
