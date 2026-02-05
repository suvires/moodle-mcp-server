import type { ToolSpec } from "../../types.js";

export const editor_tiny_tools: ToolSpec[] = [
  {
    name: "editor_tiny_get_configuration",
    moodleFunction: "editor_tiny_get_configuration",
    description: "Moodle web service function `editor_tiny_get_configuration`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
