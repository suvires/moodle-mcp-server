import type { ToolSpec } from "../../types.js";

export const tool_dataprivacy_tools: ToolSpec[] = [
  {
    name: "tool_dataprivacy_approve_data_request",
    moodleFunction: "tool_dataprivacy_approve_data_request",
    description:
      "Approves a data privacy request (GDPR). Allows the request to proceed with data export or deletion.",
    inputSchema: {
      type: "object",
      properties: {
        requestid: {
          type: "integer",
          minimum: 1,
          description: "Data request ID to approve.",
        },
      },
      required: ["requestid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: { requestid: 10 } },
  },
  {
    name: "tool_dataprivacy_bulk_approve_data_requests",
    moodleFunction: "tool_dataprivacy_bulk_approve_data_requests",
    description:
      "Approves multiple data privacy requests at once. Batch approval for GDPR requests.",
    inputSchema: {
      type: "object",
      properties: {
        requestids: {
          type: "array",
          description: "Array of request IDs to approve.",
          items: { type: "integer", minimum: 1 },
          minItems: 1,
        },
      },
      required: ["requestids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: { requestids: [10, 11, 12] } },
  },
  {
    name: "tool_dataprivacy_bulk_deny_data_requests",
    moodleFunction: "tool_dataprivacy_bulk_deny_data_requests",
    description:
      "Denies multiple data privacy requests at once. Batch denial for GDPR requests.",
    inputSchema: {
      type: "object",
      properties: {
        requestids: {
          type: "array",
          description: "Array of request IDs to deny.",
          items: { type: "integer", minimum: 1 },
          minItems: 1,
        },
      },
      required: ["requestids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: { requestids: [10, 11, 12] } },
  },
  {
    name: "tool_dataprivacy_cancel_data_request",
    moodleFunction: "tool_dataprivacy_cancel_data_request",
    description:
      "Cancels a pending data privacy request. Only pending requests can be cancelled.",
    inputSchema: {
      type: "object",
      properties: {
        requestid: {
          type: "integer",
          minimum: 1,
          description: "Data request ID to cancel.",
        },
      },
      required: ["requestid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: { requestid: 10 } },
  },
  {
    name: "tool_dataprivacy_confirm_contexts_for_deletion",
    moodleFunction: "tool_dataprivacy_confirm_contexts_for_deletion",
    description:
      "Confirms contexts for deletion in a data deletion request. Finalizes which data will be deleted.",
    inputSchema: {
      type: "object",
      properties: {
        requestid: {
          type: "integer",
          minimum: 1,
          description: "Data request ID.",
        },
        contextids: {
          type: "array",
          description: "Context IDs to confirm for deletion.",
          items: { type: "integer", minimum: 1 },
        },
      },
      required: ["requestid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: { requestid: 10 } },
  },
  {
    name: "tool_dataprivacy_contact_dpo",
    moodleFunction: "tool_dataprivacy_contact_dpo",
    description:
      "Sends a message to the Data Protection Officer (DPO). Allows users to contact DPO with privacy concerns.",
    inputSchema: {
      type: "object",
      properties: {
        message: {
          type: "string",
          minLength: 1,
          description: "Message content to send to DPO.",
        },
      },
      required: ["message"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { message: "I have a question about my data." } },
  },
  {
    name: "tool_dataprivacy_create_category_form",
    moodleFunction: "tool_dataprivacy_create_category_form",
    description:
      "Creates a new data category for privacy classification. Categories organize data types for GDPR compliance.",
    inputSchema: {
      type: "object",
      properties: {
        jsonformdata: {
          type: "string",
          description: "JSON-encoded form data for the category.",
        },
      },
      required: ["jsonformdata"],
      additionalProperties: false,
    },
    allowedRoles: ["admin"],
    examples: { minimal: { jsonformdata: "{\"name\":\"Personal Data\"}" } },
  },
  {
    name: "tool_dataprivacy_create_data_request",
    moodleFunction: "tool_dataprivacy_create_data_request",
    description:
      "Creates a new data privacy request (export or deletion). Users can request their data or request deletion.",
    inputSchema: {
      type: "object",
      properties: {
        type: {
          type: "integer",
          enum: [1, 2],
          description: "Request type: 1=export, 2=deletion.",
        },
        comments: {
          type: "string",
          description: "Additional comments for the request.",
        },
        userid: {
          type: "integer",
          minimum: 0,
          description: "User ID to create request for. 0 for current user.",
        },
      },
      required: ["type"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { type: 1 } },
  },
  {
    name: "tool_dataprivacy_create_purpose_form",
    moodleFunction: "tool_dataprivacy_create_purpose_form",
    description:
      "Creates a new data purpose for privacy classification. Purposes define why data is collected (legal basis).",
    inputSchema: {
      type: "object",
      properties: {
        jsonformdata: {
          type: "string",
          description: "JSON-encoded form data for the purpose.",
        },
      },
      required: ["jsonformdata"],
      additionalProperties: false,
    },
    allowedRoles: ["admin"],
    examples: { minimal: { jsonformdata: "{\"name\":\"Educational Purpose\"}" } },
  },
  {
    name: "tool_dataprivacy_delete_category",
    moodleFunction: "tool_dataprivacy_delete_category",
    description:
      "Deletes a data category. Cannot delete if category is in use.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Category ID to delete.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin"],
    examples: { minimal: { id: 5 } },
  },
  {
    name: "tool_dataprivacy_delete_purpose",
    moodleFunction: "tool_dataprivacy_delete_purpose",
    description:
      "Deletes a data purpose. Cannot delete if purpose is in use.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Purpose ID to delete.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin"],
    examples: { minimal: { id: 5 } },
  },
  {
    name: "tool_dataprivacy_deny_data_request",
    moodleFunction: "tool_dataprivacy_deny_data_request",
    description:
      "Denies a data privacy request. The request will not be processed.",
    inputSchema: {
      type: "object",
      properties: {
        requestid: {
          type: "integer",
          minimum: 1,
          description: "Data request ID to deny.",
        },
      },
      required: ["requestid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: { requestid: 10 } },
  },
  {
    name: "tool_dataprivacy_get_access_information",
    moodleFunction: "tool_dataprivacy_get_access_information",
    description:
      "Gets access information for data privacy features. Returns capabilities and permissions for the current user.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: {} },
  },
  {
    name: "tool_dataprivacy_get_activity_options",
    moodleFunction: "tool_dataprivacy_get_activity_options",
    description:
      "Gets activity module options for data privacy settings. Returns available activities that can have privacy settings.",
    inputSchema: {
      type: "object",
      properties: {
        nodefaults: {
          type: "boolean",
          description: "Exclude default options.",
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin"],
    examples: { minimal: {} },
  },
  {
    name: "tool_dataprivacy_get_category_options",
    moodleFunction: "tool_dataprivacy_get_category_options",
    description:
      "Gets available data category options for selection. Returns list of categories for privacy classification.",
    inputSchema: {
      type: "object",
      properties: {
        includeinherit: {
          type: "boolean",
          description: "Include 'inherit' option.",
        },
        includenotset: {
          type: "boolean",
          description: "Include 'not set' option.",
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin"],
    examples: { minimal: {} },
  },
  {
    name: "tool_dataprivacy_get_data_request",
    moodleFunction: "tool_dataprivacy_get_data_request",
    description:
      "Gets details of a specific data privacy request. Returns request status, type, and history.",
    inputSchema: {
      type: "object",
      properties: {
        requestid: {
          type: "integer",
          minimum: 1,
          description: "Data request ID to retrieve.",
        },
      },
      required: ["requestid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: { requestid: 10 } },
  },
  {
    name: "tool_dataprivacy_get_data_requests",
    moodleFunction: "tool_dataprivacy_get_data_requests",
    description:
      "Gets list of data privacy requests. Supports filtering by status, type, and user.",
    inputSchema: {
      type: "object",
      properties: {
        userid: {
          type: "integer",
          minimum: 0,
          description: "Filter by user ID. 0 for all users.",
        },
        statuses: {
          type: "array",
          description: "Filter by status codes.",
          items: { type: "integer" },
        },
        types: {
          type: "array",
          description: "Filter by request types.",
          items: { type: "integer" },
        },
        sort: {
          type: "string",
          description: "Sort field.",
        },
        limitfrom: {
          type: "integer",
          minimum: 0,
          description: "Offset for pagination.",
        },
        limitnum: {
          type: "integer",
          minimum: 0,
          description: "Limit for pagination.",
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: {} },
  },
  {
    name: "tool_dataprivacy_get_purpose_options",
    moodleFunction: "tool_dataprivacy_get_purpose_options",
    description:
      "Gets available data purpose options for selection. Returns list of purposes for privacy classification.",
    inputSchema: {
      type: "object",
      properties: {
        includeinherit: {
          type: "boolean",
          description: "Include 'inherit' option.",
        },
        includenotset: {
          type: "boolean",
          description: "Include 'not set' option.",
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin"],
    examples: { minimal: {} },
  },
  {
    name: "tool_dataprivacy_get_users",
    moodleFunction: "tool_dataprivacy_get_users",
    description:
      "Searches for users to create data requests on behalf of. Returns matching users.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Search query for user name or email.",
        },
      },
      required: ["query"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: { query: "john" } },
  },
  {
    name: "tool_dataprivacy_mark_complete",
    moodleFunction: "tool_dataprivacy_mark_complete",
    description:
      "Marks a data privacy request as complete. Used when manual processing is finished.",
    inputSchema: {
      type: "object",
      properties: {
        requestid: {
          type: "integer",
          minimum: 1,
          description: "Data request ID to mark complete.",
        },
      },
      required: ["requestid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: { requestid: 10 } },
  },
  {
    name: "tool_dataprivacy_set_context_defaults",
    moodleFunction: "tool_dataprivacy_set_context_defaults",
    description:
      "Sets default privacy settings for a context level. Applies category and purpose to all contexts at that level.",
    inputSchema: {
      type: "object",
      properties: {
        contextlevel: {
          type: "integer",
          description: "Context level (10=system, 40=category, 50=course, 70=module).",
        },
        category: {
          type: "integer",
          minimum: 0,
          description: "Default category ID.",
        },
        purpose: {
          type: "integer",
          minimum: 0,
          description: "Default purpose ID.",
        },
        activity: {
          type: "string",
          description: "Activity module name (for module context level).",
        },
        override: {
          type: "boolean",
          description: "Override existing settings.",
        },
      },
      required: ["contextlevel"],
      additionalProperties: false,
    },
    allowedRoles: ["admin"],
    examples: { minimal: { contextlevel: 50, category: 1, purpose: 1 } },
  },
  {
    name: "tool_dataprivacy_set_context_form",
    moodleFunction: "tool_dataprivacy_set_context_form",
    description:
      "Sets privacy settings for a specific context instance. Assigns category and purpose to a course, activity, etc.",
    inputSchema: {
      type: "object",
      properties: {
        jsonformdata: {
          type: "string",
          description: "JSON-encoded form data with context settings.",
        },
      },
      required: ["jsonformdata"],
      additionalProperties: false,
    },
    allowedRoles: ["admin"],
    examples: { minimal: { jsonformdata: "{\"contextid\":50,\"categoryid\":1,\"purposeid\":1}" } },
  },
  {
    name: "tool_dataprivacy_set_contextlevel_form",
    moodleFunction: "tool_dataprivacy_set_contextlevel_form",
    description:
      "Sets privacy settings for a context level. Configures defaults for system, category, course, or module levels.",
    inputSchema: {
      type: "object",
      properties: {
        jsonformdata: {
          type: "string",
          description: "JSON-encoded form data with context level settings.",
        },
      },
      required: ["jsonformdata"],
      additionalProperties: false,
    },
    allowedRoles: ["admin"],
    examples: { minimal: { jsonformdata: "{\"contextlevel\":50,\"categoryid\":1,\"purposeid\":1}" } },
  },
  {
    name: "tool_dataprivacy_submit_selected_courses_form",
    moodleFunction: "tool_dataprivacy_submit_selected_courses_form",
    description:
      "Submits selected courses for a data export request. Specifies which courses to include in the export.",
    inputSchema: {
      type: "object",
      properties: {
        requestid: {
          type: "integer",
          minimum: 1,
          description: "Data request ID.",
        },
        jsonformdata: {
          type: "string",
          description: "JSON-encoded form data with selected course IDs.",
        },
      },
      required: ["requestid", "jsonformdata"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: { requestid: 10, jsonformdata: "{\"courseids\":[2,3,4]}" } },
  },
  {
    name: "tool_dataprivacy_tree_extra_branches",
    moodleFunction: "tool_dataprivacy_tree_extra_branches",
    description:
      "Gets extra branches for the data registry tree. Returns child contexts for navigation in the privacy UI.",
    inputSchema: {
      type: "object",
      properties: {
        contextid: {
          type: "integer",
          minimum: 1,
          description: "Parent context ID to get children for.",
        },
        element: {
          type: "string",
          description: "Element type to expand.",
        },
      },
      required: ["contextid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin"],
    examples: { minimal: { contextid: 1 } },
  },
];
