import type { ToolSpec } from "../../types.js";

export const core_group_tools: ToolSpec[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // GROUP MEMBER MANAGEMENT
  // ─────────────────────────────────────────────────────────────────────────
  {
    name: "core_group_add_group_members",
    moodleFunction: "core_group_add_group_members",
    description:
      "Adds one or more users to one or more groups. Each member entry specifies a groupid and userid pair. Returns null on success.",
    inputSchema: {
      type: "object",
      properties: {
        members: {
          type: "array",
          minItems: 1,
          description: "List of group-user membership assignments.",
          items: {
            type: "object",
            properties: {
              groupid: {
                type: "integer",
                minimum: 1,
                description: "Group ID to add the user to.",
              },
              userid: {
                type: "integer",
                minimum: 1,
                description: "User ID to add to the group.",
              },
            },
            required: ["groupid", "userid"],
            additionalProperties: false,
          },
        },
      },
      required: ["members"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { members: [{ groupid: 1, userid: 5 }] },
    },
  },
  {
    name: "core_group_delete_group_members",
    moodleFunction: "core_group_delete_group_members",
    description:
      "Removes one or more users from one or more groups. Each member entry specifies a groupid and userid pair. Returns null on success.",
    inputSchema: {
      type: "object",
      properties: {
        members: {
          type: "array",
          minItems: 1,
          description: "List of group-user memberships to remove.",
          items: {
            type: "object",
            properties: {
              groupid: {
                type: "integer",
                minimum: 1,
                description: "Group ID to remove the user from.",
              },
              userid: {
                type: "integer",
                minimum: 1,
                description: "User ID to remove from the group.",
              },
            },
            required: ["groupid", "userid"],
            additionalProperties: false,
          },
        },
      },
      required: ["members"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { members: [{ groupid: 1, userid: 5 }] },
    },
  },
  {
    name: "core_group_get_group_members",
    moodleFunction: "core_group_get_group_members",
    description:
      "Gets the list of users that are members of specific groups. Returns array of objects with groupid and userids array.",
    inputSchema: {
      type: "object",
      properties: {
        groupids: {
          type: "array",
          minItems: 1,
          description: "Array of group IDs to get members for.",
          items: {
            type: "integer",
            minimum: 1,
          },
        },
      },
      required: ["groupids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { groupids: [1, 2, 3] },
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // GROUP CRUD
  // ─────────────────────────────────────────────────────────────────────────
  {
    name: "core_group_create_groups",
    moodleFunction: "core_group_create_groups",
    description:
      "Creates one or more groups in courses. Returns array of created group objects with id, courseid, name, etc.",
    inputSchema: {
      type: "object",
      properties: {
        groups: {
          type: "array",
          minItems: 1,
          description: "List of groups to create.",
          items: {
            type: "object",
            properties: {
              courseid: {
                type: "integer",
                minimum: 1,
                description: "Course ID where the group will be created.",
              },
              name: {
                type: "string",
                minLength: 1,
                description: "Group name (must be unique within the course).",
              },
              description: {
                type: "string",
                description: "Group description (HTML allowed).",
              },
              descriptionformat: {
                type: "integer",
                enum: [0, 1, 2, 4],
                description:
                  "Description format: 0=MOODLE, 1=HTML, 2=PLAIN, 4=MARKDOWN. Default 1.",
              },
              enrolmentkey: {
                type: "string",
                description:
                  "Enrolment key for self-enrolment into the group.",
              },
              idnumber: {
                type: "string",
                description: "External ID number for the group.",
              },
              visibility: {
                type: "integer",
                enum: [0, 1, 2],
                description:
                  "Group visibility: 0=visible to all, 1=visible to members, 2=visible to members and course participants can see membership. Default 0.",
              },
              participation: {
                type: "boolean",
                description:
                  "Whether the group is used for participation (activities). Default true.",
              },
            },
            required: ["courseid", "name"],
            additionalProperties: true, // Moodle may add fields
          },
        },
      },
      required: ["groups"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { groups: [{ courseid: 2, name: "Team A" }] },
    },
  },
  {
    name: "core_group_update_groups",
    moodleFunction: "core_group_update_groups",
    description:
      "Updates one or more existing groups. Only fields provided will be updated. Returns null on success.",
    inputSchema: {
      type: "object",
      properties: {
        groups: {
          type: "array",
          minItems: 1,
          description: "List of groups to update.",
          items: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                minimum: 1,
                description: "Group ID to update.",
              },
              name: {
                type: "string",
                minLength: 1,
                description: "New group name.",
              },
              description: {
                type: "string",
                description: "New group description.",
              },
              descriptionformat: {
                type: "integer",
                enum: [0, 1, 2, 4],
                description: "Description format.",
              },
              enrolmentkey: {
                type: "string",
                description: "New enrolment key.",
              },
              idnumber: {
                type: "string",
                description: "New external ID number.",
              },
              visibility: {
                type: "integer",
                enum: [0, 1, 2],
                description: "New visibility setting.",
              },
              participation: {
                type: "boolean",
                description: "New participation setting.",
              },
            },
            required: ["id"],
            additionalProperties: true, // Moodle may add fields
          },
        },
      },
      required: ["groups"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { groups: [{ id: 1, name: "Team A - Updated" }] },
    },
  },
  {
    name: "core_group_delete_groups",
    moodleFunction: "core_group_delete_groups",
    description:
      "Deletes one or more groups by their IDs. Also removes all group memberships. Returns null on success.",
    inputSchema: {
      type: "object",
      properties: {
        groupids: {
          type: "array",
          minItems: 1,
          description: "Array of group IDs to delete.",
          items: {
            type: "integer",
            minimum: 1,
          },
        },
      },
      required: ["groupids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { groupids: [1, 2] },
    },
  },
  {
    name: "core_group_get_groups",
    moodleFunction: "core_group_get_groups",
    description:
      "Gets group details by their IDs. Returns array of group objects with id, courseid, name, description, etc.",
    inputSchema: {
      type: "object",
      properties: {
        groupids: {
          type: "array",
          minItems: 1,
          description: "Array of group IDs to retrieve.",
          items: {
            type: "integer",
            minimum: 1,
          },
        },
      },
      required: ["groupids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { groupids: [1, 2, 3] },
    },
  },
  {
    name: "core_group_get_course_groups",
    moodleFunction: "core_group_get_course_groups",
    description:
      "Gets all groups in a course. Returns array of group objects with id, courseid, name, description, idnumber, visibility.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID to get groups for.",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { courseid: 2 },
    },
  },
  {
    name: "core_group_get_course_user_groups",
    moodleFunction: "core_group_get_course_user_groups",
    description:
      "Gets the groups a user belongs to in a course, or all courses if courseid=0. Returns object with groups array and warnings.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 0,
          description:
            "Course ID to filter by. Use 0 to get groups across all courses.",
        },
        userid: {
          type: "integer",
          minimum: 0,
          description: "User ID. Use 0 for current user.",
        },
        groupingid: {
          type: "integer",
          minimum: 0,
          description: "Grouping ID to filter by. Use 0 for all groupings.",
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { courseid: 2, userid: 0 },
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // GROUPING CRUD
  // ─────────────────────────────────────────────────────────────────────────
  {
    name: "core_group_create_groupings",
    moodleFunction: "core_group_create_groupings",
    description:
      "Creates one or more groupings (collections of groups) in courses. Returns array of created grouping objects.",
    inputSchema: {
      type: "object",
      properties: {
        groupings: {
          type: "array",
          minItems: 1,
          description: "List of groupings to create.",
          items: {
            type: "object",
            properties: {
              courseid: {
                type: "integer",
                minimum: 1,
                description: "Course ID where the grouping will be created.",
              },
              name: {
                type: "string",
                minLength: 1,
                description: "Grouping name (must be unique within the course).",
              },
              description: {
                type: "string",
                description: "Grouping description.",
              },
              descriptionformat: {
                type: "integer",
                enum: [0, 1, 2, 4],
                description: "Description format. Default 1 (HTML).",
              },
              idnumber: {
                type: "string",
                description: "External ID number for the grouping.",
              },
            },
            required: ["courseid", "name"],
            additionalProperties: true,
          },
        },
      },
      required: ["groupings"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { groupings: [{ courseid: 2, name: "Project Teams" }] },
    },
  },
  {
    name: "core_group_update_groupings",
    moodleFunction: "core_group_update_groupings",
    description:
      "Updates one or more existing groupings. Only provided fields are updated. Returns null on success.",
    inputSchema: {
      type: "object",
      properties: {
        groupings: {
          type: "array",
          minItems: 1,
          description: "List of groupings to update.",
          items: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                minimum: 1,
                description: "Grouping ID to update.",
              },
              name: {
                type: "string",
                minLength: 1,
                description: "New grouping name.",
              },
              description: {
                type: "string",
                description: "New grouping description.",
              },
              descriptionformat: {
                type: "integer",
                enum: [0, 1, 2, 4],
                description: "Description format.",
              },
              idnumber: {
                type: "string",
                description: "New external ID number.",
              },
            },
            required: ["id"],
            additionalProperties: true,
          },
        },
      },
      required: ["groupings"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { groupings: [{ id: 1, name: "Project Teams - Renamed" }] },
    },
  },
  {
    name: "core_group_delete_groupings",
    moodleFunction: "core_group_delete_groupings",
    description:
      "Deletes one or more groupings by their IDs. Groups within the grouping are NOT deleted, only the grouping container. Returns null on success.",
    inputSchema: {
      type: "object",
      properties: {
        groupingids: {
          type: "array",
          minItems: 1,
          description: "Array of grouping IDs to delete.",
          items: {
            type: "integer",
            minimum: 1,
          },
        },
      },
      required: ["groupingids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { groupingids: [1, 2] },
    },
  },
  {
    name: "core_group_get_groupings",
    moodleFunction: "core_group_get_groupings",
    description:
      "Gets grouping details by their IDs. Optionally returns the groups within each grouping. Returns array of grouping objects.",
    inputSchema: {
      type: "object",
      properties: {
        groupingids: {
          type: "array",
          minItems: 1,
          description: "Array of grouping IDs to retrieve.",
          items: {
            type: "integer",
            minimum: 1,
          },
        },
        returngroups: {
          type: "boolean",
          description:
            "If true, include the groups that belong to each grouping. Default false.",
        },
      },
      required: ["groupingids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { groupingids: [1, 2] },
    },
  },
  {
    name: "core_group_get_course_groupings",
    moodleFunction: "core_group_get_course_groupings",
    description:
      "Gets all groupings in a course. Returns array of grouping objects with id, courseid, name, description, idnumber.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID to get groupings for.",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { courseid: 2 },
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // GROUPING-GROUP ASSIGNMENT
  // ─────────────────────────────────────────────────────────────────────────
  {
    name: "core_group_assign_grouping",
    moodleFunction: "core_group_assign_grouping",
    description:
      "Assigns one or more groups to a grouping. Each assignment specifies a groupingid and groupid pair. Returns null on success.",
    inputSchema: {
      type: "object",
      properties: {
        assignments: {
          type: "array",
          minItems: 1,
          description: "List of grouping-group assignments.",
          items: {
            type: "object",
            properties: {
              groupingid: {
                type: "integer",
                minimum: 1,
                description: "Grouping ID to assign the group to.",
              },
              groupid: {
                type: "integer",
                minimum: 1,
                description: "Group ID to assign to the grouping.",
              },
            },
            required: ["groupingid", "groupid"],
            additionalProperties: false,
          },
        },
      },
      required: ["assignments"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { assignments: [{ groupingid: 1, groupid: 5 }] },
    },
  },
  {
    name: "core_group_unassign_grouping",
    moodleFunction: "core_group_unassign_grouping",
    description:
      "Removes one or more groups from a grouping. Each unassignment specifies a groupingid and groupid pair. Returns null on success.",
    inputSchema: {
      type: "object",
      properties: {
        unassignments: {
          type: "array",
          minItems: 1,
          description: "List of grouping-group unassignments.",
          items: {
            type: "object",
            properties: {
              groupingid: {
                type: "integer",
                minimum: 1,
                description: "Grouping ID to remove the group from.",
              },
              groupid: {
                type: "integer",
                minimum: 1,
                description: "Group ID to remove from the grouping.",
              },
            },
            required: ["groupingid", "groupid"],
            additionalProperties: false,
          },
        },
      },
      required: ["unassignments"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { unassignments: [{ groupingid: 1, groupid: 5 }] },
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ACTIVITY-RELATED GROUP FUNCTIONS
  // ─────────────────────────────────────────────────────────────────────────
  {
    name: "core_group_get_activity_allowed_groups",
    moodleFunction: "core_group_get_activity_allowed_groups",
    description:
      "Gets the groups the current user can access for an activity. Useful for determining which groups a user can interact with in group-mode activities. Returns object with groups array and canaccessallgroups boolean.",
    inputSchema: {
      type: "object",
      properties: {
        cmid: {
          type: "integer",
          minimum: 1,
          description: "Course module ID (activity instance ID).",
        },
        userid: {
          type: "integer",
          minimum: 0,
          description: "User ID. Use 0 for current user.",
        },
      },
      required: ["cmid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { cmid: 10 },
    },
  },
  {
    name: "core_group_get_activity_groupmode",
    moodleFunction: "core_group_get_activity_groupmode",
    description:
      "Gets the group mode setting for an activity. Returns object with groupmode: 0=no groups, 1=separate groups, 2=visible groups.",
    inputSchema: {
      type: "object",
      properties: {
        cmid: {
          type: "integer",
          minimum: 1,
          description: "Course module ID (activity instance ID).",
        },
      },
      required: ["cmid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { cmid: 10 },
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // UI HELPERS
  // ─────────────────────────────────────────────────────────────────────────
  {
    name: "core_group_get_groups_for_selector",
    moodleFunction: "core_group_get_groups_for_selector",
    description:
      "Gets groups formatted for UI selectors/dropdowns with pagination support. Useful for building group selection interfaces. Returns object with groups array and hasmore boolean.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID to get groups from.",
        },
        filter: {
          type: "string",
          description: "Optional text filter to search group names.",
        },
        groupingid: {
          type: "integer",
          minimum: 0,
          description: "Grouping ID to filter by. Use 0 for all groups.",
        },
        page: {
          type: "integer",
          minimum: 0,
          description: "Page number for pagination. Default 0.",
        },
        perpage: {
          type: "integer",
          minimum: 1,
          maximum: 100,
          description: "Number of groups per page. Default 20.",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { courseid: 2 },
    },
  },
];
