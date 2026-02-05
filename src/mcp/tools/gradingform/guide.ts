import type { ToolSpec } from "../../types.js";

export const gradingform_guide_tools: ToolSpec[] = [
  {
    name: "gradingform_guide_grader_gradingpanel_fetch",
    moodleFunction: "gradingform_guide_grader_gradingpanel_fetch",
    description:
      "Fetches the marking guide grading panel for a gradeable item. Returns the guide criteria, current scores, and comments for the grader interface.",
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
    name: "gradingform_guide_grader_gradingpanel_store",
    moodleFunction: "gradingform_guide_grader_gradingpanel_store",
    description:
      "Stores grades using the marking guide grading panel. Saves criterion scores and comments for the student submission.",
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
          description: "URL-encoded form data containing criterion scores and remarks.",
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
        formdata: "criterion1_score=3&criterion1_remark=Good%20work",
      },
    },
  },
];
