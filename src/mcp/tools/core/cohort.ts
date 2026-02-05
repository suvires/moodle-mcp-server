import type { ToolSpec } from "../../types.js";

export const core_cohort_tools: ToolSpec[] = [
  {
    name: "core_cohort_add_cohort_members",
    moodleFunction: "core_cohort_add_cohort_members",
    description:
      "Adds users to cohorts. Each member entry specifies a cohortid and userid pair. Returns warnings if any.",
    inputSchema: {
      type: "object",
      properties: {
        members: {
          type: "array",
          minItems: 1,
          description: "List of cohort-user membership assignments.",
          items: {
            type: "object",
            properties: {
              cohorttype: {
                type: "object",
                description: "Cohort identifier.",
                properties: {
                  type: {
                    type: "string",
                    enum: ["id", "idnumber"],
                    description: "Cohort identifier type.",
                  },
                  value: {
                    type: "string",
                    description: "Cohort ID or idnumber value.",
                  },
                },
                required: ["type", "value"],
                additionalProperties: false,
              },
              usertype: {
                type: "object",
                description: "User identifier.",
                properties: {
                  type: {
                    type: "string",
                    enum: ["id", "username", "email", "idnumber"],
                    description: "User identifier type.",
                  },
                  value: {
                    type: "string",
                    description: "User ID, username, email, or idnumber value.",
                  },
                },
                required: ["type", "value"],
                additionalProperties: false,
              },
            },
            required: ["cohorttype", "usertype"],
            additionalProperties: false,
          },
        },
      },
      required: ["members"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: {
        members: [
          {
            cohorttype: { type: "id", value: "1" },
            usertype: { type: "id", value: "5" },
          },
        ],
      },
    },
  },
  {
    name: "core_cohort_create_cohorts",
    moodleFunction: "core_cohort_create_cohorts",
    description:
      "Creates one or more cohorts. Returns array of created cohort objects with their IDs.",
    inputSchema: {
      type: "object",
      properties: {
        cohorts: {
          type: "array",
          minItems: 1,
          description: "List of cohorts to create.",
          items: {
            type: "object",
            properties: {
              categorytype: {
                type: "object",
                description: "Category where cohort will be created.",
                properties: {
                  type: {
                    type: "string",
                    enum: ["id", "idnumber", "system"],
                    description: "Category identifier type. Use 'system' for system-level cohort.",
                  },
                  value: {
                    type: "string",
                    description: "Category ID or idnumber. Use empty for system type.",
                  },
                },
                required: ["type", "value"],
                additionalProperties: false,
              },
              name: {
                type: "string",
                minLength: 1,
                description: "Cohort name.",
              },
              idnumber: {
                type: "string",
                description: "External ID number for the cohort.",
              },
              description: {
                type: "string",
                description: "Cohort description.",
              },
              descriptionformat: {
                type: "integer",
                enum: [0, 1, 2, 4],
                description: "Description format. Default 1 (HTML).",
              },
              visible: {
                type: "boolean",
                description: "Cohort visibility. Default true.",
              },
              theme: {
                type: "string",
                description: "Theme to force for cohort members.",
              },
            },
            required: ["categorytype", "name"],
            additionalProperties: true,
          },
        },
      },
      required: ["cohorts"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: {
        cohorts: [
          {
            categorytype: { type: "system", value: "" },
            name: "2024 Graduates",
          },
        ],
      },
    },
  },
  {
    name: "core_cohort_delete_cohort_members",
    moodleFunction: "core_cohort_delete_cohort_members",
    description:
      "Removes users from cohorts. Each member entry specifies a cohortid and userid pair.",
    inputSchema: {
      type: "object",
      properties: {
        members: {
          type: "array",
          minItems: 1,
          description: "List of cohort-user memberships to remove.",
          items: {
            type: "object",
            properties: {
              cohortid: {
                type: "integer",
                minimum: 1,
                description: "Cohort ID.",
              },
              userid: {
                type: "integer",
                minimum: 1,
                description: "User ID to remove.",
              },
            },
            required: ["cohortid", "userid"],
            additionalProperties: false,
          },
        },
      },
      required: ["members"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { members: [{ cohortid: 1, userid: 5 }] },
    },
  },
  {
    name: "core_cohort_delete_cohorts",
    moodleFunction: "core_cohort_delete_cohorts",
    description:
      "Deletes cohorts by their IDs. Also removes all cohort memberships.",
    inputSchema: {
      type: "object",
      properties: {
        cohortids: {
          type: "array",
          minItems: 1,
          description: "Array of cohort IDs to delete.",
          items: {
            type: "integer",
            minimum: 1,
          },
        },
      },
      required: ["cohortids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { cohortids: [1, 2] },
    },
  },
  {
    name: "core_cohort_get_cohort_members",
    moodleFunction: "core_cohort_get_cohort_members",
    description:
      "Gets the list of users who are members of specified cohorts. Returns array of objects with cohortid and userids.",
    inputSchema: {
      type: "object",
      properties: {
        cohortids: {
          type: "array",
          minItems: 1,
          description: "Array of cohort IDs to get members for.",
          items: {
            type: "integer",
            minimum: 1,
          },
        },
      },
      required: ["cohortids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { cohortids: [1, 2, 3] },
    },
  },
  {
    name: "core_cohort_get_cohorts",
    moodleFunction: "core_cohort_get_cohorts",
    description:
      "Gets cohort details by their IDs. Returns array of cohort objects with id, name, description, etc.",
    inputSchema: {
      type: "object",
      properties: {
        cohortids: {
          type: "array",
          minItems: 1,
          description: "Array of cohort IDs to retrieve.",
          items: {
            type: "integer",
            minimum: 1,
          },
        },
      },
      required: ["cohortids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { cohortids: [1, 2] },
    },
  },
  {
    name: "core_cohort_search_cohorts",
    moodleFunction: "core_cohort_search_cohorts",
    description:
      "Searches for cohorts by name or idnumber. Returns matching cohort objects with pagination.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          minLength: 1,
          description: "Search query to match cohort name or idnumber.",
        },
        context: {
          type: "object",
          description: "Context to search within.",
          properties: {
            contextid: {
              type: "integer",
              minimum: 1,
              description: "Context ID to search within.",
            },
            contextlevel: {
              type: "string",
              enum: ["system", "coursecat"],
              description: "Context level.",
            },
            instanceid: {
              type: "integer",
              description: "Instance ID for the context level.",
            },
          },
          additionalProperties: false,
        },
        includes: {
          type: "string",
          enum: ["all", "parents", "self"],
          description: "Which contexts to include. Default 'parents'.",
        },
        limitfrom: {
          type: "integer",
          minimum: 0,
          description: "Offset for pagination. Default 0.",
        },
        limitnum: {
          type: "integer",
          minimum: 1,
          description: "Maximum results to return. Default 25.",
        },
      },
      required: ["query", "context"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: {
        query: "2024",
        context: { contextlevel: "system", instanceid: 0 },
      },
    },
  },
  {
    name: "core_cohort_update_cohorts",
    moodleFunction: "core_cohort_update_cohorts",
    description:
      "Updates one or more existing cohorts. Only provided fields are updated.",
    inputSchema: {
      type: "object",
      properties: {
        cohorts: {
          type: "array",
          minItems: 1,
          description: "List of cohorts to update.",
          items: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                minimum: 1,
                description: "Cohort ID to update.",
              },
              categorytype: {
                type: "object",
                description: "New category for the cohort.",
                properties: {
                  type: {
                    type: "string",
                    enum: ["id", "idnumber", "system"],
                  },
                  value: { type: "string" },
                },
                additionalProperties: false,
              },
              name: {
                type: "string",
                minLength: 1,
                description: "New cohort name.",
              },
              idnumber: {
                type: "string",
                description: "New external ID number.",
              },
              description: {
                type: "string",
                description: "New description.",
              },
              descriptionformat: {
                type: "integer",
                enum: [0, 1, 2, 4],
              },
              visible: {
                type: "boolean",
                description: "New visibility setting.",
              },
            },
            required: ["id"],
            additionalProperties: true,
          },
        },
      },
      required: ["cohorts"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { cohorts: [{ id: 1, name: "2024 Graduates - Updated" }] },
    },
  },
];
