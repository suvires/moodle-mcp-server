import type { ToolSpec } from "../../types.js";

export const tool_certificate_tools: ToolSpec[] = [
  {
    name: "tool_certificate_delete_element",
    moodleFunction: "tool_certificate_delete_element",
    description: "Moodle web service function `tool_certificate_delete_element`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager"],
    examples: { minimal: {} },
  },
  {
    name: "tool_certificate_delete_template",
    moodleFunction: "tool_certificate_delete_template",
    description: "Moodle web service function `tool_certificate_delete_template`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager"],
    examples: { minimal: {} },
  },
  {
    name: "tool_certificate_duplicate_template",
    moodleFunction: "tool_certificate_duplicate_template",
    description: "Moodle web service function `tool_certificate_duplicate_template`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager"],
    examples: { minimal: {} },
  },
  {
    name: "tool_certificate_potential_users_selector",
    moodleFunction: "tool_certificate_potential_users_selector",
    description: "Moodle web service function `tool_certificate_potential_users_selector`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager"],
    examples: { minimal: {} },
  },
  {
    name: "tool_certificate_regenerate_issue_file",
    moodleFunction: "tool_certificate_regenerate_issue_file",
    description: "Moodle web service function `tool_certificate_regenerate_issue_file`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager"],
    examples: { minimal: {} },
  },
  {
    name: "tool_certificate_revoke_issue",
    moodleFunction: "tool_certificate_revoke_issue",
    description: "Moodle web service function `tool_certificate_revoke_issue`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager"],
    examples: { minimal: {} },
  },
  {
    name: "tool_certificate_update_element",
    moodleFunction: "tool_certificate_update_element",
    description: "Moodle web service function `tool_certificate_update_element`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager"],
    examples: { minimal: {} },
  },
];
