import type { ToolSpec } from "../../types.js";

export const tool_moodlenet_tools: ToolSpec[] = [
  {
    name: "tool_moodlenet_search_courses",
    moodleFunction: "tool_moodlenet_search_courses",
    description: "Moodle web service function `tool_moodlenet_search_courses`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "tool_moodlenet_verify_webfinger",
    moodleFunction: "tool_moodlenet_verify_webfinger",
    description: "Moodle web service function `tool_moodlenet_verify_webfinger`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
