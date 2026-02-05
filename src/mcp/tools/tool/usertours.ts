import type { ToolSpec } from "../../types.js";

export const tool_usertours_tools: ToolSpec[] = [
  {
    name: "tool_usertours_complete_tour",
    moodleFunction: "tool_usertours_complete_tour",
    description: "Moodle web service function `tool_usertours_complete_tour`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "tool_usertours_fetch_and_start_tour",
    moodleFunction: "tool_usertours_fetch_and_start_tour",
    description: "Moodle web service function `tool_usertours_fetch_and_start_tour`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "tool_usertours_reset_tour",
    moodleFunction: "tool_usertours_reset_tour",
    description: "Moodle web service function `tool_usertours_reset_tour`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "tool_usertours_step_shown",
    moodleFunction: "tool_usertours_step_shown",
    description: "Moodle web service function `tool_usertours_step_shown`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
