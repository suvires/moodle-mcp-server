import type { ToolSpec } from "../../types.js";

export const mod_wiki_tools: ToolSpec[] = [
  {
    name: "mod_wiki_edit_page",
    moodleFunction: "mod_wiki_edit_page",
    description: "Moodle web service function `mod_wiki_edit_page`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_wiki_get_page_contents",
    moodleFunction: "mod_wiki_get_page_contents",
    description: "Moodle web service function `mod_wiki_get_page_contents`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_wiki_get_page_for_editing",
    moodleFunction: "mod_wiki_get_page_for_editing",
    description: "Moodle web service function `mod_wiki_get_page_for_editing`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_wiki_get_subwiki_files",
    moodleFunction: "mod_wiki_get_subwiki_files",
    description: "Moodle web service function `mod_wiki_get_subwiki_files`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_wiki_get_subwiki_pages",
    moodleFunction: "mod_wiki_get_subwiki_pages",
    description: "Moodle web service function `mod_wiki_get_subwiki_pages`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_wiki_get_subwikis",
    moodleFunction: "mod_wiki_get_subwikis",
    description: "Moodle web service function `mod_wiki_get_subwikis`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_wiki_get_wikis_by_courses",
    moodleFunction: "mod_wiki_get_wikis_by_courses",
    description: "Moodle web service function `mod_wiki_get_wikis_by_courses`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_wiki_new_page",
    moodleFunction: "mod_wiki_new_page",
    description: "Moodle web service function `mod_wiki_new_page`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_wiki_view_page",
    moodleFunction: "mod_wiki_view_page",
    description: "Moodle web service function `mod_wiki_view_page`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_wiki_view_wiki",
    moodleFunction: "mod_wiki_view_wiki",
    description: "Moodle web service function `mod_wiki_view_wiki`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
