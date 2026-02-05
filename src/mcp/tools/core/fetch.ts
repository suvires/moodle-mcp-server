import type { ToolSpec } from "../../types.js";

export const core_fetch_tools: ToolSpec[] = [
  {
    name: "core_fetch_notifications",
    moodleFunction: "core_fetch_notifications",
    description:
      "Fetches pending notifications for the current user session. Returns array of notification objects (alerts, messages, etc.).",
    inputSchema: {
      type: "object",
      properties: {
        contextid: {
          type: "integer",
          minimum: 1,
          description: "Context ID to fetch notifications for. Use system context (1) for global notifications.",
        },
      },
      required: ["contextid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { contextid: 1 },
    },
  },
];
