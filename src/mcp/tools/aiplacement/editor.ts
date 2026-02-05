import type { ToolSpec } from "../../types.js";

export const aiplacement_editor_tools: ToolSpec[] = [
  {
    name: "aiplacement_editor_generate_image",
    moodleFunction: "aiplacement_editor_generate_image",
    description: "Moodle web service function `aiplacement_editor_generate_image`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "aiplacement_editor_generate_text",
    moodleFunction: "aiplacement_editor_generate_text",
    description: "Moodle web service function `aiplacement_editor_generate_text`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
