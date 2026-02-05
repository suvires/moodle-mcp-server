import type { ToolSpec } from "../../types.js";

export const core_grading_tools: ToolSpec[] = [
  {
    name: "core_grading_get_definitions",
    moodleFunction: "core_grading_get_definitions",
    description: "Moodle web service function `core_grading_get_definitions`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_grading_get_gradingform_instances",
    moodleFunction: "core_grading_get_gradingform_instances",
    description: "Moodle web service function `core_grading_get_gradingform_instances`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_grading_save_definitions",
    moodleFunction: "core_grading_save_definitions",
    description: "Moodle web service function `core_grading_save_definitions`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
