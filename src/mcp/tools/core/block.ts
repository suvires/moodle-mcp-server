import type { ToolSpec } from "../../types.js";

export const core_block_tools: ToolSpec[] = [
  {
    name: "core_block_fetch_addable_blocks",
    moodleFunction: "core_block_fetch_addable_blocks",
    description: "Moodle web service function `core_block_fetch_addable_blocks`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_block_get_course_blocks",
    moodleFunction: "core_block_get_course_blocks",
    description: "Moodle web service function `core_block_get_course_blocks`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "core_block_get_dashboard_blocks",
    moodleFunction: "core_block_get_dashboard_blocks",
    description: "Moodle web service function `core_block_get_dashboard_blocks`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
