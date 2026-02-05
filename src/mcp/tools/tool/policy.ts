import type { ToolSpec } from "../../types.js";

export const tool_policy_tools: ToolSpec[] = [
  {
    name: "tool_policy_get_policy_version",
    moodleFunction: "tool_policy_get_policy_version",
    description: "Moodle web service function `tool_policy_get_policy_version`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager"],
    examples: { minimal: {} },
  },
  {
    name: "tool_policy_get_user_acceptances",
    moodleFunction: "tool_policy_get_user_acceptances",
    description: "Moodle web service function `tool_policy_get_user_acceptances`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager"],
    examples: { minimal: {} },
  },
  {
    name: "tool_policy_set_acceptances_status",
    moodleFunction: "tool_policy_set_acceptances_status",
    description: "Moodle web service function `tool_policy_set_acceptances_status`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager"],
    examples: { minimal: {} },
  },
  {
    name: "tool_policy_submit_accept_on_behalf",
    moodleFunction: "tool_policy_submit_accept_on_behalf",
    description: "Moodle web service function `tool_policy_submit_accept_on_behalf`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager"],
    examples: { minimal: {} },
  },
];
