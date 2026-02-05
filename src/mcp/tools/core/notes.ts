import type { ToolSpec } from "../../types.js";

export const core_notes_tools: ToolSpec[] = [
  {
    name: "core_notes_create_notes",
    moodleFunction: "core_notes_create_notes",
    description:
      "Creates notes about users in courses. Notes can be personal, course-level, or site-level. Returns array of created note IDs.",
    inputSchema: {
      type: "object",
      properties: {
        notes: {
          type: "array",
          minItems: 1,
          description: "List of notes to create.",
          items: {
            type: "object",
            properties: {
              userid: {
                type: "integer",
                minimum: 1,
                description: "User ID the note is about.",
              },
              publishstate: {
                type: "string",
                enum: ["personal", "course", "site"],
                description:
                  "Note visibility: 'personal' (only author), 'course' (course teachers), 'site' (all teachers).",
              },
              courseid: {
                type: "integer",
                minimum: 1,
                description: "Course ID context for the note.",
              },
              text: {
                type: "string",
                minLength: 1,
                description: "Note content.",
              },
              format: {
                type: "integer",
                enum: [0, 1, 2, 4],
                description: "Text format: 0=MOODLE, 1=HTML, 2=PLAIN, 4=MARKDOWN. Default 1.",
              },
              clientnoteid: {
                type: "string",
                description: "Client-side ID for tracking (returned in response).",
              },
            },
            required: ["userid", "publishstate", "courseid", "text"],
            additionalProperties: false,
          },
        },
      },
      required: ["notes"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: {
        notes: [
          { userid: 5, publishstate: "course", courseid: 2, text: "Good progress in assignments." },
        ],
      },
    },
  },
  {
    name: "core_notes_delete_notes",
    moodleFunction: "core_notes_delete_notes",
    description:
      "Deletes notes by their IDs. User must have permission to delete the notes.",
    inputSchema: {
      type: "object",
      properties: {
        notes: {
          type: "array",
          minItems: 1,
          description: "Array of note IDs to delete.",
          items: {
            type: "integer",
            minimum: 1,
          },
        },
      },
      required: ["notes"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { notes: [1, 2, 3] },
    },
  },
  {
    name: "core_notes_get_course_notes",
    moodleFunction: "core_notes_get_course_notes",
    description:
      "Gets all notes for a course, optionally filtered by user. Returns notes organized by publish state.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID to get notes for.",
        },
        userid: {
          type: "integer",
          minimum: 0,
          description: "Filter by user ID. Use 0 for all users.",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { courseid: 2 },
    },
  },
  {
    name: "core_notes_get_notes",
    moodleFunction: "core_notes_get_notes",
    description:
      "Gets specific notes by their IDs. Returns array of note objects with full details.",
    inputSchema: {
      type: "object",
      properties: {
        notes: {
          type: "array",
          minItems: 1,
          description: "Array of note IDs to retrieve.",
          items: {
            type: "integer",
            minimum: 1,
          },
        },
      },
      required: ["notes"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { notes: [1, 2, 3] },
    },
  },
  {
    name: "core_notes_update_notes",
    moodleFunction: "core_notes_update_notes",
    description:
      "Updates existing notes. Only the text and format can be updated.",
    inputSchema: {
      type: "object",
      properties: {
        notes: {
          type: "array",
          minItems: 1,
          description: "List of note updates.",
          items: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                minimum: 1,
                description: "Note ID to update.",
              },
              text: {
                type: "string",
                minLength: 1,
                description: "New note content.",
              },
              format: {
                type: "integer",
                enum: [0, 1, 2, 4],
                description: "Text format.",
              },
            },
            required: ["id", "text"],
            additionalProperties: false,
          },
        },
      },
      required: ["notes"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { notes: [{ id: 1, text: "Updated note content." }] },
    },
  },
  {
    name: "core_notes_view_notes",
    moodleFunction: "core_notes_view_notes",
    description:
      "Triggers the notes viewed event for logging and analytics. Call when viewing a user's notes.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID context.",
        },
        userid: {
          type: "integer",
          minimum: 0,
          description: "User ID whose notes are being viewed. Use 0 for all course notes.",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { courseid: 2, userid: 5 },
    },
  },
];
