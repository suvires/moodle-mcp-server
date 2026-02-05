import type { ToolSpec } from "../../types.js";

export const mod_book_tools: ToolSpec[] = [
  {
    name: "mod_book_get_books_by_courses",
    moodleFunction: "mod_book_get_books_by_courses",
    description: "Moodle web service function `mod_book_get_books_by_courses`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
  {
    name: "mod_book_view_book",
    moodleFunction: "mod_book_view_book",
    description: "Moodle web service function `mod_book_view_book`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager","editingteacher","teacher","student","user"],
    examples: { minimal: {} },
  },
];
