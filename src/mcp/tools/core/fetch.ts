import type { ToolSpec } from "../../types.js";

export const core_fetch_tools: ToolSpec[] = [
  {
    name: "core_fetch_notifications",
    moodleFunction: "core_fetch_notifications",
    description: "Moodle web service function `core_fetch_notifications`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
