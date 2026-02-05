import type { ToolSpec } from "../../types.js";

export const core_backup_tools: ToolSpec[] = [
  {
    name: "core_backup_get_async_backup_links_backup",
    moodleFunction: "core_backup_get_async_backup_links_backup",
    description:
      "Gets links/URLs for downloading completed async backups. Returns backup file URLs and status information.",
    inputSchema: {
      type: "object",
      properties: {
        backupid: {
          type: "string",
          minLength: 1,
          description: "The async backup job identifier.",
        },
        contextid: {
          type: "integer",
          minimum: 1,
          description: "Context ID where the backup was created.",
        },
      },
      required: ["backupid", "contextid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { backupid: "abc123", contextid: 50 },
    },
  },
  {
    name: "core_backup_get_async_backup_links_restore",
    moodleFunction: "core_backup_get_async_backup_links_restore",
    description:
      "Gets links/information for completed async restore operations. Returns restore status and course links.",
    inputSchema: {
      type: "object",
      properties: {
        backupid: {
          type: "string",
          minLength: 1,
          description: "The async restore job identifier.",
        },
        contextid: {
          type: "integer",
          minimum: 1,
          description: "Context ID where the restore was performed.",
        },
      },
      required: ["backupid", "contextid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { backupid: "abc123", contextid: 50 },
    },
  },
  {
    name: "core_backup_get_async_backup_progress",
    moodleFunction: "core_backup_get_async_backup_progress",
    description:
      "Gets the progress status of an async backup or restore operation. Returns progress percentage and status.",
    inputSchema: {
      type: "object",
      properties: {
        backupids: {
          type: "string",
          minLength: 1,
          description: "Comma-separated list of backup job identifiers to check.",
        },
        contextid: {
          type: "integer",
          minimum: 1,
          description: "Context ID of the backup/restore operation.",
        },
      },
      required: ["backupids", "contextid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { backupids: "abc123,def456", contextid: 50 },
    },
  },
  {
    name: "core_backup_get_copy_progress",
    moodleFunction: "core_backup_get_copy_progress",
    description:
      "Gets the progress of a course copy operation. Returns progress percentage, status, and operation details.",
    inputSchema: {
      type: "object",
      properties: {
        copies: {
          type: "array",
          minItems: 1,
          description: "Array of copy operation identifiers to check.",
          items: {
            type: "object",
            properties: {
              backupid: {
                type: "string",
                description: "Backup job ID for the copy operation.",
              },
              restoreid: {
                type: "string",
                description: "Restore job ID for the copy operation.",
              },
              operation: {
                type: "string",
                enum: ["backup", "restore"],
                description: "Which operation to check progress for.",
              },
            },
            required: ["backupid", "restoreid", "operation"],
            additionalProperties: false,
          },
        },
      },
      required: ["copies"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: {
        copies: [{ backupid: "abc123", restoreid: "def456", operation: "backup" }],
      },
    },
  },
  {
    name: "core_backup_submit_copy_form",
    moodleFunction: "core_backup_submit_copy_form",
    description:
      "Submits a course copy form to initiate an async course copy operation. Returns job identifiers for tracking.",
    inputSchema: {
      type: "object",
      properties: {
        jsonformdata: {
          type: "string",
          minLength: 1,
          description:
            "JSON-encoded form data containing copy settings (courseid, fullname, shortname, category, etc.).",
        },
      },
      required: ["jsonformdata"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: {
        jsonformdata:
          '{"courseid":2,"fullname":"Course Copy","shortname":"CC1","category":1}',
      },
    },
  },
];
