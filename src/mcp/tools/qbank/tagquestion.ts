import type { ToolSpec } from "../../types.js";

export const qbank_tagquestion_tools: ToolSpec[] = [
  {
    name: "qbank_tagquestion_submit_tags_form",
    moodleFunction: "qbank_tagquestion_submit_tags_form",
    description: "Moodle web service function `qbank_tagquestion_submit_tags_form`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
