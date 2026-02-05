// src/tools/files/moodle_upload_tools.ts
import type { ToolSpec } from "../../types.js";

/**
 * NOTE:
 * - This is NOT a standard wsfunction. It is a wrapper tool for Moodle's file upload endpoint:
 *   POST /webservice/upload.php?token=...
 * - Your MCP runtime must implement support for this "special" tool name (e.g., via a custom handler)
 *   that performs a multipart/form-data POST with field "file_1".
 */
export const helpers_tools: ToolSpec[] = [
  {
    name: "helper_upload_file",
    moodleFunction: "",
    description:
      "Uploads a file to Moodle's draft file area via /webservice/upload.php and returns metadata including itemid (draftitemid). Use the returned itemid with core_user_update_picture or core_user_add_user_private_files.",
    inputSchema: {
      type: "object",
      properties: {
        filePath: {
          type: "string",
          description:
            "Local path (server-side) to the file to upload. The runtime should send it as multipart field 'file_1'.",
          minLength: 1,
        },
        itemid: {
          type: "integer",
          description:
            "Optional draft item id to reuse (if omitted, Moodle will create a new one).",
          minimum: 0,
          default: 0,
        },
        filepath: {
          type: "string",
          description: "Optional filepath within the draft area (default '/').",
          default: "/",
        },
      },
      required: ["filePath"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {
        filePath: "/tmp/foto.jpg",
      },
    },
  },
];