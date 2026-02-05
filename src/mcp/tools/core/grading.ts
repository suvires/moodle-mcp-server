import type { ToolSpec } from "../../types.js";

export const core_grading_tools: ToolSpec[] = [
  {
    name: "core_grading_get_definitions",
    moodleFunction: "core_grading_get_definitions",
    description:
      "Gets grading form definitions (rubrics, marking guides) for activities. Returns definition details including criteria.",
    inputSchema: {
      type: "object",
      properties: {
        cmids: {
          type: "array",
          minItems: 1,
          description: "Array of course module IDs to get grading definitions for.",
          items: {
            type: "integer",
            minimum: 1,
          },
        },
        areaname: {
          type: "string",
          description: "Grading area name (e.g., 'submissions' for assignments). Default empty.",
        },
        activeonly: {
          type: "boolean",
          description: "If true, only return active definitions. Default true.",
        },
      },
      required: ["cmids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { cmids: [10, 11, 12] },
    },
  },
  {
    name: "core_grading_get_gradingform_instances",
    moodleFunction: "core_grading_get_gradingform_instances",
    description:
      "Gets filled grading form instances (rubric/guide grades) for specific items. Returns grader's assessments with filled criteria.",
    inputSchema: {
      type: "object",
      properties: {
        definitionid: {
          type: "integer",
          minimum: 1,
          description: "Grading definition ID.",
        },
        itemid: {
          type: "integer",
          minimum: 0,
          description:
            "Item ID being graded (e.g., submission ID). Use 0 for all items.",
        },
        onlyneedupdate: {
          type: "boolean",
          description: "If true, only return instances that need regrading. Default false.",
        },
        graderid: {
          type: "integer",
          minimum: 0,
          description: "Filter by grader user ID. Use 0 for all graders.",
        },
      },
      required: ["definitionid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { definitionid: 5, itemid: 0 },
    },
  },
  {
    name: "core_grading_save_definitions",
    moodleFunction: "core_grading_save_definitions",
    description:
      "Saves grading form definitions (rubrics, marking guides) for activities. Creates or updates grading criteria.",
    inputSchema: {
      type: "object",
      properties: {
        areas: {
          type: "array",
          minItems: 1,
          description: "List of grading area definitions to save.",
          items: {
            type: "object",
            properties: {
              cmid: {
                type: "integer",
                minimum: 1,
                description: "Course module ID.",
              },
              contextid: {
                type: "integer",
                minimum: 1,
                description: "Context ID (alternative to cmid).",
              },
              component: {
                type: "string",
                description: "Component name (e.g., 'mod_assign').",
              },
              areaname: {
                type: "string",
                description: "Grading area name.",
              },
              activemethod: {
                type: "string",
                enum: ["rubric", "guide", ""],
                description:
                  "Active grading method. Empty string disables advanced grading.",
              },
              definitions: {
                type: "array",
                description: "Grading form definitions (rubric/guide criteria).",
                items: {
                  type: "object",
                  additionalProperties: true,
                },
              },
            },
            required: ["cmid", "areaname"],
            additionalProperties: true,
          },
        },
      },
      required: ["areas"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: {
        areas: [{ cmid: 10, areaname: "submissions", activemethod: "rubric" }],
      },
    },
  },
];
