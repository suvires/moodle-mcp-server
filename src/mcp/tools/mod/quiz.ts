import type { ToolSpec } from "../../types.js";

export const mod_quiz_tools: ToolSpec[] = [
  {
    name: "mod_quiz_add_random_questions",
    moodleFunction: "mod_quiz_add_random_questions",
    description:
      "Adds random questions from a question category to a quiz.",
    inputSchema: {
      type: "object",
      properties: {
        quizid: {
          type: "integer",
          minimum: 1,
          description: "Quiz instance ID",
        },
        addonpage: {
          type: "integer",
          minimum: 0,
          description: "Page number to add questions to",
        },
        categoryid: {
          type: "integer",
          minimum: 1,
          description: "Question category ID",
        },
        number: {
          type: "integer",
          minimum: 1,
          description: "Number of random questions to add",
        },
        includesubcategories: {
          type: "integer",
          enum: [0, 1],
          default: 0,
          description: "Include questions from subcategories",
        },
        tagids: {
          type: "array",
          description: "Filter by tag IDs",
          items: { type: "integer" },
        },
      },
      required: ["quizid", "addonpage", "categoryid", "number"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { quizid: 5, addonpage: 0, categoryid: 1, number: 5 },
    },
  },
  {
    name: "mod_quiz_create_grade_item_per_section",
    moodleFunction: "mod_quiz_create_grade_item_per_section",
    description:
      "Creates a grade item for a specific section of the quiz.",
    inputSchema: {
      type: "object",
      properties: {
        quizid: {
          type: "integer",
          minimum: 1,
          description: "Quiz instance ID",
        },
        sectionnum: {
          type: "integer",
          minimum: 0,
          description: "Section number",
        },
      },
      required: ["quizid", "sectionnum"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: { minimal: { quizid: 5, sectionnum: 1 } },
  },
  {
    name: "mod_quiz_create_grade_items",
    moodleFunction: "mod_quiz_create_grade_items",
    description:
      "Creates multiple grade items for a quiz based on specified sections.",
    inputSchema: {
      type: "object",
      properties: {
        quizid: {
          type: "integer",
          minimum: 1,
          description: "Quiz instance ID",
        },
      },
      required: ["quizid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: { minimal: { quizid: 5 } },
  },
  {
    name: "mod_quiz_delete_grade_items",
    moodleFunction: "mod_quiz_delete_grade_items",
    description:
      "Deletes grade items for a quiz.",
    inputSchema: {
      type: "object",
      properties: {
        quizid: {
          type: "integer",
          minimum: 1,
          description: "Quiz instance ID",
        },
        slotids: {
          type: "array",
          description: "Grade item slot IDs to delete",
          items: { type: "integer", minimum: 1 },
        },
      },
      required: ["quizid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: { minimal: { quizid: 5 } },
  },
  {
    name: "mod_quiz_delete_overrides",
    moodleFunction: "mod_quiz_delete_overrides",
    description:
      "Deletes user or group overrides for quiz settings (time limits, dates, etc.).",
    inputSchema: {
      type: "object",
      properties: {
        quizid: {
          type: "integer",
          minimum: 1,
          description: "Quiz instance ID",
        },
        overrideids: {
          type: "array",
          minItems: 1,
          description: "Array of override IDs to delete",
          items: { type: "integer", minimum: 1 },
        },
      },
      required: ["quizid", "overrideids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: { minimal: { quizid: 5, overrideids: [1, 2] } },
  },
  {
    name: "mod_quiz_get_attempt_access_information",
    moodleFunction: "mod_quiz_get_attempt_access_information",
    description:
      "Gets access rules and restrictions for starting a quiz attempt.",
    inputSchema: {
      type: "object",
      properties: {
        quizid: {
          type: "integer",
          minimum: 1,
          description: "Quiz instance ID",
        },
        attemptid: {
          type: "integer",
          default: 0,
          description: "Attempt ID (0 for new attempt)",
        },
      },
      required: ["quizid"],
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
    examples: { minimal: { quizid: 5 } },
  },
  {
    name: "mod_quiz_get_attempt_data",
    moodleFunction: "mod_quiz_get_attempt_data",
    description:
      "Gets question data for a specific page of a quiz attempt. Used during attempt.",
    inputSchema: {
      type: "object",
      properties: {
        attemptid: {
          type: "integer",
          minimum: 1,
          description: "Attempt ID",
        },
        page: {
          type: "integer",
          minimum: 0,
          description: "Page number (0-indexed)",
        },
        preflightdata: {
          type: "array",
          description: "Preflight check data (e.g., password)",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              value: { type: "string" },
            },
            additionalProperties: false,
          },
        },
      },
      required: ["attemptid", "page"],
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
      minimal: { attemptid: 10, page: 0 },
    },
  },
  {
    name: "mod_quiz_get_attempt_review",
    moodleFunction: "mod_quiz_get_attempt_review",
    description:
      "Gets review data for a completed quiz attempt including answers and feedback.",
    inputSchema: {
      type: "object",
      properties: {
        attemptid: {
          type: "integer",
          minimum: 1,
          description: "Attempt ID to review",
        },
        page: {
          type: "integer",
          minimum: -1,
          default: -1,
          description: "Page number (-1 for all pages)",
        },
      },
      required: ["attemptid"],
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
      minimal: { attemptid: 10 },
      typical: { attemptid: 10, page: -1 },
    },
  },
  {
    name: "mod_quiz_get_attempt_summary",
    moodleFunction: "mod_quiz_get_attempt_summary",
    description:
      "Gets summary of all questions in an attempt showing answer status per question.",
    inputSchema: {
      type: "object",
      properties: {
        attemptid: {
          type: "integer",
          minimum: 1,
          description: "Attempt ID",
        },
        preflightdata: {
          type: "array",
          description: "Preflight check data",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              value: { type: "string" },
            },
            additionalProperties: false,
          },
        },
      },
      required: ["attemptid"],
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
    examples: { minimal: { attemptid: 10 } },
  },
  {
    name: "mod_quiz_get_combined_review_options",
    moodleFunction: "mod_quiz_get_combined_review_options",
    description:
      "Gets what review options are available at different times (during, immediately, later).",
    inputSchema: {
      type: "object",
      properties: {
        quizid: {
          type: "integer",
          minimum: 1,
          description: "Quiz instance ID",
        },
        userid: {
          type: "integer",
          default: 0,
          description: "User ID (0 for current user)",
        },
      },
      required: ["quizid"],
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
    examples: { minimal: { quizid: 5 } },
  },
  {
    name: "mod_quiz_get_edit_grading_page_data",
    moodleFunction: "mod_quiz_get_edit_grading_page_data",
    description:
      "Gets data for the grading setup page of a quiz.",
    inputSchema: {
      type: "object",
      properties: {
        quizid: {
          type: "integer",
          minimum: 1,
          description: "Quiz instance ID",
        },
      },
      required: ["quizid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: { minimal: { quizid: 5 } },
  },
  {
    name: "mod_quiz_get_overrides",
    moodleFunction: "mod_quiz_get_overrides",
    description:
      "Gets all user and group overrides for a quiz.",
    inputSchema: {
      type: "object",
      properties: {
        quizid: {
          type: "integer",
          minimum: 1,
          description: "Quiz instance ID",
        },
      },
      required: ["quizid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: { minimal: { quizid: 5 } },
  },
  {
    name: "mod_quiz_get_quiz_access_information",
    moodleFunction: "mod_quiz_get_quiz_access_information",
    description:
      "Gets general access information for a quiz (capabilities, access rules).",
    inputSchema: {
      type: "object",
      properties: {
        quizid: {
          type: "integer",
          minimum: 1,
          description: "Quiz instance ID",
        },
      },
      required: ["quizid"],
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
    examples: { minimal: { quizid: 5 } },
  },
  {
    name: "mod_quiz_get_quiz_feedback_for_grade",
    moodleFunction: "mod_quiz_get_quiz_feedback_for_grade",
    description:
      "Gets the feedback text configured for a specific grade range.",
    inputSchema: {
      type: "object",
      properties: {
        quizid: {
          type: "integer",
          minimum: 1,
          description: "Quiz instance ID",
        },
        grade: {
          type: "number",
          minimum: 0,
          description: "Grade value to get feedback for",
        },
      },
      required: ["quizid", "grade"],
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
    examples: { minimal: { quizid: 5, grade: 75.5 } },
  },
  {
    name: "mod_quiz_get_quiz_required_qtypes",
    moodleFunction: "mod_quiz_get_quiz_required_qtypes",
    description:
      "Gets the question types required for a quiz. Useful for mobile/offline support.",
    inputSchema: {
      type: "object",
      properties: {
        quizid: {
          type: "integer",
          minimum: 1,
          description: "Quiz instance ID",
        },
      },
      required: ["quizid"],
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
    examples: { minimal: { quizid: 5 } },
  },
  {
    name: "mod_quiz_get_quizzes_by_courses",
    moodleFunction: "mod_quiz_get_quizzes_by_courses",
    description:
      "Gets quizzes in specified courses. Returns quiz settings and info.",
    inputSchema: {
      type: "object",
      properties: {
        courseids: {
          type: "array",
          description: "Array of course IDs (empty for all enrolled courses)",
          items: { type: "integer", minimum: 1 },
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
    name: "mod_quiz_get_reopen_attempt_confirmation",
    moodleFunction: "mod_quiz_get_reopen_attempt_confirmation",
    description:
      "Gets confirmation message for reopening a quiz attempt.",
    inputSchema: {
      type: "object",
      properties: {
        attemptid: {
          type: "integer",
          minimum: 1,
          description: "Attempt ID to reopen",
        },
      },
      required: ["attemptid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: { minimal: { attemptid: 10 } },
  },
  {
    name: "mod_quiz_get_user_attempts",
    moodleFunction: "mod_quiz_get_user_attempts",
    description:
      "Gets all attempts by a user for a quiz with scores and states.",
    inputSchema: {
      type: "object",
      properties: {
        quizid: {
          type: "integer",
          minimum: 1,
          description: "Quiz instance ID",
        },
        userid: {
          type: "integer",
          default: 0,
          description: "User ID (0 for current user)",
        },
        status: {
          type: "string",
          enum: ["all", "finished", "unfinished"],
          default: "finished",
          description: "Filter by attempt status",
        },
        includepreviews: {
          type: "integer",
          enum: [0, 1],
          default: 0,
          description: "Include preview attempts",
        },
      },
      required: ["quizid"],
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
      minimal: { quizid: 5 },
      typical: { quizid: 5, status: "all" },
    },
  },
  {
    name: "mod_quiz_get_user_best_grade",
    moodleFunction: "mod_quiz_get_user_best_grade",
    description:
      "Gets the best grade achieved by a user for a quiz.",
    inputSchema: {
      type: "object",
      properties: {
        quizid: {
          type: "integer",
          minimum: 1,
          description: "Quiz instance ID",
        },
        userid: {
          type: "integer",
          default: 0,
          description: "User ID (0 for current user)",
        },
      },
      required: ["quizid"],
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
    examples: { minimal: { quizid: 5 } },
  },
  {
    name: "mod_quiz_get_user_quiz_attempts",
    moodleFunction: "mod_quiz_get_user_quiz_attempts",
    description:
      "Gets quiz attempts by a user with additional attempt details.",
    inputSchema: {
      type: "object",
      properties: {
        quizid: {
          type: "integer",
          minimum: 1,
          description: "Quiz instance ID",
        },
        userid: {
          type: "integer",
          default: 0,
          description: "User ID (0 for current user)",
        },
        status: {
          type: "string",
          enum: ["all", "finished", "unfinished"],
          default: "all",
          description: "Filter by attempt status",
        },
        includepreviews: {
          type: "integer",
          enum: [0, 1],
          default: 0,
          description: "Include preview attempts",
        },
      },
      required: ["quizid"],
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
    examples: { minimal: { quizid: 5 } },
  },
  {
    name: "mod_quiz_process_attempt",
    moodleFunction: "mod_quiz_process_attempt",
    description:
      "Processes/submits answers for a quiz attempt. Can finish or save progress.",
    inputSchema: {
      type: "object",
      properties: {
        attemptid: {
          type: "integer",
          minimum: 1,
          description: "Attempt ID",
        },
        data: {
          type: "array",
          description: "Answer data for questions",
          items: {
            type: "object",
            properties: {
              name: { type: "string", description: "Question input name" },
              value: { type: "string", description: "Answer value" },
            },
            required: ["name", "value"],
            additionalProperties: false,
          },
        },
        finishattempt: {
          type: "integer",
          enum: [0, 1],
          default: 0,
          description: "1 to finish and submit, 0 to save progress",
        },
        timeup: {
          type: "integer",
          enum: [0, 1],
          default: 0,
          description: "1 if submitting due to time limit",
        },
        preflightdata: {
          type: "array",
          description: "Preflight check data",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              value: { type: "string" },
            },
            additionalProperties: false,
          },
        },
      },
      required: ["attemptid"],
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
      minimal: { attemptid: 10 },
      typical: {
        attemptid: 10,
        data: [{ name: "q1:1_answer", value: "1" }],
        finishattempt: 1,
      },
    },
  },
  {
    name: "mod_quiz_reopen_attempt",
    moodleFunction: "mod_quiz_reopen_attempt",
    description:
      "Reopens a finished quiz attempt to allow the student to continue.",
    inputSchema: {
      type: "object",
      properties: {
        attemptid: {
          type: "integer",
          minimum: 1,
          description: "Attempt ID to reopen",
        },
      },
      required: ["attemptid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: { minimal: { attemptid: 10 } },
  },
  {
    name: "mod_quiz_save_attempt",
    moodleFunction: "mod_quiz_save_attempt",
    description:
      "Saves progress on a quiz attempt without submitting. Auto-save functionality.",
    inputSchema: {
      type: "object",
      properties: {
        attemptid: {
          type: "integer",
          minimum: 1,
          description: "Attempt ID",
        },
        data: {
          type: "array",
          description: "Answer data to save",
          items: {
            type: "object",
            properties: {
              name: { type: "string", description: "Question input name" },
              value: { type: "string", description: "Answer value" },
            },
            required: ["name", "value"],
            additionalProperties: false,
          },
        },
        preflightdata: {
          type: "array",
          description: "Preflight check data",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              value: { type: "string" },
            },
            additionalProperties: false,
          },
        },
      },
      required: ["attemptid", "data"],
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
      minimal: {
        attemptid: 10,
        data: [{ name: "q1:1_answer", value: "2" }],
      },
    },
  },
  {
    name: "mod_quiz_save_overrides",
    moodleFunction: "mod_quiz_save_overrides",
    description:
      "Saves user or group overrides for quiz settings (time limits, attempts, dates).",
    inputSchema: {
      type: "object",
      properties: {
        quizid: {
          type: "integer",
          minimum: 1,
          description: "Quiz instance ID",
        },
        overrides: {
          type: "array",
          minItems: 1,
          description: "Array of override records",
          items: {
            type: "object",
            properties: {
              userid: {
                type: "integer",
                description: "User ID (for user override)",
              },
              groupid: {
                type: "integer",
                description: "Group ID (for group override)",
              },
              timeopen: {
                type: "integer",
                description: "Custom open time (Unix timestamp)",
              },
              timeclose: {
                type: "integer",
                description: "Custom close time (Unix timestamp)",
              },
              timelimit: {
                type: "integer",
                description: "Custom time limit in seconds",
              },
              attempts: {
                type: "integer",
                description: "Custom number of attempts allowed",
              },
              password: {
                type: "string",
                description: "Custom password",
              },
            },
            additionalProperties: true, // May vary by Moodle version
          },
        },
      },
      required: ["quizid", "overrides"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: {
        quizid: 5,
        overrides: [{ userid: 10, timelimit: 7200 }],
      },
    },
  },
  {
    name: "mod_quiz_set_question_version",
    moodleFunction: "mod_quiz_set_question_version",
    description:
      "Sets which version of a question to use in a quiz slot.",
    inputSchema: {
      type: "object",
      properties: {
        slotid: {
          type: "integer",
          minimum: 1,
          description: "Quiz slot ID",
        },
        newversion: {
          type: "integer",
          minimum: 0,
          description: "Question version number (0 for always latest)",
        },
      },
      required: ["slotid", "newversion"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: { minimal: { slotid: 15, newversion: 2 } },
  },
  {
    name: "mod_quiz_start_attempt",
    moodleFunction: "mod_quiz_start_attempt",
    description:
      "Starts a new quiz attempt for the current user.",
    inputSchema: {
      type: "object",
      properties: {
        quizid: {
          type: "integer",
          minimum: 1,
          description: "Quiz instance ID",
        },
        preflightdata: {
          type: "array",
          description: "Preflight check data (e.g., quiz password)",
          items: {
            type: "object",
            properties: {
              name: { type: "string", description: "Check name (e.g., 'quizpassword')" },
              value: { type: "string", description: "Check value" },
            },
            required: ["name", "value"],
            additionalProperties: false,
          },
        },
        forcenew: {
          type: "integer",
          enum: [0, 1],
          default: 0,
          description: "Force start new attempt (abandon in-progress)",
        },
      },
      required: ["quizid"],
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
      minimal: { quizid: 5 },
      typical: {
        quizid: 5,
        preflightdata: [{ name: "quizpassword", value: "secret123" }],
      },
    },
  },
  {
    name: "mod_quiz_update_filter_condition",
    moodleFunction: "mod_quiz_update_filter_condition",
    description:
      "Updates filter conditions for random question selection in a quiz slot.",
    inputSchema: {
      type: "object",
      properties: {
        slotid: {
          type: "integer",
          minimum: 1,
          description: "Quiz slot ID",
        },
        filtercondition: {
          type: "string",
          description: "JSON-encoded filter condition",
        },
      },
      required: ["slotid", "filtercondition"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: {
        slotid: 15,
        filtercondition: '{"category":"1","includesubcategories":true}',
      },
    },
  },
  {
    name: "mod_quiz_update_grade_items",
    moodleFunction: "mod_quiz_update_grade_items",
    description:
      "Updates grade item settings for quiz sections.",
    inputSchema: {
      type: "object",
      properties: {
        quizid: {
          type: "integer",
          minimum: 1,
          description: "Quiz instance ID",
        },
        gradeitems: {
          type: "array",
          description: "Grade item data to update",
          items: {
            type: "object",
            additionalProperties: true,
          },
        },
      },
      required: ["quizid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: { minimal: { quizid: 5 } },
  },
  {
    name: "mod_quiz_update_slots",
    moodleFunction: "mod_quiz_update_slots",
    description:
      "Updates quiz question slot settings (marks, page, etc.).",
    inputSchema: {
      type: "object",
      properties: {
        quizid: {
          type: "integer",
          minimum: 1,
          description: "Quiz instance ID",
        },
        slots: {
          type: "array",
          minItems: 1,
          description: "Slot data to update",
          items: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                minimum: 1,
                description: "Slot ID",
              },
              maxmark: {
                type: "number",
                minimum: 0,
                description: "Maximum mark for the question",
              },
              page: {
                type: "integer",
                minimum: 1,
                description: "Page number",
              },
              slot: {
                type: "integer",
                minimum: 1,
                description: "Slot position",
              },
              requireprevious: {
                type: "integer",
                enum: [0, 1],
                description: "Require previous questions",
              },
            },
            required: ["id"],
            additionalProperties: true,
          },
        },
      },
      required: ["quizid", "slots"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { quizid: 5, slots: [{ id: 15, maxmark: 10 }] },
    },
  },
  {
    name: "mod_quiz_view_attempt",
    moodleFunction: "mod_quiz_view_attempt",
    description:
      "Triggers the attempt viewed event. Use when displaying attempt questions.",
    inputSchema: {
      type: "object",
      properties: {
        attemptid: {
          type: "integer",
          minimum: 1,
          description: "Attempt ID being viewed",
        },
        page: {
          type: "integer",
          minimum: 0,
          description: "Page number being viewed",
        },
        preflightdata: {
          type: "array",
          description: "Preflight check data",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              value: { type: "string" },
            },
            additionalProperties: false,
          },
        },
      },
      required: ["attemptid", "page"],
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
    examples: { minimal: { attemptid: 10, page: 0 } },
  },
  {
    name: "mod_quiz_view_attempt_review",
    moodleFunction: "mod_quiz_view_attempt_review",
    description:
      "Triggers the attempt review viewed event. Use when reviewing completed attempt.",
    inputSchema: {
      type: "object",
      properties: {
        attemptid: {
          type: "integer",
          minimum: 1,
          description: "Attempt ID being reviewed",
        },
      },
      required: ["attemptid"],
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
    examples: { minimal: { attemptid: 10 } },
  },
  {
    name: "mod_quiz_view_attempt_summary",
    moodleFunction: "mod_quiz_view_attempt_summary",
    description:
      "Triggers the attempt summary viewed event. Use when showing submission page.",
    inputSchema: {
      type: "object",
      properties: {
        attemptid: {
          type: "integer",
          minimum: 1,
          description: "Attempt ID",
        },
        preflightdata: {
          type: "array",
          description: "Preflight check data",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              value: { type: "string" },
            },
            additionalProperties: false,
          },
        },
      },
      required: ["attemptid"],
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
    examples: { minimal: { attemptid: 10 } },
  },
  {
    name: "mod_quiz_view_quiz",
    moodleFunction: "mod_quiz_view_quiz",
    description:
      "Triggers the quiz viewed event. Use when navigating to a quiz.",
    inputSchema: {
      type: "object",
      properties: {
        quizid: {
          type: "integer",
          minimum: 1,
          description: "Quiz instance ID",
        },
      },
      required: ["quizid"],
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
    examples: { minimal: { quizid: 5 } },
  },
];
