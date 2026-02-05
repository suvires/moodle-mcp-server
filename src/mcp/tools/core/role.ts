import type { ToolSpec } from "../../types.js";

export const core_role_tools: ToolSpec[] = [
  {
    name: "core_role_assign_roles",
    moodleFunction: "core_role_assign_roles",
    description:
      "Assigns roles to users in specified contexts. Typically used to enrol users with specific roles in courses or categories.",
    inputSchema: {
      type: "object",
      properties: {
        assignments: {
          type: "array",
          minItems: 1,
          description: "List of role assignments to make.",
          items: {
            type: "object",
            properties: {
              roleid: {
                type: "integer",
                minimum: 1,
                description: "Role ID to assign.",
              },
              userid: {
                type: "integer",
                minimum: 1,
                description: "User ID to assign the role to.",
              },
              contextid: {
                type: "integer",
                minimum: 1,
                description:
                  "Context ID where role is assigned. Alternative to contextlevel+instanceid.",
              },
              contextlevel: {
                type: "string",
                enum: ["system", "user", "coursecat", "course", "module", "block"],
                description: "Context level type. Use with instanceid.",
              },
              instanceid: {
                type: "integer",
                minimum: 0,
                description: "Instance ID within the context level (e.g., course ID).",
              },
            },
            required: ["roleid", "userid"],
            additionalProperties: false,
          },
        },
      },
      required: ["assignments"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: {
        assignments: [{ roleid: 5, userid: 3, contextlevel: "course", instanceid: 2 }],
      },
    },
  },
  {
    name: "core_role_unassign_roles",
    moodleFunction: "core_role_unassign_roles",
    description:
      "Removes role assignments from users in specified contexts. Does not unenrol users, only removes the specific role.",
    inputSchema: {
      type: "object",
      properties: {
        unassignments: {
          type: "array",
          minItems: 1,
          description: "List of role assignments to remove.",
          items: {
            type: "object",
            properties: {
              roleid: {
                type: "integer",
                minimum: 1,
                description: "Role ID to unassign.",
              },
              userid: {
                type: "integer",
                minimum: 1,
                description: "User ID to remove the role from.",
              },
              contextid: {
                type: "integer",
                minimum: 1,
                description:
                  "Context ID where role is unassigned. Alternative to contextlevel+instanceid.",
              },
              contextlevel: {
                type: "string",
                enum: ["system", "user", "coursecat", "course", "module", "block"],
                description: "Context level type. Use with instanceid.",
              },
              instanceid: {
                type: "integer",
                minimum: 0,
                description: "Instance ID within the context level.",
              },
            },
            required: ["roleid", "userid"],
            additionalProperties: false,
          },
        },
      },
      required: ["unassignments"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: {
        unassignments: [{ roleid: 5, userid: 3, contextlevel: "course", instanceid: 2 }],
      },
    },
  },
];
