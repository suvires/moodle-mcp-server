import type { ToolSpec } from "../../types.js";

export const core_role_tools: ToolSpec[] = [
  {
    name: "core_role_assign_roles",
    moodleFunction: "core_role_assign_roles",
    description: "Moodle web service function `core_role_assign_roles`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager"],
    examples: { minimal: {} },
  },
  {
    name: "core_role_unassign_roles",
    moodleFunction: "core_role_unassign_roles",
    description: "Moodle web service function `core_role_unassign_roles`.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
    allowedRoles: ["admin","manager"],
    examples: { minimal: {} },
  },
];
