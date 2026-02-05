import type { ToolSpec } from "../../types.js";

export const core_grades_tools: ToolSpec[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // GRADE CATEGORY MANAGEMENT
  // ─────────────────────────────────────────────────────────────────────────
  {
    name: "core_grades_create_gradecategories",
    moodleFunction: "core_grades_create_gradecategories",
    description:
      "Creates grade categories in a course's gradebook. Grade categories organize grade items into hierarchical groups. Returns array of created category IDs.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID where grade categories will be created.",
        },
        categories: {
          type: "array",
          minItems: 1,
          description: "List of grade categories to create.",
          items: {
            type: "object",
            properties: {
              fullname: {
                type: "string",
                minLength: 1,
                description: "Category name displayed in the gradebook.",
              },
              options: {
                type: "object",
                description: "Additional category options.",
                properties: {
                  aggregation: {
                    type: "integer",
                    description:
                      "Aggregation method: 0=mean, 1=median, 2=min, 4=max, 6=mode, 10=weighted mean, 11=simple weighted mean, 12=mean (drop lowest), 13=natural.",
                  },
                  aggregateonlygraded: {
                    type: "boolean",
                    description:
                      "If true, only include graded items in aggregation. Default true.",
                  },
                  aggregateoutcomes: {
                    type: "boolean",
                    description:
                      "If true, include outcomes in aggregation. Default false.",
                  },
                  droplow: {
                    type: "integer",
                    minimum: 0,
                    description: "Number of lowest grades to drop from aggregation.",
                  },
                  keephigh: {
                    type: "integer",
                    minimum: 0,
                    description:
                      "Number of highest grades to keep in aggregation (0=all).",
                  },
                  hidden: {
                    type: "boolean",
                    description: "If true, category is hidden from students.",
                  },
                  itemname: {
                    type: "string",
                    description: "Name of the category total item.",
                  },
                  iteminfo: {
                    type: "string",
                    description: "Information about the category total item.",
                  },
                  idnumber: {
                    type: "string",
                    description: "External ID number for the category.",
                  },
                  gradetype: {
                    type: "integer",
                    description:
                      "Grade type for category total: 0=none, 1=value, 2=scale, 3=text.",
                  },
                  grademax: {
                    type: "number",
                    description: "Maximum grade for category total.",
                  },
                  grademin: {
                    type: "number",
                    description: "Minimum grade for category total.",
                  },
                  gradepass: {
                    type: "number",
                    description: "Passing grade threshold for category total.",
                  },
                  parentcategoryid: {
                    type: "integer",
                    description:
                      "Parent category ID. If not specified, uses course root category.",
                  },
                  parentcategoryidnumber: {
                    type: "string",
                    description:
                      "Parent category idnumber (alternative to parentcategoryid).",
                  },
                },
                additionalProperties: true,
              },
            },
            required: ["fullname"],
            additionalProperties: true,
          },
        },
      },
      required: ["courseid", "categories"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: {
        courseid: 2,
        categories: [{ fullname: "Unit 1 Assessments" }],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // GRADE RETRIEVAL
  // ─────────────────────────────────────────────────────────────────────────
  {
    name: "core_grades_get_feedback",
    moodleFunction: "core_grades_get_feedback",
    description:
      "Gets the feedback text for a specific grade item and user. Returns the feedback content if available.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID.",
        },
        userid: {
          type: "integer",
          minimum: 1,
          description: "User ID to get feedback for.",
        },
        itemid: {
          type: "integer",
          minimum: 1,
          description: "Grade item ID.",
        },
      },
      required: ["courseid", "userid", "itemid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { courseid: 2, userid: 5, itemid: 10 },
    },
  },
  {
    name: "core_grades_get_grade_tree",
    moodleFunction: "core_grades_get_grade_tree",
    description:
      "Gets the complete grade tree structure for a course, including categories and items in hierarchical format. Useful for displaying the gradebook structure.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID to get grade tree for.",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { courseid: 2 },
    },
  },
  {
    name: "core_grades_get_gradeitems",
    moodleFunction: "core_grades_get_gradeitems",
    description:
      "Gets all grade items for a course. Grade items represent graded activities, manual grades, and category totals. Returns array of grade item objects with id, itemname, itemtype, grademax, etc.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID to get grade items for.",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { courseid: 2 },
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // USER SELECTORS (UI Helpers)
  // ─────────────────────────────────────────────────────────────────────────
  {
    name: "core_grades_get_enrolled_users_for_selector",
    moodleFunction: "core_grades_get_enrolled_users_for_selector",
    description:
      "Gets enrolled users formatted for grade UI selectors/dropdowns. Supports filtering by name and group. Returns object with users array for building grade selection interfaces.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID to get enrolled users from.",
        },
        groupid: {
          type: "integer",
          minimum: 0,
          description: "Group ID to filter by. Use 0 for all groups.",
        },
        filter: {
          type: "string",
          description: "Text filter for user name search.",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { courseid: 2 },
    },
  },
  {
    name: "core_grades_get_gradable_users",
    moodleFunction: "core_grades_get_gradable_users",
    description:
      "Gets list of users who can receive grades in a course. Similar to get_enrolled_users_for_selector but returns users in a format suitable for grading operations.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID.",
        },
        groupid: {
          type: "integer",
          minimum: 0,
          description: "Group ID to filter by. Use 0 for all groups.",
        },
        onlyactiveenrol: {
          type: "boolean",
          description:
            "If true, only include users with active enrolments. Default true.",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { courseid: 2 },
    },
  },
  {
    name: "core_grades_get_groups_for_selector",
    moodleFunction: "core_grades_get_groups_for_selector",
    description:
      "Gets course groups formatted for grade UI selectors. Used in the gradebook interface to filter students by group.",
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
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { courseid: 2 },
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // GRADING PANEL - POINT GRADES
  // ─────────────────────────────────────────────────────────────────────────
  {
    name: "core_grades_grader_gradingpanel_point_fetch",
    moodleFunction: "core_grades_grader_gradingpanel_point_fetch",
    description:
      "Fetches the point-based grading panel data for a user and grade item. Used to populate the inline grading interface. Returns current grade, max grade, and grade info.",
    inputSchema: {
      type: "object",
      properties: {
        component: {
          type: "string",
          minLength: 1,
          description:
            "Component name that owns the grade item (e.g., 'mod_assign', 'mod_quiz').",
        },
        contextid: {
          type: "integer",
          minimum: 1,
          description: "Context ID of the grading area.",
        },
        itemname: {
          type: "string",
          minLength: 1,
          description: "Grade item name within the component.",
        },
        gradeduserid: {
          type: "integer",
          minimum: 1,
          description: "User ID being graded.",
        },
      },
      required: ["component", "contextid", "itemname", "gradeduserid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: {
        component: "mod_assign",
        contextid: 50,
        itemname: "submissions",
        gradeduserid: 5,
      },
    },
  },
  {
    name: "core_grades_grader_gradingpanel_point_store",
    moodleFunction: "core_grades_grader_gradingpanel_point_store",
    description:
      "Stores a point-based grade via the grading panel. Used by the inline grading interface to save grades. Returns updated grade information.",
    inputSchema: {
      type: "object",
      properties: {
        component: {
          type: "string",
          minLength: 1,
          description: "Component name that owns the grade item.",
        },
        contextid: {
          type: "integer",
          minimum: 1,
          description: "Context ID of the grading area.",
        },
        itemname: {
          type: "string",
          minLength: 1,
          description: "Grade item name within the component.",
        },
        gradeduserid: {
          type: "integer",
          minimum: 1,
          description: "User ID being graded.",
        },
        notifyuser: {
          type: "boolean",
          description:
            "If true, notify the user of the grade. Default false.",
        },
        formdata: {
          type: "string",
          description:
            "URL-encoded form data containing the grade value (e.g., 'grade=85').",
        },
      },
      required: ["component", "contextid", "itemname", "gradeduserid", "formdata"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: {
        component: "mod_assign",
        contextid: 50,
        itemname: "submissions",
        gradeduserid: 5,
        formdata: "grade=85",
      },
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // GRADING PANEL - SCALE GRADES
  // ─────────────────────────────────────────────────────────────────────────
  {
    name: "core_grades_grader_gradingpanel_scale_fetch",
    moodleFunction: "core_grades_grader_gradingpanel_scale_fetch",
    description:
      "Fetches the scale-based grading panel data for a user and grade item. Used for activities graded with scales instead of points. Returns current scale selection and available scale options.",
    inputSchema: {
      type: "object",
      properties: {
        component: {
          type: "string",
          minLength: 1,
          description: "Component name that owns the grade item.",
        },
        contextid: {
          type: "integer",
          minimum: 1,
          description: "Context ID of the grading area.",
        },
        itemname: {
          type: "string",
          minLength: 1,
          description: "Grade item name within the component.",
        },
        gradeduserid: {
          type: "integer",
          minimum: 1,
          description: "User ID being graded.",
        },
      },
      required: ["component", "contextid", "itemname", "gradeduserid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: {
        component: "mod_forum",
        contextid: 60,
        itemname: "forum",
        gradeduserid: 5,
      },
    },
  },
  {
    name: "core_grades_grader_gradingpanel_scale_store",
    moodleFunction: "core_grades_grader_gradingpanel_scale_store",
    description:
      "Stores a scale-based grade via the grading panel. Used for activities using scale grading instead of points. Returns updated grade information.",
    inputSchema: {
      type: "object",
      properties: {
        component: {
          type: "string",
          minLength: 1,
          description: "Component name that owns the grade item.",
        },
        contextid: {
          type: "integer",
          minimum: 1,
          description: "Context ID of the grading area.",
        },
        itemname: {
          type: "string",
          minLength: 1,
          description: "Grade item name within the component.",
        },
        gradeduserid: {
          type: "integer",
          minimum: 1,
          description: "User ID being graded.",
        },
        notifyuser: {
          type: "boolean",
          description:
            "If true, notify the user of the grade. Default false.",
        },
        formdata: {
          type: "string",
          description:
            "URL-encoded form data containing the scale value (e.g., 'grade=3' for scale item 3).",
        },
      },
      required: ["component", "contextid", "itemname", "gradeduserid", "formdata"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: {
        component: "mod_forum",
        contextid: 60,
        itemname: "forum",
        gradeduserid: 5,
        formdata: "grade=3",
      },
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // GRADE UPDATE
  // ─────────────────────────────────────────────────────────────────────────
  {
    name: "core_grades_update_grades",
    moodleFunction: "core_grades_update_grades",
    description:
      "Updates grades for users in a grade item. This is a lower-level API typically used by activity modules to push grades to the gradebook. Returns 0 on success.",
    inputSchema: {
      type: "object",
      properties: {
        source: {
          type: "string",
          minLength: 1,
          description:
            "Source component for the grade (e.g., 'mod_assign', 'manual').",
        },
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID.",
        },
        component: {
          type: "string",
          minLength: 1,
          description: "Component that owns the grade item.",
        },
        activityid: {
          type: "integer",
          minimum: 0,
          description:
            "Activity instance ID. Use 0 for course-level items or manual grades.",
        },
        itemnumber: {
          type: "integer",
          minimum: 0,
          description:
            "Grade item number within the activity (usually 0 for the main grade).",
        },
        grades: {
          type: "array",
          description: "Array of grade updates to apply.",
          items: {
            type: "object",
            properties: {
              userid: {
                type: "integer",
                minimum: 1,
                description: "User ID to update grade for.",
              },
              rawgrade: {
                type: "number",
                description: "Raw grade value. Use null to delete the grade.",
              },
              feedback: {
                type: "string",
                description: "Feedback text for the grade.",
              },
              feedbackformat: {
                type: "integer",
                enum: [0, 1, 2, 4],
                description: "Feedback format: 0=MOODLE, 1=HTML, 2=PLAIN, 4=MARKDOWN.",
              },
            },
            required: ["userid"],
            additionalProperties: true,
          },
        },
        itemdetails: {
          type: "object",
          description: "Optional details to update the grade item itself.",
          properties: {
            itemname: {
              type: "string",
              description: "Grade item name.",
            },
            grademax: {
              type: "number",
              description: "Maximum grade.",
            },
            grademin: {
              type: "number",
              description: "Minimum grade.",
            },
            gradepass: {
              type: "number",
              description: "Passing grade threshold.",
            },
            hidden: {
              type: "boolean",
              description: "Whether the grade item is hidden.",
            },
          },
          additionalProperties: true,
        },
      },
      required: ["source", "courseid", "component", "activityid", "itemnumber"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: {
        source: "mod_assign",
        courseid: 2,
        component: "mod_assign",
        activityid: 5,
        itemnumber: 0,
        grades: [{ userid: 10, rawgrade: 85 }],
      },
    },
  },
];
