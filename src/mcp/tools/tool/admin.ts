import type { ToolSpec } from "../../types.js";

export const tool_admin_tools: ToolSpec[] = [
  {
    name: "tool_admin_presets_delete_preset",
    moodleFunction: "tool_admin_presets_delete_preset",
    description:
      "Deletes an admin preset configuration. Admin presets are saved site configuration snapshots that can be applied to quickly configure Moodle settings.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Preset ID to delete.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin"],
    examples: { minimal: { id: 5 } },
  },
];
