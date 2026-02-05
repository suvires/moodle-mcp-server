import type { ToolSpec } from "../../types.js";

export const core_competency_tools: ToolSpec[] = [
  // ========== Course Competency Tools ==========
  {
    name: "core_competency_add_competency_to_course",
    moodleFunction: "core_competency_add_competency_to_course",
    description:
      "Links a competency to a course. Students will be assessed against this competency in the course context.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID to add the competency to.",
        },
        competencyid: {
          type: "integer",
          minimum: 1,
          description: "Competency ID to link to the course.",
        },
      },
      required: ["courseid", "competencyid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { courseid: 2, competencyid: 5 },
    },
  },
  {
    name: "core_competency_remove_competency_from_course",
    moodleFunction: "core_competency_remove_competency_from_course",
    description: "Unlinks a competency from a course.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID.",
        },
        competencyid: {
          type: "integer",
          minimum: 1,
          description: "Competency ID to unlink.",
        },
      },
      required: ["courseid", "competencyid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { courseid: 2, competencyid: 5 },
    },
  },
  {
    name: "core_competency_count_competencies_in_course",
    moodleFunction: "core_competency_count_competencies_in_course",
    description: "Counts competencies linked to a course.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Course ID.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { id: 2 },
    },
  },
  {
    name: "core_competency_list_course_competencies",
    moodleFunction: "core_competency_list_course_competencies",
    description:
      "Lists all competencies linked to a course with their course competency settings.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Course ID.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: { id: 2 },
    },
  },
  {
    name: "core_competency_reorder_course_competency",
    moodleFunction: "core_competency_reorder_course_competency",
    description: "Reorders a competency within a course's competency list.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID.",
        },
        competencyidfrom: {
          type: "integer",
          minimum: 1,
          description: "Competency ID to move.",
        },
        competencyidto: {
          type: "integer",
          minimum: 1,
          description: "Competency ID to move before/after.",
        },
      },
      required: ["courseid", "competencyidfrom", "competencyidto"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { courseid: 2, competencyidfrom: 5, competencyidto: 3 },
    },
  },
  {
    name: "core_competency_set_course_competency_ruleoutcome",
    moodleFunction: "core_competency_set_course_competency_ruleoutcome",
    description:
      "Sets the rule outcome for a course competency (what happens when course is completed).",
    inputSchema: {
      type: "object",
      properties: {
        coursecompetencyid: {
          type: "integer",
          minimum: 1,
          description: "Course competency link ID.",
        },
        ruleoutcome: {
          type: "integer",
          enum: [0, 1, 2, 3],
          description:
            "Outcome when rule matches: 0=none, 1=recommend, 2=evidence, 3=complete.",
        },
      },
      required: ["coursecompetencyid", "ruleoutcome"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { coursecompetencyid: 10, ruleoutcome: 2 },
    },
  },
  {
    name: "core_competency_update_course_competency_settings",
    moodleFunction: "core_competency_update_course_competency_settings",
    description: "Updates the competency settings for a course.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID.",
        },
        settings: {
          type: "object",
          description: "Course competency settings.",
          properties: {
            pushratingstouserplans: {
              type: "boolean",
              description: "Push course ratings to user learning plans.",
            },
          },
          additionalProperties: true,
        },
      },
      required: ["courseid", "settings"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { courseid: 2, settings: { pushratingstouserplans: true } },
    },
  },
  {
    name: "core_competency_count_courses_using_competency",
    moodleFunction: "core_competency_count_courses_using_competency",
    description: "Counts courses that use a specific competency.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Competency ID.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { id: 5 },
    },
  },

  // ========== Course Module Competency Tools ==========
  {
    name: "core_competency_count_course_module_competencies",
    moodleFunction: "core_competency_count_course_module_competencies",
    description: "Counts competencies linked to a course module (activity).",
    inputSchema: {
      type: "object",
      properties: {
        cmid: {
          type: "integer",
          minimum: 1,
          description: "Course module ID.",
        },
      },
      required: ["cmid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { cmid: 10 },
    },
  },
  {
    name: "core_competency_list_course_module_competencies",
    moodleFunction: "core_competency_list_course_module_competencies",
    description: "Lists competencies linked to a course module.",
    inputSchema: {
      type: "object",
      properties: {
        cmid: {
          type: "integer",
          minimum: 1,
          description: "Course module ID.",
        },
      },
      required: ["cmid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: { cmid: 10 },
    },
  },

  // ========== Learning Plan Tools ==========
  {
    name: "core_competency_add_competency_to_plan",
    moodleFunction: "core_competency_add_competency_to_plan",
    description: "Adds a competency to a user's learning plan.",
    inputSchema: {
      type: "object",
      properties: {
        planid: {
          type: "integer",
          minimum: 1,
          description: "Learning plan ID.",
        },
        competencyid: {
          type: "integer",
          minimum: 1,
          description: "Competency ID to add.",
        },
      },
      required: ["planid", "competencyid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { planid: 3, competencyid: 5 },
    },
  },
  {
    name: "core_competency_remove_competency_from_plan",
    moodleFunction: "core_competency_remove_competency_from_plan",
    description: "Removes a competency from a learning plan.",
    inputSchema: {
      type: "object",
      properties: {
        planid: {
          type: "integer",
          minimum: 1,
          description: "Learning plan ID.",
        },
        competencyid: {
          type: "integer",
          minimum: 1,
          description: "Competency ID to remove.",
        },
      },
      required: ["planid", "competencyid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { planid: 3, competencyid: 5 },
    },
  },
  {
    name: "core_competency_create_plan",
    moodleFunction: "core_competency_create_plan",
    description: "Creates a new learning plan for a user.",
    inputSchema: {
      type: "object",
      properties: {
        plan: {
          type: "object",
          properties: {
            name: {
              type: "string",
              minLength: 1,
              description: "Plan name.",
            },
            userid: {
              type: "integer",
              minimum: 1,
              description: "User ID the plan belongs to.",
            },
            templateid: {
              type: "integer",
              minimum: 0,
              description: "Template ID to base the plan on. 0 for none.",
            },
            description: {
              type: "string",
              description: "Plan description.",
            },
            descriptionformat: {
              type: "integer",
              enum: [0, 1, 2, 4],
              description: "Description format.",
            },
            duedate: {
              type: "integer",
              minimum: 0,
              description: "Due date timestamp. 0 for no due date.",
            },
          },
          required: ["name", "userid"],
          additionalProperties: true,
        },
      },
      required: ["plan"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { plan: { name: "Q1 Learning Goals", userid: 5 } },
    },
  },
  {
    name: "core_competency_read_plan",
    moodleFunction: "core_competency_read_plan",
    description: "Gets details of a learning plan.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Plan ID.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: { id: 3 },
    },
  },
  {
    name: "core_competency_update_plan",
    moodleFunction: "core_competency_update_plan",
    description: "Updates an existing learning plan.",
    inputSchema: {
      type: "object",
      properties: {
        plan: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              minimum: 1,
              description: "Plan ID to update.",
            },
            name: {
              type: "string",
              minLength: 1,
              description: "Plan name.",
            },
            description: {
              type: "string",
              description: "Plan description.",
            },
            duedate: {
              type: "integer",
              minimum: 0,
              description: "Due date timestamp.",
            },
          },
          required: ["id"],
          additionalProperties: true,
        },
      },
      required: ["plan"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { plan: { id: 3, name: "Updated Plan Name" } },
    },
  },
  {
    name: "core_competency_delete_plan",
    moodleFunction: "core_competency_delete_plan",
    description: "Deletes a learning plan.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Plan ID to delete.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { id: 3 },
    },
  },
  {
    name: "core_competency_list_user_plans",
    moodleFunction: "core_competency_list_user_plans",
    description: "Lists all learning plans for a user.",
    inputSchema: {
      type: "object",
      properties: {
        userid: {
          type: "integer",
          minimum: 1,
          description: "User ID to list plans for.",
        },
      },
      required: ["userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: { userid: 5 },
    },
  },
  {
    name: "core_competency_list_plan_competencies",
    moodleFunction: "core_competency_list_plan_competencies",
    description: "Lists all competencies in a learning plan with user proficiency.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Plan ID.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: { id: 3 },
    },
  },
  {
    name: "core_competency_reorder_plan_competency",
    moodleFunction: "core_competency_reorder_plan_competency",
    description: "Reorders a competency within a learning plan.",
    inputSchema: {
      type: "object",
      properties: {
        planid: {
          type: "integer",
          minimum: 1,
          description: "Plan ID.",
        },
        competencyidfrom: {
          type: "integer",
          minimum: 1,
          description: "Competency ID to move.",
        },
        competencyidto: {
          type: "integer",
          minimum: 1,
          description: "Target competency ID position.",
        },
      },
      required: ["planid", "competencyidfrom", "competencyidto"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { planid: 3, competencyidfrom: 5, competencyidto: 2 },
    },
  },
  {
    name: "core_competency_approve_plan",
    moodleFunction: "core_competency_approve_plan",
    description: "Approves a learning plan that was submitted for review.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Plan ID to approve.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { id: 3 },
    },
  },
  {
    name: "core_competency_unapprove_plan",
    moodleFunction: "core_competency_unapprove_plan",
    description: "Revokes approval of a learning plan.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Plan ID to unapprove.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { id: 3 },
    },
  },
  {
    name: "core_competency_complete_plan",
    moodleFunction: "core_competency_complete_plan",
    description: "Marks a learning plan as complete, freezing competency ratings.",
    inputSchema: {
      type: "object",
      properties: {
        planid: {
          type: "integer",
          minimum: 1,
          description: "Plan ID to complete.",
        },
      },
      required: ["planid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { planid: 3 },
    },
  },
  {
    name: "core_competency_reopen_plan",
    moodleFunction: "core_competency_reopen_plan",
    description: "Reopens a completed learning plan for further work.",
    inputSchema: {
      type: "object",
      properties: {
        planid: {
          type: "integer",
          minimum: 1,
          description: "Plan ID to reopen.",
        },
      },
      required: ["planid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { planid: 3 },
    },
  },
  {
    name: "core_competency_unlink_plan_from_template",
    moodleFunction: "core_competency_unlink_plan_from_template",
    description:
      "Unlinks a plan from its template, making it independent. Plan keeps its competencies.",
    inputSchema: {
      type: "object",
      properties: {
        planid: {
          type: "integer",
          minimum: 1,
          description: "Plan ID to unlink.",
        },
      },
      required: ["planid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { planid: 3 },
    },
  },
  {
    name: "core_competency_plan_request_review",
    moodleFunction: "core_competency_plan_request_review",
    description: "Requests a review of a learning plan.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Plan ID to request review for.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: { id: 3 },
    },
  },
  {
    name: "core_competency_plan_cancel_review_request",
    moodleFunction: "core_competency_plan_cancel_review_request",
    description: "Cancels a pending review request for a learning plan.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Plan ID.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: { id: 3 },
    },
  },
  {
    name: "core_competency_plan_start_review",
    moodleFunction: "core_competency_plan_start_review",
    description: "Starts reviewing a learning plan.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Plan ID.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { id: 3 },
    },
  },
  {
    name: "core_competency_plan_stop_review",
    moodleFunction: "core_competency_plan_stop_review",
    description: "Stops reviewing a learning plan without approving/rejecting.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Plan ID.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { id: 3 },
    },
  },

  // ========== Template Tools ==========
  {
    name: "core_competency_add_competency_to_template",
    moodleFunction: "core_competency_add_competency_to_template",
    description: "Adds a competency to a learning plan template.",
    inputSchema: {
      type: "object",
      properties: {
        templateid: {
          type: "integer",
          minimum: 1,
          description: "Template ID.",
        },
        competencyid: {
          type: "integer",
          minimum: 1,
          description: "Competency ID to add.",
        },
      },
      required: ["templateid", "competencyid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { templateid: 2, competencyid: 5 },
    },
  },
  {
    name: "core_competency_remove_competency_from_template",
    moodleFunction: "core_competency_remove_competency_from_template",
    description: "Removes a competency from a template.",
    inputSchema: {
      type: "object",
      properties: {
        templateid: {
          type: "integer",
          minimum: 1,
          description: "Template ID.",
        },
        competencyid: {
          type: "integer",
          minimum: 1,
          description: "Competency ID to remove.",
        },
      },
      required: ["templateid", "competencyid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { templateid: 2, competencyid: 5 },
    },
  },
  {
    name: "core_competency_create_template",
    moodleFunction: "core_competency_create_template",
    description: "Creates a new learning plan template.",
    inputSchema: {
      type: "object",
      properties: {
        template: {
          type: "object",
          properties: {
            shortname: {
              type: "string",
              minLength: 1,
              description: "Template short name.",
            },
            contextid: {
              type: "integer",
              minimum: 1,
              description: "Context ID for the template.",
            },
            description: {
              type: "string",
              description: "Template description.",
            },
            visible: {
              type: "boolean",
              description: "Whether template is visible.",
            },
            duedate: {
              type: "integer",
              minimum: 0,
              description: "Default due date for plans created from this template.",
            },
          },
          required: ["shortname", "contextid"],
          additionalProperties: true,
        },
      },
      required: ["template"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { template: { shortname: "IT Skills", contextid: 1 } },
    },
  },
  {
    name: "core_competency_read_template",
    moodleFunction: "core_competency_read_template",
    description: "Gets details of a learning plan template.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Template ID.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { id: 2 },
    },
  },
  {
    name: "core_competency_update_template",
    moodleFunction: "core_competency_update_template",
    description: "Updates an existing template.",
    inputSchema: {
      type: "object",
      properties: {
        template: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              minimum: 1,
              description: "Template ID to update.",
            },
            shortname: {
              type: "string",
              minLength: 1,
              description: "Template short name.",
            },
            description: {
              type: "string",
              description: "Template description.",
            },
            visible: {
              type: "boolean",
              description: "Whether template is visible.",
            },
          },
          required: ["id"],
          additionalProperties: true,
        },
      },
      required: ["template"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { template: { id: 2, shortname: "Updated IT Skills" } },
    },
  },
  {
    name: "core_competency_delete_template",
    moodleFunction: "core_competency_delete_template",
    description: "Deletes a learning plan template.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Template ID to delete.",
        },
        deleteplans: {
          type: "boolean",
          description: "Also delete plans created from this template. Default false.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { id: 2 },
    },
  },
  {
    name: "core_competency_duplicate_template",
    moodleFunction: "core_competency_duplicate_template",
    description: "Duplicates a learning plan template with all its competencies.",
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
    examples: {
      minimal: { id: 2 },
    },
  },
  {
    name: "core_competency_list_templates",
    moodleFunction: "core_competency_list_templates",
    description: "Lists learning plan templates with optional filtering.",
    inputSchema: {
      type: "object",
      properties: {
        sort: {
          type: "string",
          description: "Field to sort by.",
        },
        order: {
          type: "string",
          enum: ["ASC", "DESC"],
          description: "Sort order.",
        },
        skip: {
          type: "integer",
          minimum: 0,
          description: "Number of records to skip.",
        },
        limit: {
          type: "integer",
          minimum: 0,
          description: "Maximum records to return. 0 for all.",
        },
        context: {
          type: "object",
          description: "Context filter.",
          properties: {
            contextid: {
              type: "integer",
              minimum: 1,
              description: "Context ID.",
            },
          },
        },
        includes: {
          type: "string",
          enum: ["children", "parents", "self"],
          description: "Include contexts: children, parents, or self only.",
        },
        onlyvisible: {
          type: "boolean",
          description: "Only return visible templates.",
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: {},
    },
  },
  {
    name: "core_competency_count_templates",
    moodleFunction: "core_competency_count_templates",
    description: "Counts learning plan templates.",
    inputSchema: {
      type: "object",
      properties: {
        context: {
          type: "object",
          description: "Context filter.",
          properties: {
            contextid: {
              type: "integer",
              minimum: 1,
              description: "Context ID.",
            },
          },
        },
        includes: {
          type: "string",
          enum: ["children", "parents", "self"],
          description: "Include contexts.",
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: {},
    },
  },
  {
    name: "core_competency_count_competencies_in_template",
    moodleFunction: "core_competency_count_competencies_in_template",
    description: "Counts competencies in a template.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Template ID.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { id: 2 },
    },
  },
  {
    name: "core_competency_list_competencies_in_template",
    moodleFunction: "core_competency_list_competencies_in_template",
    description: "Lists all competencies in a template.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Template ID.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { id: 2 },
    },
  },
  {
    name: "core_competency_reorder_template_competency",
    moodleFunction: "core_competency_reorder_template_competency",
    description: "Reorders a competency within a template.",
    inputSchema: {
      type: "object",
      properties: {
        templateid: {
          type: "integer",
          minimum: 1,
          description: "Template ID.",
        },
        competencyidfrom: {
          type: "integer",
          minimum: 1,
          description: "Competency ID to move.",
        },
        competencyidto: {
          type: "integer",
          minimum: 1,
          description: "Target competency ID position.",
        },
      },
      required: ["templateid", "competencyidfrom", "competencyidto"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { templateid: 2, competencyidfrom: 5, competencyidto: 3 },
    },
  },
  {
    name: "core_competency_count_templates_using_competency",
    moodleFunction: "core_competency_count_templates_using_competency",
    description: "Counts templates that use a specific competency.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Competency ID.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { id: 5 },
    },
  },
  {
    name: "core_competency_list_templates_using_competency",
    moodleFunction: "core_competency_list_templates_using_competency",
    description: "Lists templates that use a specific competency.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Competency ID.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { id: 5 },
    },
  },
  {
    name: "core_competency_template_has_related_data",
    moodleFunction: "core_competency_template_has_related_data",
    description: "Checks if a template has related data (plans, cohorts).",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Template ID.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { id: 2 },
    },
  },
  {
    name: "core_competency_template_viewed",
    moodleFunction: "core_competency_template_viewed",
    description: "Triggers the template viewed event for logging.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Template ID.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { id: 2 },
    },
  },

  // ========== Competency Framework Tools ==========
  {
    name: "core_competency_create_competency_framework",
    moodleFunction: "core_competency_create_competency_framework",
    description: "Creates a new competency framework.",
    inputSchema: {
      type: "object",
      properties: {
        competencyframework: {
          type: "object",
          properties: {
            shortname: {
              type: "string",
              minLength: 1,
              description: "Framework short name.",
            },
            idnumber: {
              type: "string",
              description: "Unique ID number.",
            },
            contextid: {
              type: "integer",
              minimum: 1,
              description: "Context ID.",
            },
            description: {
              type: "string",
              description: "Framework description.",
            },
            scaleid: {
              type: "integer",
              minimum: 1,
              description: "Scale ID for rating competencies.",
            },
            scaleconfiguration: {
              type: "string",
              description: "JSON scale configuration.",
            },
            visible: {
              type: "boolean",
              description: "Whether framework is visible.",
            },
          },
          required: ["shortname", "idnumber", "contextid", "scaleid", "scaleconfiguration"],
          additionalProperties: true,
        },
      },
      required: ["competencyframework"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: {
        competencyframework: {
          shortname: "Digital Literacy",
          idnumber: "DIGL001",
          contextid: 1,
          scaleid: 2,
          scaleconfiguration: '[{"id":1,"scaledefault":1,"proficient":0}]',
        },
      },
    },
  },
  {
    name: "core_competency_read_competency_framework",
    moodleFunction: "core_competency_read_competency_framework",
    description: "Gets details of a competency framework.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Framework ID.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { id: 1 },
    },
  },
  {
    name: "core_competency_update_competency_framework",
    moodleFunction: "core_competency_update_competency_framework",
    description: "Updates an existing competency framework.",
    inputSchema: {
      type: "object",
      properties: {
        competencyframework: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              minimum: 1,
              description: "Framework ID to update.",
            },
            shortname: {
              type: "string",
              minLength: 1,
              description: "Framework short name.",
            },
            description: {
              type: "string",
              description: "Framework description.",
            },
            visible: {
              type: "boolean",
              description: "Whether framework is visible.",
            },
          },
          required: ["id"],
          additionalProperties: true,
        },
      },
      required: ["competencyframework"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { competencyframework: { id: 1, shortname: "Updated Framework" } },
    },
  },
  {
    name: "core_competency_delete_competency_framework",
    moodleFunction: "core_competency_delete_competency_framework",
    description: "Deletes a competency framework and all its competencies.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Framework ID to delete.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { id: 1 },
    },
  },
  {
    name: "core_competency_duplicate_competency_framework",
    moodleFunction: "core_competency_duplicate_competency_framework",
    description: "Duplicates a competency framework with all its competencies.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Framework ID to duplicate.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { id: 1 },
    },
  },
  {
    name: "core_competency_list_competency_frameworks",
    moodleFunction: "core_competency_list_competency_frameworks",
    description: "Lists competency frameworks with optional filtering.",
    inputSchema: {
      type: "object",
      properties: {
        sort: {
          type: "string",
          description: "Field to sort by.",
        },
        order: {
          type: "string",
          enum: ["ASC", "DESC"],
          description: "Sort order.",
        },
        skip: {
          type: "integer",
          minimum: 0,
          description: "Records to skip.",
        },
        limit: {
          type: "integer",
          minimum: 0,
          description: "Maximum records. 0 for all.",
        },
        context: {
          type: "object",
          properties: {
            contextid: {
              type: "integer",
              minimum: 1,
              description: "Context ID.",
            },
          },
        },
        includes: {
          type: "string",
          enum: ["children", "parents", "self"],
          description: "Include contexts.",
        },
        onlyvisible: {
          type: "boolean",
          description: "Only visible frameworks.",
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: {},
    },
  },
  {
    name: "core_competency_count_competency_frameworks",
    moodleFunction: "core_competency_count_competency_frameworks",
    description: "Counts competency frameworks.",
    inputSchema: {
      type: "object",
      properties: {
        context: {
          type: "object",
          properties: {
            contextid: {
              type: "integer",
              minimum: 1,
              description: "Context ID.",
            },
          },
        },
        includes: {
          type: "string",
          enum: ["children", "parents", "self"],
          description: "Include contexts.",
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: {},
    },
  },
  {
    name: "core_competency_competency_framework_viewed",
    moodleFunction: "core_competency_competency_framework_viewed",
    description: "Triggers the framework viewed event for logging.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Framework ID.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { id: 1 },
    },
  },

  // ========== Competency Tools ==========
  {
    name: "core_competency_create_competency",
    moodleFunction: "core_competency_create_competency",
    description: "Creates a new competency within a framework.",
    inputSchema: {
      type: "object",
      properties: {
        competency: {
          type: "object",
          properties: {
            shortname: {
              type: "string",
              minLength: 1,
              description: "Competency short name.",
            },
            idnumber: {
              type: "string",
              description: "Unique ID number within framework.",
            },
            competencyframeworkid: {
              type: "integer",
              minimum: 1,
              description: "Parent framework ID.",
            },
            parentid: {
              type: "integer",
              minimum: 0,
              description: "Parent competency ID. 0 for root level.",
            },
            description: {
              type: "string",
              description: "Competency description.",
            },
          },
          required: ["shortname", "competencyframeworkid"],
          additionalProperties: true,
        },
      },
      required: ["competency"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { competency: { shortname: "Web Basics", competencyframeworkid: 1 } },
    },
  },
  {
    name: "core_competency_read_competency",
    moodleFunction: "core_competency_read_competency",
    description: "Gets details of a competency.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Competency ID.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: { id: 5 },
    },
  },
  {
    name: "core_competency_update_competency",
    moodleFunction: "core_competency_update_competency",
    description: "Updates an existing competency.",
    inputSchema: {
      type: "object",
      properties: {
        competency: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              minimum: 1,
              description: "Competency ID to update.",
            },
            shortname: {
              type: "string",
              minLength: 1,
              description: "Competency short name.",
            },
            description: {
              type: "string",
              description: "Competency description.",
            },
          },
          required: ["id"],
          additionalProperties: true,
        },
      },
      required: ["competency"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { competency: { id: 5, shortname: "Updated Competency" } },
    },
  },
  {
    name: "core_competency_delete_competency",
    moodleFunction: "core_competency_delete_competency",
    description: "Deletes a competency.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Competency ID to delete.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { id: 5 },
    },
  },
  {
    name: "core_competency_list_competencies",
    moodleFunction: "core_competency_list_competencies",
    description: "Lists competencies with optional filtering.",
    inputSchema: {
      type: "object",
      properties: {
        filters: {
          type: "array",
          description: "Filters to apply.",
          items: {
            type: "object",
            properties: {
              column: {
                type: "string",
                description: "Column to filter on.",
              },
              value: {
                description: "Value to filter by.",
              },
            },
          },
        },
        sort: {
          type: "string",
          description: "Field to sort by.",
        },
        order: {
          type: "string",
          enum: ["ASC", "DESC"],
          description: "Sort order.",
        },
        skip: {
          type: "integer",
          minimum: 0,
          description: "Records to skip.",
        },
        limit: {
          type: "integer",
          minimum: 0,
          description: "Maximum records. 0 for all.",
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: {},
    },
  },
  {
    name: "core_competency_count_competencies",
    moodleFunction: "core_competency_count_competencies",
    description: "Counts competencies with optional filtering.",
    inputSchema: {
      type: "object",
      properties: {
        filters: {
          type: "array",
          description: "Filters to apply.",
          items: {
            type: "object",
            properties: {
              column: {
                type: "string",
                description: "Column to filter on.",
              },
              value: {
                description: "Value to filter by.",
              },
            },
          },
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: {},
    },
  },
  {
    name: "core_competency_search_competencies",
    moodleFunction: "core_competency_search_competencies",
    description: "Searches competencies by text query.",
    inputSchema: {
      type: "object",
      properties: {
        searchtext: {
          type: "string",
          description: "Text to search for.",
        },
        competencyframeworkid: {
          type: "integer",
          minimum: 1,
          description: "Limit search to this framework.",
        },
      },
      required: ["searchtext", "competencyframeworkid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { searchtext: "digital", competencyframeworkid: 1 },
    },
  },
  {
    name: "core_competency_set_parent_competency",
    moodleFunction: "core_competency_set_parent_competency",
    description: "Moves a competency under a different parent.",
    inputSchema: {
      type: "object",
      properties: {
        competencyid: {
          type: "integer",
          minimum: 1,
          description: "Competency ID to move.",
        },
        parentid: {
          type: "integer",
          minimum: 0,
          description: "New parent competency ID. 0 for root level.",
        },
      },
      required: ["competencyid", "parentid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { competencyid: 5, parentid: 2 },
    },
  },
  {
    name: "core_competency_move_up_competency",
    moodleFunction: "core_competency_move_up_competency",
    description: "Moves a competency up in its sibling list.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Competency ID to move up.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { id: 5 },
    },
  },
  {
    name: "core_competency_move_down_competency",
    moodleFunction: "core_competency_move_down_competency",
    description: "Moves a competency down in its sibling list.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Competency ID to move down.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { id: 5 },
    },
  },
  {
    name: "core_competency_add_related_competency",
    moodleFunction: "core_competency_add_related_competency",
    description: "Links two competencies as related.",
    inputSchema: {
      type: "object",
      properties: {
        competencyid: {
          type: "integer",
          minimum: 1,
          description: "First competency ID.",
        },
        relatedcompetencyid: {
          type: "integer",
          minimum: 1,
          description: "Second competency ID to relate.",
        },
      },
      required: ["competencyid", "relatedcompetencyid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { competencyid: 5, relatedcompetencyid: 8 },
    },
  },
  {
    name: "core_competency_remove_related_competency",
    moodleFunction: "core_competency_remove_related_competency",
    description: "Removes the relation between two competencies.",
    inputSchema: {
      type: "object",
      properties: {
        competencyid: {
          type: "integer",
          minimum: 1,
          description: "First competency ID.",
        },
        relatedcompetencyid: {
          type: "integer",
          minimum: 1,
          description: "Second competency ID.",
        },
      },
      required: ["competencyid", "relatedcompetencyid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { competencyid: 5, relatedcompetencyid: 8 },
    },
  },
  {
    name: "core_competency_competency_viewed",
    moodleFunction: "core_competency_competency_viewed",
    description: "Triggers the competency viewed event for logging.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Competency ID.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: { id: 5 },
    },
  },
  {
    name: "core_competency_get_scale_values",
    moodleFunction: "core_competency_get_scale_values",
    description: "Gets the scale values for a competency scale.",
    inputSchema: {
      type: "object",
      properties: {
        scaleid: {
          type: "integer",
          minimum: 1,
          description: "Scale ID.",
        },
      },
      required: ["scaleid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { scaleid: 2 },
    },
  },

  // ========== Grading Tools ==========
  {
    name: "core_competency_grade_competency",
    moodleFunction: "core_competency_grade_competency",
    description:
      "Grades a user's competency proficiency. Creates evidence of competency achievement.",
    inputSchema: {
      type: "object",
      properties: {
        userid: {
          type: "integer",
          minimum: 1,
          description: "User ID to grade.",
        },
        competencyid: {
          type: "integer",
          minimum: 1,
          description: "Competency ID being graded.",
        },
        grade: {
          type: "integer",
          minimum: 1,
          description: "Grade value from the competency scale.",
        },
        note: {
          type: "string",
          description: "Optional note about the grade.",
        },
      },
      required: ["userid", "competencyid", "grade"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { userid: 5, competencyid: 3, grade: 4 },
    },
  },
  {
    name: "core_competency_grade_competency_in_course",
    moodleFunction: "core_competency_grade_competency_in_course",
    description: "Grades a user's competency in a specific course context.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID context.",
        },
        userid: {
          type: "integer",
          minimum: 1,
          description: "User ID to grade.",
        },
        competencyid: {
          type: "integer",
          minimum: 1,
          description: "Competency ID.",
        },
        grade: {
          type: "integer",
          minimum: 1,
          description: "Grade value.",
        },
        note: {
          type: "string",
          description: "Optional note.",
        },
      },
      required: ["courseid", "userid", "competencyid", "grade"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { courseid: 2, userid: 5, competencyid: 3, grade: 4 },
    },
  },
  {
    name: "core_competency_grade_competency_in_plan",
    moodleFunction: "core_competency_grade_competency_in_plan",
    description: "Grades a competency within a learning plan context.",
    inputSchema: {
      type: "object",
      properties: {
        planid: {
          type: "integer",
          minimum: 1,
          description: "Learning plan ID.",
        },
        competencyid: {
          type: "integer",
          minimum: 1,
          description: "Competency ID.",
        },
        grade: {
          type: "integer",
          minimum: 1,
          description: "Grade value.",
        },
        note: {
          type: "string",
          description: "Optional note.",
        },
      },
      required: ["planid", "competencyid", "grade"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { planid: 3, competencyid: 5, grade: 4 },
    },
  },

  // ========== User Evidence Tools ==========
  {
    name: "core_competency_read_user_evidence",
    moodleFunction: "core_competency_read_user_evidence",
    description: "Gets details of a user's evidence of prior learning.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "User evidence ID.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: { id: 10 },
    },
  },
  {
    name: "core_competency_delete_user_evidence",
    moodleFunction: "core_competency_delete_user_evidence",
    description: "Deletes user evidence of prior learning.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "User evidence ID to delete.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: { id: 10 },
    },
  },
  {
    name: "core_competency_create_user_evidence_competency",
    moodleFunction: "core_competency_create_user_evidence_competency",
    description: "Links user evidence to a competency claim.",
    inputSchema: {
      type: "object",
      properties: {
        userevidenceid: {
          type: "integer",
          minimum: 1,
          description: "User evidence ID.",
        },
        competencyid: {
          type: "integer",
          minimum: 1,
          description: "Competency ID to link.",
        },
      },
      required: ["userevidenceid", "competencyid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: { userevidenceid: 10, competencyid: 5 },
    },
  },
  {
    name: "core_competency_delete_user_evidence_competency",
    moodleFunction: "core_competency_delete_user_evidence_competency",
    description: "Unlinks user evidence from a competency claim.",
    inputSchema: {
      type: "object",
      properties: {
        userevidenceid: {
          type: "integer",
          minimum: 1,
          description: "User evidence ID.",
        },
        competencyid: {
          type: "integer",
          minimum: 1,
          description: "Competency ID to unlink.",
        },
      },
      required: ["userevidenceid", "competencyid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: { userevidenceid: 10, competencyid: 5 },
    },
  },
  {
    name: "core_competency_request_review_of_user_evidence_linked_competencies",
    moodleFunction: "core_competency_request_review_of_user_evidence_linked_competencies",
    description: "Requests review of all competencies linked to user evidence.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "User evidence ID.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: { id: 10 },
    },
  },
  {
    name: "core_competency_delete_evidence",
    moodleFunction: "core_competency_delete_evidence",
    description: "Deletes competency evidence (activity/course completion records).",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Evidence ID to delete.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { id: 100 },
    },
  },

  // ========== User Competency Review Tools ==========
  {
    name: "core_competency_user_competency_request_review",
    moodleFunction: "core_competency_user_competency_request_review",
    description: "Requests a review of a user's competency proficiency.",
    inputSchema: {
      type: "object",
      properties: {
        userid: {
          type: "integer",
          minimum: 1,
          description: "User ID.",
        },
        competencyid: {
          type: "integer",
          minimum: 1,
          description: "Competency ID.",
        },
      },
      required: ["userid", "competencyid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: { userid: 5, competencyid: 3 },
    },
  },
  {
    name: "core_competency_user_competency_cancel_review_request",
    moodleFunction: "core_competency_user_competency_cancel_review_request",
    description: "Cancels a pending review request for a user competency.",
    inputSchema: {
      type: "object",
      properties: {
        userid: {
          type: "integer",
          minimum: 1,
          description: "User ID.",
        },
        competencyid: {
          type: "integer",
          minimum: 1,
          description: "Competency ID.",
        },
      },
      required: ["userid", "competencyid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: { userid: 5, competencyid: 3 },
    },
  },
  {
    name: "core_competency_user_competency_start_review",
    moodleFunction: "core_competency_user_competency_start_review",
    description: "Starts reviewing a user's competency.",
    inputSchema: {
      type: "object",
      properties: {
        userid: {
          type: "integer",
          minimum: 1,
          description: "User ID.",
        },
        competencyid: {
          type: "integer",
          minimum: 1,
          description: "Competency ID.",
        },
      },
      required: ["userid", "competencyid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { userid: 5, competencyid: 3 },
    },
  },
  {
    name: "core_competency_user_competency_stop_review",
    moodleFunction: "core_competency_user_competency_stop_review",
    description: "Stops reviewing a user's competency.",
    inputSchema: {
      type: "object",
      properties: {
        userid: {
          type: "integer",
          minimum: 1,
          description: "User ID.",
        },
        competencyid: {
          type: "integer",
          minimum: 1,
          description: "Competency ID.",
        },
      },
      required: ["userid", "competencyid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { userid: 5, competencyid: 3 },
    },
  },

  // ========== View Events ==========
  {
    name: "core_competency_user_competency_viewed",
    moodleFunction: "core_competency_user_competency_viewed",
    description: "Triggers user competency viewed event for logging.",
    inputSchema: {
      type: "object",
      properties: {
        usercompetencyid: {
          type: "integer",
          minimum: 1,
          description: "User competency ID.",
        },
      },
      required: ["usercompetencyid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: { usercompetencyid: 50 },
    },
  },
  {
    name: "core_competency_user_competency_viewed_in_course",
    moodleFunction: "core_competency_user_competency_viewed_in_course",
    description: "Triggers user competency viewed in course event.",
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
          description: "User ID.",
        },
        competencyid: {
          type: "integer",
          minimum: 1,
          description: "Competency ID.",
        },
      },
      required: ["courseid", "userid", "competencyid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: { courseid: 2, userid: 5, competencyid: 3 },
    },
  },
  {
    name: "core_competency_user_competency_viewed_in_plan",
    moodleFunction: "core_competency_user_competency_viewed_in_plan",
    description: "Triggers user competency viewed in plan event.",
    inputSchema: {
      type: "object",
      properties: {
        planid: {
          type: "integer",
          minimum: 1,
          description: "Plan ID.",
        },
        competencyid: {
          type: "integer",
          minimum: 1,
          description: "Competency ID.",
        },
        userid: {
          type: "integer",
          minimum: 1,
          description: "User ID.",
        },
      },
      required: ["planid", "competencyid", "userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: { planid: 3, competencyid: 5, userid: 10 },
    },
  },
  {
    name: "core_competency_user_competency_plan_viewed",
    moodleFunction: "core_competency_user_competency_plan_viewed",
    description: "Triggers user competency plan viewed event.",
    inputSchema: {
      type: "object",
      properties: {
        usercompetencyplanid: {
          type: "integer",
          minimum: 1,
          description: "User competency plan ID.",
        },
      },
      required: ["usercompetencyplanid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: { usercompetencyplanid: 100 },
    },
  },
];
