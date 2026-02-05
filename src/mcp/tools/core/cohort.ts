import type { ToolSpec } from "../../types.js";

export const core_cohort_tools: ToolSpec[] = [
  {
    name: "core_cohort_add_cohort_members",
    moodleFunction: "core_cohort_add_cohort_members",
    description: "Moodle web service function `core_cohort_add_cohort_members`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_cohort_create_cohorts",
    moodleFunction: "core_cohort_create_cohorts",
    description: "Moodle web service function `core_cohort_create_cohorts`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_cohort_delete_cohort_members",
    moodleFunction: "core_cohort_delete_cohort_members",
    description: "Moodle web service function `core_cohort_delete_cohort_members`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_cohort_delete_cohorts",
    moodleFunction: "core_cohort_delete_cohorts",
    description: "Moodle web service function `core_cohort_delete_cohorts`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_cohort_get_cohort_members",
    moodleFunction: "core_cohort_get_cohort_members",
    description: "Moodle web service function `core_cohort_get_cohort_members`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_cohort_get_cohorts",
    moodleFunction: "core_cohort_get_cohorts",
    description: "Moodle web service function `core_cohort_get_cohorts`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_cohort_search_cohorts",
    moodleFunction: "core_cohort_search_cohorts",
    description: "Moodle web service function `core_cohort_search_cohorts`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_cohort_update_cohorts",
    moodleFunction: "core_cohort_update_cohorts",
    description: "Moodle web service function `core_cohort_update_cohorts`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
