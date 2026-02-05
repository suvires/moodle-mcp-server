import type { ToolSpec } from "../../types.js";

export const tool_xmldb_tools: ToolSpec[] = [
  {
    name: "tool_xmldb_invoke_move_action",
    moodleFunction: "tool_xmldb_invoke_move_action",
    description:
      "Invokes a move action in the XMLDB editor. Used for reordering database table fields, keys, or indexes in the Moodle database schema editor.",
    inputSchema: {
      type: "object",
      properties: {
        action: {
          type: "string",
          enum: ["move_updown_field", "move_updown_key", "move_updown_index"],
          description: "Move action type.",
        },
        dir: {
          type: "string",
          minLength: 1,
          description: "Plugin directory path (e.g., 'mod/forum').",
        },
        table: {
          type: "string",
          minLength: 1,
          description: "Table name.",
        },
        name: {
          type: "string",
          minLength: 1,
          description: "Field/key/index name to move.",
        },
        direction: {
          type: "string",
          enum: ["up", "down"],
          description: "Direction to move.",
        },
      },
      required: ["action", "dir", "table", "name", "direction"],
      additionalProperties: false,
    },
    allowedRoles: ["admin"],
    examples: {
      minimal: {
        action: "move_updown_field",
        dir: "mod/forum",
        table: "forum",
        name: "intro",
        direction: "up",
      },
    },
  },
];
