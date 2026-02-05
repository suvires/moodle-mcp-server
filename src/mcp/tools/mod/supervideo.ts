import type { ToolSpec } from "../../types.js";

export const mod_supervideo_tools: ToolSpec[] = [
  {
    name: "mod_supervideo_opengraph_getinfo",
    moodleFunction: "mod_supervideo_opengraph_getinfo",
    description: "Moodle web service function `mod_supervideo_opengraph_getinfo`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_supervideo_progress_save",
    moodleFunction: "mod_supervideo_progress_save",
    description: "Moodle web service function `mod_supervideo_progress_save`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_supervideo_progress_save_mobile",
    moodleFunction: "mod_supervideo_progress_save_mobile",
    description: "Moodle web service function `mod_supervideo_progress_save_mobile`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_supervideo_view_supervideo",
    moodleFunction: "mod_supervideo_view_supervideo",
    description: "Moodle web service function `mod_supervideo_view_supervideo`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
