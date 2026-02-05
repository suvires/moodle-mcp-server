import type { ToolSpec } from "../../types.js";

export const gradingform_guide_tools: ToolSpec[] = [
  {
    name: "gradingform_guide_grader_gradingpanel_fetch",
    moodleFunction: "gradingform_guide_grader_gradingpanel_fetch",
    description: "Moodle web service function `gradingform_guide_grader_gradingpanel_fetch`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "gradingform_guide_grader_gradingpanel_store",
    moodleFunction: "gradingform_guide_grader_gradingpanel_store",
    description: "Moodle web service function `gradingform_guide_grader_gradingpanel_store`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
