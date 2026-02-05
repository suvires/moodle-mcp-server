import type { ToolSpec } from "../../types.js";

export const mod_assign_tools: ToolSpec[] = [
  {
    name: "mod_assign_copy_previous_attempt",
    moodleFunction: "mod_assign_copy_previous_attempt",
    description:
      "Copies a student's previous submission attempt to start a new attempt. Used when assignment allows multiple attempts.",
    inputSchema: {
      type: "object",
      properties: {
        assignmentid: {
          type: "integer",
          minimum: 1,
          description: "Assignment instance ID",
        },
      },
      required: ["assignmentid"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: { minimal: { assignmentid: 5 } },
  },
  {
    name: "mod_assign_get_assignments",
    moodleFunction: "mod_assign_get_assignments",
    description:
      "Gets assignments in specified courses. Returns assignment details including settings, intro, dates.",
    inputSchema: {
      type: "object",
      properties: {
        courseids: {
          type: "array",
          description: "Array of course IDs (empty for all enrolled courses)",
          items: { type: "integer", minimum: 1 },
        },
        capabilities: {
          type: "array",
          description: "Filter by required capabilities",
          items: { type: "string" },
        },
        includenotenrolledcourses: {
          type: "integer",
          enum: [0, 1],
          default: 0,
          description: "Include courses user is not enrolled in",
        },
      },
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: {
      minimal: {},
      typical: { courseids: [2, 3] },
    },
  },
  {
    name: "mod_assign_get_grades",
    moodleFunction: "mod_assign_get_grades",
    description:
      "Gets grades for assignments. Teachers get all students, students get their own grades.",
    inputSchema: {
      type: "object",
      properties: {
        assignmentids: {
          type: "array",
          minItems: 1,
          description: "Array of assignment IDs",
          items: { type: "integer", minimum: 1 },
        },
        since: {
          type: "integer",
          default: 0,
          description: "Unix timestamp to get grades modified since (0 for all)",
        },
      },
      required: ["assignmentids"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: {
      minimal: { assignmentids: [5] },
      typical: { assignmentids: [5, 6], since: 0 },
    },
  },
  {
    name: "mod_assign_get_participant",
    moodleFunction: "mod_assign_get_participant",
    description:
      "Gets detailed information about a single participant in an assignment.",
    inputSchema: {
      type: "object",
      properties: {
        assignid: {
          type: "integer",
          minimum: 1,
          description: "Assignment instance ID",
        },
        userid: {
          type: "integer",
          minimum: 1,
          description: "User ID to get participant info for",
        },
        embeduser: {
          type: "integer",
          enum: [0, 1],
          default: 0,
          description: "Include full user object in response",
        },
      },
      required: ["assignid", "userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { assignid: 5, userid: 10 },
      typical: { assignid: 5, userid: 10, embeduser: 1 },
    },
  },
  {
    name: "mod_assign_get_submission_status",
    moodleFunction: "mod_assign_get_submission_status",
    description:
      "Gets the complete submission status for a user including grade, feedback, and submission details.",
    inputSchema: {
      type: "object",
      properties: {
        assignid: {
          type: "integer",
          minimum: 1,
          description: "Assignment instance ID",
        },
        userid: {
          type: "integer",
          default: 0,
          description: "User ID (0 for current user)",
        },
        groupid: {
          type: "integer",
          default: 0,
          description: "Group ID for group assignments (0 for user's group)",
        },
      },
      required: ["assignid"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: {
      minimal: { assignid: 5 },
      typical: { assignid: 5, userid: 10 },
    },
  },
  {
    name: "mod_assign_get_submissions",
    moodleFunction: "mod_assign_get_submissions",
    description:
      "Gets submissions for assignments. Returns submission data including status, timestamps, plugins.",
    inputSchema: {
      type: "object",
      properties: {
        assignmentids: {
          type: "array",
          minItems: 1,
          description: "Array of assignment IDs",
          items: { type: "integer", minimum: 1 },
        },
        status: {
          type: "string",
          enum: ["new", "submitted", "draft"],
          description: "Filter by submission status",
        },
        since: {
          type: "integer",
          default: 0,
          description: "Unix timestamp to get submissions modified since",
        },
        before: {
          type: "integer",
          default: 0,
          description: "Unix timestamp to get submissions modified before",
        },
      },
      required: ["assignmentids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { assignmentids: [5] },
      typical: { assignmentids: [5], status: "submitted" },
    },
  },
  {
    name: "mod_assign_get_user_flags",
    moodleFunction: "mod_assign_get_user_flags",
    description:
      "Gets user flags (extension dates, workflow state, allocated marker) for assignments.",
    inputSchema: {
      type: "object",
      properties: {
        assignmentids: {
          type: "array",
          minItems: 1,
          description: "Array of assignment IDs",
          items: { type: "integer", minimum: 1 },
        },
      },
      required: ["assignmentids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: { minimal: { assignmentids: [5] } },
  },
  {
    name: "mod_assign_get_user_mappings",
    moodleFunction: "mod_assign_get_user_mappings",
    description:
      "Gets anonymous submission ID mappings for blind marking assignments.",
    inputSchema: {
      type: "object",
      properties: {
        assignmentids: {
          type: "array",
          minItems: 1,
          description: "Array of assignment IDs",
          items: { type: "integer", minimum: 1 },
        },
      },
      required: ["assignmentids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: { minimal: { assignmentids: [5] } },
  },
  {
    name: "mod_assign_list_participants",
    moodleFunction: "mod_assign_list_participants",
    description:
      "Lists all participants (students) who can submit to an assignment with their submission status.",
    inputSchema: {
      type: "object",
      properties: {
        assignid: {
          type: "integer",
          minimum: 1,
          description: "Assignment instance ID",
        },
        groupid: {
          type: "integer",
          default: 0,
          description: "Group ID to filter by (0 for all)",
        },
        filter: {
          type: "string",
          default: "",
          description: "Search filter string",
        },
        skip: {
          type: "integer",
          minimum: 0,
          default: 0,
          description: "Number of records to skip for pagination",
        },
        limit: {
          type: "integer",
          minimum: 0,
          default: 0,
          description: "Maximum records to return (0 for all)",
        },
        onlyids: {
          type: "integer",
          enum: [0, 1],
          default: 0,
          description: "Only return user IDs",
        },
        includeenrolments: {
          type: "integer",
          enum: [0, 1],
          default: 1,
          description: "Include enrolment info",
        },
        tablesort: {
          type: "integer",
          enum: [0, 1],
          default: 0,
          description: "Apply table sorting",
        },
      },
      required: ["assignid", "groupid", "filter"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { assignid: 5, groupid: 0, filter: "" },
      typical: { assignid: 5, groupid: 0, filter: "", limit: 50 },
    },
  },
  {
    name: "mod_assign_lock_submissions",
    moodleFunction: "mod_assign_lock_submissions",
    description:
      "Locks submissions for specified users, preventing further changes.",
    inputSchema: {
      type: "object",
      properties: {
        assignmentid: {
          type: "integer",
          minimum: 1,
          description: "Assignment instance ID",
        },
        userids: {
          type: "array",
          minItems: 1,
          description: "Array of user IDs to lock",
          items: { type: "integer", minimum: 1 },
        },
      },
      required: ["assignmentid", "userids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: { minimal: { assignmentid: 5, userids: [10, 11, 12] } },
  },
  {
    name: "mod_assign_remove_submission",
    moodleFunction: "mod_assign_remove_submission",
    description:
      "Removes/deletes a user's submission. Teacher can remove any, student can remove their own if allowed.",
    inputSchema: {
      type: "object",
      properties: {
        assignid: {
          type: "integer",
          minimum: 1,
          description: "Assignment instance ID",
        },
        userid: {
          type: "integer",
          default: 0,
          description: "User ID (0 for current user)",
        },
      },
      required: ["assignid"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
    ],
    examples: {
      minimal: { assignid: 5 },
      typical: { assignid: 5, userid: 10 },
    },
  },
  {
    name: "mod_assign_reveal_identities",
    moodleFunction: "mod_assign_reveal_identities",
    description:
      "Reveals student identities for blind marking assignments. Irreversible action.",
    inputSchema: {
      type: "object",
      properties: {
        assignmentid: {
          type: "integer",
          minimum: 1,
          description: "Assignment instance ID",
        },
      },
      required: ["assignmentid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: { minimal: { assignmentid: 5 } },
  },
  {
    name: "mod_assign_revert_submissions_to_draft",
    moodleFunction: "mod_assign_revert_submissions_to_draft",
    description:
      "Reverts submitted assignments back to draft status, allowing students to make changes.",
    inputSchema: {
      type: "object",
      properties: {
        assignmentid: {
          type: "integer",
          minimum: 1,
          description: "Assignment instance ID",
        },
        userids: {
          type: "array",
          minItems: 1,
          description: "Array of user IDs to revert",
          items: { type: "integer", minimum: 1 },
        },
      },
      required: ["assignmentid", "userids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: { minimal: { assignmentid: 5, userids: [10] } },
  },
  {
    name: "mod_assign_save_grade",
    moodleFunction: "mod_assign_save_grade",
    description:
      "Saves a grade for a single student's assignment submission. Includes feedback and advanced grading.",
    inputSchema: {
      type: "object",
      properties: {
        assignmentid: {
          type: "integer",
          minimum: 1,
          description: "Assignment instance ID",
        },
        userid: {
          type: "integer",
          minimum: 1,
          description: "User ID to grade",
        },
        grade: {
          type: "number",
          description: "Grade value (scale depends on assignment settings)",
        },
        attemptnumber: {
          type: "integer",
          minimum: -1,
          default: -1,
          description: "Attempt number to grade (-1 for latest)",
        },
        addattempt: {
          type: "integer",
          enum: [0, 1],
          default: 0,
          description: "Allow another attempt after grading",
        },
        workflowstate: {
          type: "string",
          enum: ["notmarked", "inmarking", "readyforreview", "inreview", "readyforrelease", "released"],
          description: "Marking workflow state",
        },
        applytoall: {
          type: "integer",
          enum: [0, 1],
          default: 0,
          description: "Apply grade to all group members",
        },
        plugindata: {
          type: "object",
          description: "Feedback plugin data",
          additionalProperties: true, // Plugin-specific structure
        },
        advancedgradingdata: {
          type: "object",
          description: "Advanced grading (rubric/guide) data",
          additionalProperties: true, // Grading method specific
        },
      },
      required: ["assignmentid", "userid", "grade"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { assignmentid: 5, userid: 10, grade: 85 },
      typical: {
        assignmentid: 5,
        userid: 10,
        grade: 85,
        attemptnumber: -1,
        workflowstate: "released",
      },
    },
  },
  {
    name: "mod_assign_save_grades",
    moodleFunction: "mod_assign_save_grades",
    description:
      "Saves grades for multiple students at once. Bulk grading operation.",
    inputSchema: {
      type: "object",
      properties: {
        assignmentid: {
          type: "integer",
          minimum: 1,
          description: "Assignment instance ID",
        },
        applytoall: {
          type: "integer",
          enum: [0, 1],
          default: 0,
          description: "Apply to all group members",
        },
        grades: {
          type: "array",
          minItems: 1,
          description: "Array of grade records",
          items: {
            type: "object",
            properties: {
              userid: {
                type: "integer",
                minimum: 1,
                description: "User ID",
              },
              grade: {
                type: "number",
                description: "Grade value",
              },
              attemptnumber: {
                type: "integer",
                minimum: -1,
                default: -1,
                description: "Attempt number (-1 for latest)",
              },
              addattempt: {
                type: "integer",
                enum: [0, 1],
                default: 0,
                description: "Allow another attempt",
              },
              workflowstate: {
                type: "string",
                description: "Workflow state",
              },
              plugindata: {
                type: "object",
                additionalProperties: true,
              },
              advancedgradingdata: {
                type: "object",
                additionalProperties: true,
              },
            },
            required: ["userid", "grade"],
            additionalProperties: true, // May have additional plugin fields
          },
        },
      },
      required: ["assignmentid", "grades"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: {
        assignmentid: 5,
        grades: [
          { userid: 10, grade: 85 },
          { userid: 11, grade: 90 },
        ],
      },
    },
  },
  {
    name: "mod_assign_save_submission",
    moodleFunction: "mod_assign_save_submission",
    description:
      "Saves a submission for an assignment. Used by students to save their work.",
    inputSchema: {
      type: "object",
      properties: {
        assignmentid: {
          type: "integer",
          minimum: 1,
          description: "Assignment instance ID",
        },
        plugindata: {
          type: "object",
          description:
            "Submission plugin data (e.g., onlinetext_editor, files_filemanager)",
          properties: {
            onlinetext_editor: {
              type: "object",
              description: "Online text submission",
              properties: {
                text: { type: "string", description: "Submission text content" },
                format: {
                  type: "integer",
                  enum: [0, 1, 2, 4],
                  default: 1,
                  description: "Text format: 0=MOODLE, 1=HTML, 2=PLAIN, 4=MARKDOWN",
                },
                itemid: {
                  type: "integer",
                  description: "Draft area item ID for embedded files",
                },
              },
            },
            files_filemanager: {
              type: "integer",
              description: "Draft area item ID for file submissions",
            },
          },
          additionalProperties: true, // Other plugins may add fields
        },
      },
      required: ["assignmentid", "plugindata"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
    ],
    examples: {
      minimal: {
        assignmentid: 5,
        plugindata: {
          onlinetext_editor: {
            text: "<p>My submission</p>",
            format: 1,
          },
        },
      },
    },
  },
  {
    name: "mod_assign_save_user_extensions",
    moodleFunction: "mod_assign_save_user_extensions",
    description:
      "Grants deadline extensions to users for an assignment.",
    inputSchema: {
      type: "object",
      properties: {
        assignmentid: {
          type: "integer",
          minimum: 1,
          description: "Assignment instance ID",
        },
        userids: {
          type: "array",
          minItems: 1,
          description: "Array of user IDs to grant extensions",
          items: { type: "integer", minimum: 1 },
        },
        dates: {
          type: "array",
          minItems: 1,
          description: "Array of extension dates (Unix timestamps, matching userids order)",
          items: { type: "integer" },
        },
      },
      required: ["assignmentid", "userids", "dates"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { assignmentid: 5, userids: [10], dates: [1735689600] },
    },
  },
  {
    name: "mod_assign_set_user_flags",
    moodleFunction: "mod_assign_set_user_flags",
    description:
      "Sets user flags for assignment (allocated marker, workflow state, extension).",
    inputSchema: {
      type: "object",
      properties: {
        assignmentid: {
          type: "integer",
          minimum: 1,
          description: "Assignment instance ID",
        },
        userflags: {
          type: "array",
          minItems: 1,
          description: "Array of user flag records",
          items: {
            type: "object",
            properties: {
              userid: {
                type: "integer",
                minimum: 1,
                description: "User ID",
              },
              locked: {
                type: "integer",
                enum: [0, 1],
                description: "Lock the submission",
              },
              mailed: {
                type: "integer",
                enum: [0, 1],
                description: "Mail sent flag",
              },
              extensionduedate: {
                type: "integer",
                description: "Extension due date (Unix timestamp)",
              },
              workflowstate: {
                type: "string",
                description: "Marking workflow state",
              },
              allocatedmarker: {
                type: "integer",
                description: "User ID of allocated marker",
              },
            },
            required: ["userid"],
            additionalProperties: false,
          },
        },
      },
      required: ["assignmentid", "userflags"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: {
        assignmentid: 5,
        userflags: [{ userid: 10, workflowstate: "inmarking" }],
      },
    },
  },
  {
    name: "mod_assign_start_submission",
    moodleFunction: "mod_assign_start_submission",
    description:
      "Starts a timed submission attempt. Used when assignment has time limits.",
    inputSchema: {
      type: "object",
      properties: {
        assignid: {
          type: "integer",
          minimum: 1,
          description: "Assignment instance ID",
        },
      },
      required: ["assignid"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
    ],
    examples: { minimal: { assignid: 5 } },
  },
  {
    name: "mod_assign_submit_for_grading",
    moodleFunction: "mod_assign_submit_for_grading",
    description:
      "Submits an assignment for grading. Changes status from draft to submitted.",
    inputSchema: {
      type: "object",
      properties: {
        assignmentid: {
          type: "integer",
          minimum: 1,
          description: "Assignment instance ID",
        },
        acceptsubmissionstatement: {
          type: "integer",
          enum: [0, 1],
          default: 0,
          description: "Accept the submission statement (if required)",
        },
      },
      required: ["assignmentid", "acceptsubmissionstatement"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
    ],
    examples: { minimal: { assignmentid: 5, acceptsubmissionstatement: 1 } },
  },
  {
    name: "mod_assign_submit_grading_form",
    moodleFunction: "mod_assign_submit_grading_form",
    description:
      "Submits the grading form with JSON-encoded data. Alternative to save_grade.",
    inputSchema: {
      type: "object",
      properties: {
        assignmentid: {
          type: "integer",
          minimum: 1,
          description: "Assignment instance ID",
        },
        userid: {
          type: "integer",
          minimum: 1,
          description: "User ID being graded",
        },
        jsonformdata: {
          type: "string",
          description: "URL-encoded form data as JSON string",
        },
      },
      required: ["assignmentid", "userid", "jsonformdata"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: {
        assignmentid: 5,
        userid: 10,
        jsonformdata: '{"grade":"85"}',
      },
    },
  },
  {
    name: "mod_assign_unlock_submissions",
    moodleFunction: "mod_assign_unlock_submissions",
    description:
      "Unlocks submissions for specified users, allowing them to make changes.",
    inputSchema: {
      type: "object",
      properties: {
        assignmentid: {
          type: "integer",
          minimum: 1,
          description: "Assignment instance ID",
        },
        userids: {
          type: "array",
          minItems: 1,
          description: "Array of user IDs to unlock",
          items: { type: "integer", minimum: 1 },
        },
      },
      required: ["assignmentid", "userids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: { minimal: { assignmentid: 5, userids: [10, 11] } },
  },
  {
    name: "mod_assign_view_assign",
    moodleFunction: "mod_assign_view_assign",
    description:
      "Triggers the assignment viewed event. Use when navigating to an assignment.",
    inputSchema: {
      type: "object",
      properties: {
        assignid: {
          type: "integer",
          minimum: 1,
          description: "Assignment instance ID",
        },
      },
      required: ["assignid"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: { minimal: { assignid: 5 } },
  },
  {
    name: "mod_assign_view_grading_table",
    moodleFunction: "mod_assign_view_grading_table",
    description:
      "Triggers the grading table viewed event. Use when viewing the grading interface.",
    inputSchema: {
      type: "object",
      properties: {
        assignid: {
          type: "integer",
          minimum: 1,
          description: "Assignment instance ID",
        },
      },
      required: ["assignid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: { minimal: { assignid: 5 } },
  },
  {
    name: "mod_assign_view_submission_status",
    moodleFunction: "mod_assign_view_submission_status",
    description:
      "Triggers the submission status viewed event. Use when viewing submission details.",
    inputSchema: {
      type: "object",
      properties: {
        assignid: {
          type: "integer",
          minimum: 1,
          description: "Assignment instance ID",
        },
      },
      required: ["assignid"],
      additionalProperties: false,
    },
    allowedRoles: [
      "admin",
      "manager",
      "editingteacher",
      "teacher",
      "student",
      "user",
    ],
    examples: { minimal: { assignid: 5 } },
  },
];
