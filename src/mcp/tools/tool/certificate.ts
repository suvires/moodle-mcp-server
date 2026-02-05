import type { ToolSpec } from "../../types.js";

export const tool_certificate_tools: ToolSpec[] = [
  {
    name: "tool_certificate_delete_element",
    moodleFunction: "tool_certificate_delete_element",
    description:
      "Deletes an element from a certificate template. Elements include text, images, dates, QR codes, etc.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Element ID to delete.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: { id: 10 } },
  },
  {
    name: "tool_certificate_delete_template",
    moodleFunction: "tool_certificate_delete_template",
    description:
      "Deletes a certificate template. This will not affect already issued certificates.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Template ID to delete.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: { id: 5 } },
  },
  {
    name: "tool_certificate_duplicate_template",
    moodleFunction: "tool_certificate_duplicate_template",
    description:
      "Duplicates a certificate template. Creates a copy of the template with all its elements and pages.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Template ID to duplicate.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: { id: 5 } },
  },
  {
    name: "tool_certificate_potential_users_selector",
    moodleFunction: "tool_certificate_potential_users_selector",
    description:
      "Searches for potential users to issue certificates to. Returns users matching the search criteria.",
    inputSchema: {
      type: "object",
      properties: {
        templateid: {
          type: "integer",
          minimum: 1,
          description: "Certificate template ID.",
        },
        search: {
          type: "string",
          description: "Search term to filter users by name or email.",
        },
      },
      required: ["templateid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { templateid: 5 },
      typical: { templateid: 5, search: "john" },
    },
  },
  {
    name: "tool_certificate_regenerate_issue_file",
    moodleFunction: "tool_certificate_regenerate_issue_file",
    description:
      "Regenerates the PDF file for an issued certificate. Use after template changes to update an existing issue.",
    inputSchema: {
      type: "object",
      properties: {
        issueid: {
          type: "integer",
          minimum: 1,
          description: "Certificate issue ID to regenerate.",
        },
      },
      required: ["issueid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: { issueid: 100 } },
  },
  {
    name: "tool_certificate_revoke_issue",
    moodleFunction: "tool_certificate_revoke_issue",
    description:
      "Revokes an issued certificate. The certificate will no longer be valid for verification.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Certificate issue ID to revoke.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: { id: 100 } },
  },
  {
    name: "tool_certificate_update_element",
    moodleFunction: "tool_certificate_update_element",
    description:
      "Updates an element in a certificate template. Modifies position, size, or content of the element.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Element ID to update.",
        },
        posx: {
          type: "integer",
          minimum: 0,
          description: "X position in mm from left edge.",
        },
        posy: {
          type: "integer",
          minimum: 0,
          description: "Y position in mm from top edge.",
        },
        width: {
          type: "integer",
          minimum: 0,
          description: "Element width in mm. 0 for auto.",
        },
        data: {
          type: "string",
          description: "JSON-encoded element-specific data.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { id: 10 },
      typical: { id: 10, posx: 50, posy: 100, width: 200 },
    },
  },
];
