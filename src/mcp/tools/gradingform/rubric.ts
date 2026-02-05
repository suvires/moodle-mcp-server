import type { ToolSpec } from "../../types.js";

export const gradingform_rubric_tools: ToolSpec[] = [
  {
    name: "gradingform_rubric_grader_gradingpanel_fetch",
    moodleFunction: "gradingform_rubric_grader_gradingpanel_fetch",
    description:
      "Fetches the rubric grading panel for a gradeable item. Returns rubric criteria with level definitions, current selections, and feedback for the grader interface.",
    inputSchema: {
      type: "object",
      properties: {
        component: {
          type: "string",
          minLength: 1,
          description: "Component name (e.g., 'mod_assign').",
        },
        contextid: {
          type: "integer",
          minimum: 1,
          description: "Context ID for the grading area.",
        },
        itemname: {
          type: "string",
          minLength: 1,
          description: "Item name within the component (e.g., 'submissions').",
        },
        gradeduserid: {
          type: "integer",
          minimum: 1,
          description: "User ID being graded.",
        },
      },
      required: ["component", "contextid", "itemname", "gradeduserid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: {
        component: "mod_assign",
        contextid: 50,
        itemname: "submissions",
        gradeduserid: 5,
      },
    },
  },
  {
    name: "gradingform_rubric_grader_gradingpanel_store",
    moodleFunction: "gradingform_rubric_grader_gradingpanel_store",
    description:
      "Stores grades using the rubric grading panel. Saves selected levels for each criterion and optional remarks.",
    inputSchema: {
      type: "object",
      properties: {
        component: {
          type: "string",
          minLength: 1,
          description: "Component name (e.g., 'mod_assign').",
        },
        contextid: {
          type: "integer",
          minimum: 1,
          description: "Context ID for the grading area.",
        },
        itemname: {
          type: "string",
          minLength: 1,
          description: "Item name within the component.",
        },
        gradeduserid: {
          type: "integer",
          minimum: 1,
          description: "User ID being graded.",
        },
        notifyuser: {
          type: "boolean",
          description: "Whether to notify the user of the grade.",
        },
        formdata: {
          type: "string",
          description: "URL-encoded form data containing selected rubric levels and remarks.",
        },
      },
      required: ["component", "contextid", "itemname", "gradeduserid", "formdata"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: {
        component: "mod_assign",
        contextid: 50,
        itemname: "submissions",
        gradeduserid: 5,
        formdata: "criterion1_levelid=5&criterion1_remark=Excellent",
      },
    },
  },
];
