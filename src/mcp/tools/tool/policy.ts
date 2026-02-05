import type { ToolSpec } from "../../types.js";

export const tool_policy_tools: ToolSpec[] = [
  {
    name: "tool_policy_get_policy_version",
    moodleFunction: "tool_policy_get_policy_version",
    description:
      "Gets a specific version of a site policy document. Returns policy content, name, and acceptance requirements.",
    inputSchema: {
      type: "object",
      properties: {
        versionid: {
          type: "integer",
          minimum: 1,
          description: "Policy version ID to retrieve.",
        },
        behalfid: {
          type: "integer",
          minimum: 0,
          description: "User ID to get policy for on behalf of. 0 for current user.",
        },
      },
      required: ["versionid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { versionid: 1 },
    },
  },
  {
    name: "tool_policy_get_user_acceptances",
    moodleFunction: "tool_policy_get_user_acceptances",
    description:
      "Gets policy acceptances for a user. Returns which policy versions the user has accepted or declined.",
    inputSchema: {
      type: "object",
      properties: {
        userid: {
          type: "integer",
          minimum: 0,
          description: "User ID to get acceptances for. 0 for current user.",
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {},
      typical: { userid: 5 },
    },
  },
  {
    name: "tool_policy_set_acceptances_status",
    moodleFunction: "tool_policy_set_acceptances_status",
    description:
      "Sets policy acceptance status for the current user. Used when a user accepts or declines site policies.",
    inputSchema: {
      type: "object",
      properties: {
        policies: {
          type: "array",
          description: "List of policy acceptances to set.",
          items: {
            type: "object",
            properties: {
              versionid: { type: "integer", minimum: 1, description: "Policy version ID." },
              status: { type: "integer", description: "Acceptance status: 1=accepted, 0=declined." },
            },
            required: ["versionid", "status"],
          },
          minItems: 1,
        },
      },
      required: ["policies"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { policies: [{ versionid: 1, status: 1 }] },
    },
  },
  {
    name: "tool_policy_submit_accept_on_behalf",
    moodleFunction: "tool_policy_submit_accept_on_behalf",
    description:
      "Submits policy acceptance on behalf of another user. Used by parents/guardians to accept policies for minors, or by admins.",
    inputSchema: {
      type: "object",
      properties: {
        userid: {
          type: "integer",
          minimum: 1,
          description: "User ID to accept policy on behalf of.",
        },
        versionids: {
          type: "array",
          description: "Policy version IDs to accept.",
          items: { type: "integer", minimum: 1 },
          minItems: 1,
        },
        note: {
          type: "string",
          description: "Optional note explaining the acceptance.",
        },
      },
      required: ["userid", "versionids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { userid: 5, versionids: [1, 2] },
    },
  },
];
