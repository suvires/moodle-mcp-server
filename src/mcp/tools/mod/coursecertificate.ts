import type { ToolSpec } from "../../types.js";

export const mod_coursecertificate_tools: ToolSpec[] = [
  {
    name: "mod_coursecertificate_update_automaticsend",
    moodleFunction: "mod_coursecertificate_update_automaticsend",
    description: "Moodle web service function `mod_coursecertificate_update_automaticsend`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
