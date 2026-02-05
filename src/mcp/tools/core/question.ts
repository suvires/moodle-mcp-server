import type { ToolSpec } from "../../types.js";

export const core_question_tools: ToolSpec[] = [
  {
    name: "core_question_get_random_question_summaries",
    moodleFunction: "core_question_get_random_question_summaries",
    description:
      "Gets summaries of random questions from a category for quiz random question slots. Returns question summaries with pagination info.",
    inputSchema: {
      type: "object",
      properties: {
        categoryid: {
          type: "integer",
          minimum: 1,
          description: "Question category ID to fetch questions from.",
        },
        includesubcategories: {
          type: "boolean",
          description: "Include questions from subcategories. Default false.",
        },
        tagids: {
          type: "array",
          description: "Filter by tag IDs (questions must have all tags).",
          items: {
            type: "integer",
            minimum: 1,
          },
        },
        contextid: {
          type: "integer",
          minimum: 1,
          description: "Context ID for access checks.",
        },
        limit: {
          type: "integer",
          minimum: 0,
          description: "Maximum questions to return. 0 for all.",
        },
        offset: {
          type: "integer",
          minimum: 0,
          description: "Number of questions to skip for pagination.",
        },
      },
      required: ["categoryid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { categoryid: 5 },
    },
  },
  {
    name: "core_question_move_questions",
    moodleFunction: "core_question_move_questions",
    description:
      "Moves questions to a different category. Questions must not be in use by quizzes or be hidden. Returns success status.",
    inputSchema: {
      type: "object",
      properties: {
        questionids: {
          type: "array",
          minItems: 1,
          description: "Array of question IDs to move.",
          items: {
            type: "integer",
            minimum: 1,
          },
        },
        targetcategoryid: {
          type: "integer",
          minimum: 1,
          description: "Destination category ID.",
        },
      },
      required: ["questionids", "targetcategoryid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { questionids: [10, 11, 12], targetcategoryid: 5 },
    },
  },
  {
    name: "core_question_search_shared_banks",
    moodleFunction: "core_question_search_shared_banks",
    description:
      "Searches for shared question banks that can be accessed. Returns list of matching banks with metadata.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Search query string for bank names.",
        },
        contextid: {
          type: "integer",
          minimum: 1,
          description: "Current context ID for access checks.",
        },
        limit: {
          type: "integer",
          minimum: 1,
          description: "Maximum results to return.",
        },
      },
      required: ["contextid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { contextid: 50 },
    },
  },
  {
    name: "core_question_update_flag",
    moodleFunction: "core_question_update_flag",
    description:
      "Updates the flag (bookmark) state for a question in a quiz attempt. Used for students to mark questions for review.",
    inputSchema: {
      type: "object",
      properties: {
        qubaid: {
          type: "integer",
          minimum: 1,
          description: "Question usage by activity ID (attempt ID).",
        },
        questionid: {
          type: "integer",
          minimum: 1,
          description: "Question ID being flagged.",
        },
        qaid: {
          type: "integer",
          minimum: 1,
          description: "Question attempt ID.",
        },
        slot: {
          type: "integer",
          minimum: 1,
          description: "Slot number in the quiz attempt.",
        },
        checksum: {
          type: "string",
          minLength: 1,
          description: "Security checksum for the flag operation.",
        },
        newstate: {
          type: "integer",
          enum: [0, 1],
          description: "New flag state: 0=unflagged, 1=flagged.",
        },
      },
      required: ["qubaid", "questionid", "qaid", "slot", "checksum", "newstate"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: {
        qubaid: 100,
        questionid: 5,
        qaid: 200,
        slot: 1,
        checksum: "abc123",
        newstate: 1,
      },
    },
  },
];
