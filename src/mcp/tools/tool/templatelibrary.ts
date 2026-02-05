import type { ToolSpec } from "../../types.js";

export const tool_templatelibrary_tools: ToolSpec[] = [
  {
    name: "tool_templatelibrary_list_templates",
    moodleFunction: "tool_templatelibrary_list_templates",
    description: "Moodle web service function `tool_templatelibrary_list_templates`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "tool_templatelibrary_load_canonical_template",
    moodleFunction: "tool_templatelibrary_load_canonical_template",
    description: "Moodle web service function `tool_templatelibrary_load_canonical_template`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
