import type { ToolSpec } from "../../types.js";

export const aiplacement_courseassist_tools: ToolSpec[] = [
  {
    name: "aiplacement_courseassist_summarise_text",
    moodleFunction: "aiplacement_courseassist_summarise_text",
    description: "Moodle web service function `aiplacement_courseassist_summarise_text`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
