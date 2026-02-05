import type { ToolSpec } from "../../types.js";

export const qbank_tagquestion_tools: ToolSpec[] = [
  {
    name: "qbank_tagquestion_submit_tags_form",
    moodleFunction: "qbank_tagquestion_submit_tags_form",
    description:
      "Submits tags for a question in the question bank. Allows adding, removing, or updating tags associated with a question for better organization and filtering.",
    inputSchema: {
      type: "object",
      properties: {
        questionid: {
          type: "integer",
          minimum: 1,
          description: "Question ID to tag.",
        },
        contextid: {
          type: "integer",
          minimum: 1,
          description: "Context ID for the tags.",
        },
        formdata: {
          type: "string",
          description: "URL-encoded form data containing the tag selections.",
        },
      },
      required: ["questionid", "contextid", "formdata"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: {
        questionid: 42,
        contextid: 50,
        formdata: "tags=mathematics,algebra,equations",
      },
    },
  },
];
