import type { ToolSpec } from "../../types.js";

export const core_search_tools: ToolSpec[] = [
  {
    name: "core_search_get_search_areas_list",
    moodleFunction: "core_search_get_search_areas_list",
    description: "Returns the list of available global search areas.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {},
    },
  },

  {
    name: "core_search_get_results",
    moodleFunction: "core_search_get_results",
    description:
      "Returns global search results for a given query, optionally filtered by search areas and paginated.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Search query text.",
          minLength: 1,
        },
        areas: {
          type: "array",
          description:
            "Optional list of search area ids to restrict the search (as returned by core_search_get_search_areas_list).",
          items: { type: "string", minLength: 1 },
        },
        page: {
          type: "integer",
          description: "Results page number (0-based).",
          minimum: 0,
          default: 0,
        },
        perpage: {
          type: "integer",
          description: "Number of results per page.",
          minimum: 1,
          default: 10,
        },
      },
      required: ["query"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { query: "biología", page: 0, perpage: 10 },
    },
  },

  {
    name: "core_search_get_top_results",
    moodleFunction: "core_search_get_top_results",
    description:
      "Returns top search results for a given query (useful for quick search/autocomplete experiences).",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Search query text.",
          minLength: 1,
        },
        areas: {
          type: "array",
          description:
            "Optional list of search area ids to restrict the search (as returned by core_search_get_search_areas_list).",
          items: { type: "string", minLength: 1 },
        },
        limit: {
          type: "integer",
          description: "Maximum number of results to return.",
          minimum: 1,
          default: 5,
        },
      },
      required: ["query"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { query: "foro", limit: 5 },
    },
  },

  {
    name: "core_search_get_relevant_users",
    moodleFunction: "core_search_get_relevant_users",
    description:
      "Returns users relevant to a search query (e.g., matching identity fields), as filtered by Moodle permissions.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Search query text.",
          minLength: 1,
        },
        limit: {
          type: "integer",
          description: "Maximum number of users to return.",
          minimum: 1,
          default: 5,
        },
      },
      required: ["query"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { query: "ana", limit: 5 },
    },
  },

  {
    name: "core_search_view_results",
    moodleFunction: "core_search_view_results",
    description:
      "Records that the current user has viewed a set of search results (used for tracking/analytics/behaviour parity with Moodle UI).",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Search query text used to produce the results.",
          minLength: 1,
        },
        areas: {
          type: "array",
          description:
            "Optional list of search area ids used for the search (as returned by core_search_get_search_areas_list).",
          items: { type: "string", minLength: 1 },
        },
        page: {
          type: "integer",
          description: "Results page number (0-based).",
          minimum: 0,
          default: 0,
        },
        perpage: {
          type: "integer",
          description: "Number of results per page.",
          minimum: 1,
          default: 10,
        },
      },
      required: ["query"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { query: "biología", page: 0, perpage: 10 },
    },
  },
];