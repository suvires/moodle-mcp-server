import type { ToolSpec } from "../../types.js";

export const tool_usertours_tools: ToolSpec[] = [
  {
    name: "tool_usertours_complete_tour",
    moodleFunction: "tool_usertours_complete_tour",
    description:
      "Marks a user tour as completed for the current user. The tour will not be shown again unless reset.",
    inputSchema: {
      type: "object",
      properties: {
        tourid: {
          type: "integer",
          minimum: 1,
          description: "Tour ID to mark as completed.",
        },
        context: {
          type: "integer",
          minimum: 1,
          description: "Context ID where the tour was completed.",
        },
        pageurl: {
          type: "string",
          description: "Page URL where the tour was completed.",
        },
      },
      required: ["tourid", "context", "pageurl"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { tourid: 1, context: 1, pageurl: "/my/" },
    },
  },
  {
    name: "tool_usertours_fetch_and_start_tour",
    moodleFunction: "tool_usertours_fetch_and_start_tour",
    description:
      "Fetches tour data and marks it as started. Returns tour configuration including steps, titles, and content for display.",
    inputSchema: {
      type: "object",
      properties: {
        tourid: {
          type: "integer",
          minimum: 1,
          description: "Tour ID to fetch and start.",
        },
        context: {
          type: "integer",
          minimum: 1,
          description: "Context ID for the tour.",
        },
        pageurl: {
          type: "string",
          description: "Current page URL.",
        },
      },
      required: ["tourid", "context", "pageurl"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { tourid: 1, context: 1, pageurl: "/my/" },
    },
  },
  {
    name: "tool_usertours_reset_tour",
    moodleFunction: "tool_usertours_reset_tour",
    description:
      "Resets a user tour for the current user. The tour will be shown again on the next visit to matching pages.",
    inputSchema: {
      type: "object",
      properties: {
        tourid: {
          type: "integer",
          minimum: 1,
          description: "Tour ID to reset.",
        },
        context: {
          type: "integer",
          minimum: 1,
          description: "Context ID for the tour.",
        },
        pageurl: {
          type: "string",
          description: "Page URL context.",
        },
      },
      required: ["tourid", "context", "pageurl"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { tourid: 1, context: 1, pageurl: "/my/" },
    },
  },
  {
    name: "tool_usertours_step_shown",
    moodleFunction: "tool_usertours_step_shown",
    description:
      "Records that a tour step was shown to the user. Used for analytics and tracking tour progress.",
    inputSchema: {
      type: "object",
      properties: {
        tourid: {
          type: "integer",
          minimum: 1,
          description: "Tour ID.",
        },
        context: {
          type: "integer",
          minimum: 1,
          description: "Context ID.",
        },
        pageurl: {
          type: "string",
          description: "Page URL where step was shown.",
        },
        stepid: {
          type: "integer",
          minimum: 1,
          description: "Step ID that was shown.",
        },
        stepindex: {
          type: "integer",
          minimum: 0,
          description: "Step index (0-based) in the tour sequence.",
        },
      },
      required: ["tourid", "context", "pageurl", "stepid", "stepindex"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { tourid: 1, context: 1, pageurl: "/my/", stepid: 5, stepindex: 0 },
    },
  },
];
