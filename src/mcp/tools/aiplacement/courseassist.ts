import type { ToolSpec } from "../../types.js";

export const aiplacement_courseassist_tools: ToolSpec[] = [
  {
    name: "aiplacement_courseassist_summarise_text",
    moodleFunction: "aiplacement_courseassist_summarise_text",
    description:
      "Uses Moodle's AI subsystem to summarize text content. Part of the course assistant AI placement. Returns a summarized version of the provided text.",
    inputSchema: {
      type: "object",
      properties: {
        contextid: {
          type: "integer",
          minimum: 1,
          description: "Context ID where the AI action is being performed.",
        },
        prompttext: {
          type: "string",
          minLength: 1,
          description: "The text content to summarize.",
        },
      },
      required: ["contextid", "prompttext"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {
        contextid: 50,
        prompttext: "This is a long text that needs to be summarized...",
      },
    },
  },
];
