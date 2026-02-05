import type { ToolSpec } from "../../types.js";

export const core_block_tools: ToolSpec[] = [
  {
    name: "core_block_fetch_addable_blocks",
    moodleFunction: "core_block_fetch_addable_blocks",
    description:
      "Gets list of block types that can be added to a page. Returns array of block objects with name, title, and capabilities.",
    inputSchema: {
      type: "object",
      properties: {
        pagecontextid: {
          type: "integer",
          minimum: 1,
          description: "Context ID of the page where blocks can be added.",
        },
        pagetype: {
          type: "string",
          minLength: 1,
          description: "Page type identifier (e.g., 'course-view-topics', 'my-index').",
        },
        pagelayout: {
          type: "string",
          description: "Page layout name (e.g., 'course', 'mydashboard').",
        },
        subpage: {
          type: "string",
          description: "Sub-page identifier if applicable.",
        },
      },
      required: ["pagecontextid", "pagetype"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { pagecontextid: 50, pagetype: "course-view-topics" },
    },
  },
  {
    name: "core_block_get_course_blocks",
    moodleFunction: "core_block_get_course_blocks",
    description:
      "Gets all blocks configured on a course page. Returns array of block instances with position, configuration, and content.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID to get blocks for.",
        },
        returncontents: {
          type: "boolean",
          description: "If true, include rendered block contents. Default false.",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { courseid: 2 },
    },
  },
  {
    name: "core_block_get_dashboard_blocks",
    moodleFunction: "core_block_get_dashboard_blocks",
    description:
      "Gets all blocks configured on the user's dashboard (My Home). Returns array of block instances with position and content.",
    inputSchema: {
      type: "object",
      properties: {
        userid: {
          type: "integer",
          minimum: 0,
          description: "User ID. Use 0 for current user.",
        },
        returncontents: {
          type: "boolean",
          description: "If true, include rendered block contents. Default false.",
        },
        mypage: {
          type: "string",
          description: "Dashboard page name. Default 'my-index'.",
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {},
    },
  },
];
