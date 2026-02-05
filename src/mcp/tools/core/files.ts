import type { ToolSpec } from "../../types.js";

export const core_files_tools: ToolSpec[] = [
  {
    name: "core_files_delete_draft_files",
    moodleFunction: "core_files_delete_draft_files",
    description:
      "Deletes files from a user's draft area. Used to clean up temporary files before/after form submission.",
    inputSchema: {
      type: "object",
      properties: {
        draftitemid: {
          type: "integer",
          minimum: 1,
          description: "Draft area item ID containing the files.",
        },
        files: {
          type: "array",
          description: "List of files to delete. If empty, deletes all files in the draft area.",
          items: {
            type: "object",
            properties: {
              filepath: {
                type: "string",
                description: "File path within the draft area (e.g., '/').",
              },
              filename: {
                type: "string",
                description: "Name of the file to delete.",
              },
            },
            required: ["filepath", "filename"],
            additionalProperties: false,
          },
        },
      },
      required: ["draftitemid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { draftitemid: 123456 },
    },
  },
  {
    name: "core_files_get_files",
    moodleFunction: "core_files_get_files",
    description:
      "Gets files from a specific file area in Moodle. Returns file list with metadata (name, size, URL, etc.).",
    inputSchema: {
      type: "object",
      properties: {
        contextid: {
          type: "integer",
          minimum: 1,
          description: "Context ID of the file area.",
        },
        component: {
          type: "string",
          minLength: 1,
          description: "Component name (e.g., 'mod_assign', 'user').",
        },
        filearea: {
          type: "string",
          minLength: 1,
          description: "File area name (e.g., 'submission', 'draft').",
        },
        itemid: {
          type: "integer",
          minimum: 0,
          description: "Item ID within the file area.",
        },
        filepath: {
          type: "string",
          description: "Path within the file area. Default '/'.",
        },
        filename: {
          type: "string",
          description: "Specific filename to retrieve. Default empty (all files).",
        },
        modified: {
          type: "integer",
          description: "Only return files modified after this timestamp.",
        },
        contextlevel: {
          type: "string",
          description: "Context level (alternative to contextid).",
        },
        instanceid: {
          type: "integer",
          description: "Instance ID (used with contextlevel).",
        },
      },
      required: ["contextid", "component", "filearea", "itemid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {
        contextid: 50,
        component: "mod_assign",
        filearea: "submission",
        itemid: 0,
      },
    },
  },
  {
    name: "core_files_get_unused_draft_itemid",
    moodleFunction: "core_files_get_unused_draft_itemid",
    description:
      "Gets an unused draft area item ID for file uploads. Call this before uploading files to get a unique draft ID.",
    inputSchema: {
      type: "object",
      properties: {},
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {},
    },
  },
  {
    name: "core_files_upload",
    moodleFunction: "core_files_upload",
    description:
      "Uploads a file to a draft area or directly to a file area. Returns the uploaded file info.",
    inputSchema: {
      type: "object",
      properties: {
        contextid: {
          type: "integer",
          minimum: 1,
          description: "Context ID for the file area.",
        },
        component: {
          type: "string",
          minLength: 1,
          description: "Component name.",
        },
        filearea: {
          type: "string",
          minLength: 1,
          description: "File area name.",
        },
        itemid: {
          type: "integer",
          minimum: 0,
          description: "Item ID. Use 0 for new uploads to draft area.",
        },
        filepath: {
          type: "string",
          description: "Destination path. Default '/'.",
        },
        filename: {
          type: "string",
          minLength: 1,
          description: "Destination filename.",
        },
        filecontent: {
          type: "string",
          description: "Base64-encoded file content.",
        },
        contextlevel: {
          type: "string",
          description: "Context level (alternative to contextid).",
        },
        instanceid: {
          type: "integer",
          description: "Instance ID (used with contextlevel).",
        },
      },
      required: ["component", "filearea", "itemid", "filepath", "filename", "filecontent"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {
        component: "user",
        filearea: "draft",
        itemid: 0,
        filepath: "/",
        filename: "test.txt",
        filecontent: "SGVsbG8gV29ybGQh",
      },
    },
  },
];
