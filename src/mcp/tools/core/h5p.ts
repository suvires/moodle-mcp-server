import type { ToolSpec } from "../../types.js";

export const core_h5p_tools: ToolSpec[] = [
  {
    name: "core_h5p_get_trusted_h5p_file",
    moodleFunction: "core_h5p_get_trusted_h5p_file",
    description: "Moodle web service function `core_h5p_get_trusted_h5p_file`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
