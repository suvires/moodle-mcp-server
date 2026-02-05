import type { ToolSpec } from "../../types.js";

export const tool_lp_tools: ToolSpec[] = [
  {
    name: "tool_lp_data_for_competencies_manage_page",
    moodleFunction: "tool_lp_data_for_competencies_manage_page",
    description:
      "Gets data for the competencies management page. Returns competency list with hierarchy for the competency management UI.",
    inputSchema: {
      type: "object",
      properties: {
        competencyframeworkid: {
          type: "integer",
          minimum: 1,
          description: "Competency framework ID to manage competencies for.",
        },
        search: {
          type: "string",
          description: "Search term to filter competencies.",
        },
      },
      required: ["competencyframeworkid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: { minimal: { competencyframeworkid: 1 } },
  },
  {
    name: "tool_lp_data_for_competency_frameworks_manage_page",
    moodleFunction: "tool_lp_data_for_competency_frameworks_manage_page",
    description:
      "Gets data for the competency frameworks management page. Returns list of frameworks for the admin UI.",
    inputSchema: {
      type: "object",
      properties: {
        pagecontext: {
          type: "object",
          description: "Page context information.",
          properties: {
            contextid: { type: "integer", minimum: 1 },
          },
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: {} },
  },
  {
    name: "tool_lp_data_for_competency_summary",
    moodleFunction: "tool_lp_data_for_competency_summary",
    description:
      "Gets summary data for a competency. Returns competency details, related competencies, and linked courses.",
    inputSchema: {
      type: "object",
      properties: {
        competencyid: {
          type: "integer",
          minimum: 1,
          description: "Competency ID to get summary for.",
        },
        includerelated: {
          type: "boolean",
          description: "Include related competencies.",
        },
        includecourses: {
          type: "boolean",
          description: "Include linked courses.",
        },
      },
      required: ["competencyid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: { minimal: { competencyid: 10 } },
  },
  {
    name: "tool_lp_data_for_course_competencies_page",
    moodleFunction: "tool_lp_data_for_course_competencies_page",
    description:
      "Gets data for the course competencies page. Returns competencies linked to a course and student progress.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID to get competencies for.",
        },
        moduleid: {
          type: "integer",
          minimum: 0,
          description: "Module ID to filter by. 0 for all course competencies.",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: { minimal: { courseid: 2 } },
  },
  {
    name: "tool_lp_data_for_plan_page",
    moodleFunction: "tool_lp_data_for_plan_page",
    description:
      "Gets data for a learning plan page. Returns plan details, competencies, and user progress.",
    inputSchema: {
      type: "object",
      properties: {
        planid: {
          type: "integer",
          minimum: 1,
          description: "Learning plan ID to get data for.",
        },
      },
      required: ["planid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: { minimal: { planid: 5 } },
  },
  {
    name: "tool_lp_data_for_plans_page",
    moodleFunction: "tool_lp_data_for_plans_page",
    description:
      "Gets data for the learning plans list page. Returns all plans for a user.",
    inputSchema: {
      type: "object",
      properties: {
        userid: {
          type: "integer",
          minimum: 1,
          description: "User ID to get plans for.",
        },
      },
      required: ["userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: { minimal: { userid: 5 } },
  },
  {
    name: "tool_lp_data_for_related_competencies_section",
    moodleFunction: "tool_lp_data_for_related_competencies_section",
    description:
      "Gets data for the related competencies section. Returns competencies related to a given competency.",
    inputSchema: {
      type: "object",
      properties: {
        competencyid: {
          type: "integer",
          minimum: 1,
          description: "Competency ID to get related competencies for.",
        },
      },
      required: ["competencyid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: { minimal: { competencyid: 10 } },
  },
  {
    name: "tool_lp_data_for_template_competencies_page",
    moodleFunction: "tool_lp_data_for_template_competencies_page",
    description:
      "Gets data for the learning plan template competencies page. Returns competencies assigned to a template.",
    inputSchema: {
      type: "object",
      properties: {
        templateid: {
          type: "integer",
          minimum: 1,
          description: "Learning plan template ID.",
        },
        pagecontext: {
          type: "object",
          description: "Page context information.",
          properties: {
            contextid: { type: "integer", minimum: 1 },
          },
        },
      },
      required: ["templateid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: { templateid: 1 } },
  },
  {
    name: "tool_lp_data_for_templates_manage_page",
    moodleFunction: "tool_lp_data_for_templates_manage_page",
    description:
      "Gets data for the learning plan templates management page. Returns list of templates for admin UI.",
    inputSchema: {
      type: "object",
      properties: {
        pagecontext: {
          type: "object",
          description: "Page context information.",
          properties: {
            contextid: { type: "integer", minimum: 1 },
          },
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: {} },
  },
  {
    name: "tool_lp_data_for_user_competency_summary",
    moodleFunction: "tool_lp_data_for_user_competency_summary",
    description:
      "Gets user competency summary data. Returns user's proficiency level and evidence for a competency.",
    inputSchema: {
      type: "object",
      properties: {
        userid: {
          type: "integer",
          minimum: 1,
          description: "User ID to get competency summary for.",
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
    examples: { minimal: { userid: 5, competencyid: 10 } },
  },
  {
    name: "tool_lp_data_for_user_competency_summary_in_course",
    moodleFunction: "tool_lp_data_for_user_competency_summary_in_course",
    description:
      "Gets user competency summary in a course context. Returns proficiency and evidence within a specific course.",
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
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID context.",
        },
      },
      required: ["userid", "competencyid", "courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: { minimal: { userid: 5, competencyid: 10, courseid: 2 } },
  },
  {
    name: "tool_lp_data_for_user_competency_summary_in_plan",
    moodleFunction: "tool_lp_data_for_user_competency_summary_in_plan",
    description:
      "Gets user competency summary in a learning plan context. Returns proficiency within a specific plan.",
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
        planid: {
          type: "integer",
          minimum: 1,
          description: "Learning plan ID context.",
        },
      },
      required: ["userid", "competencyid", "planid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: { minimal: { userid: 5, competencyid: 10, planid: 3 } },
  },
  {
    name: "tool_lp_data_for_user_evidence_list_page",
    moodleFunction: "tool_lp_data_for_user_evidence_list_page",
    description:
      "Gets data for the user evidence list page. Returns all evidence of prior learning for a user.",
    inputSchema: {
      type: "object",
      properties: {
        userid: {
          type: "integer",
          minimum: 1,
          description: "User ID to get evidence for.",
        },
      },
      required: ["userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: { minimal: { userid: 5 } },
  },
  {
    name: "tool_lp_data_for_user_evidence_page",
    moodleFunction: "tool_lp_data_for_user_evidence_page",
    description:
      "Gets data for a specific user evidence page. Returns evidence details and linked competencies.",
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
    examples: { minimal: { id: 10 } },
  },
  {
    name: "tool_lp_list_courses_using_competency",
    moodleFunction: "tool_lp_list_courses_using_competency",
    description:
      "Lists courses that use a specific competency. Returns courses where the competency is linked.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          minimum: 1,
          description: "Competency ID to find courses for.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: { minimal: { id: 10 } },
  },
  {
    name: "tool_lp_search_cohorts",
    moodleFunction: "tool_lp_search_cohorts",
    description:
      "Searches for cohorts to assign to learning plan templates. Returns matching cohorts.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Search query for cohort name.",
        },
        context: {
          type: "object",
          description: "Context to search within.",
          properties: {
            contextid: { type: "integer", minimum: 1 },
          },
        },
        includes: {
          type: "string",
          enum: ["parents", "self", "children"],
          description: "Include contexts: parents, self, or children.",
        },
        limitfrom: {
          type: "integer",
          minimum: 0,
          description: "Pagination offset.",
        },
        limitnum: {
          type: "integer",
          minimum: 0,
          description: "Pagination limit.",
        },
      },
      required: ["query"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: { query: "students" } },
  },
  {
    name: "tool_lp_search_users",
    moodleFunction: "tool_lp_search_users",
    description:
      "Searches for users in the learning plans context. Returns users matching the query for plan assignment.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Search query for user name or email.",
        },
        capability: {
          type: "string",
          description: "Required capability to filter users.",
        },
        limitfrom: {
          type: "integer",
          minimum: 0,
          description: "Pagination offset.",
        },
        limitnum: {
          type: "integer",
          minimum: 0,
          description: "Pagination limit.",
        },
      },
      required: ["query"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: { minimal: { query: "john" } },
  },
];
