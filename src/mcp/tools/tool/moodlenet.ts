import type { ToolSpec } from "../../types.js";

export const tool_moodlenet_tools: ToolSpec[] = [
  {
    name: "tool_moodlenet_search_courses",
    moodleFunction: "tool_moodlenet_search_courses",
    description:
      "Searches courses that can be used as import targets for MoodleNet resources. Returns courses where the user can import content.",
    inputSchema: {
      type: "object",
      properties: {
        searchvalue: {
          type: "string",
          description: "Search term to filter courses by name.",
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: {},
      typical: { searchvalue: "Introduction" },
    },
  },
  {
    name: "tool_moodlenet_verify_webfinger",
    moodleFunction: "tool_moodlenet_verify_webfinger",
    description:
      "Verifies a MoodleNet WebFinger address. Checks if the provided MoodleNet profile address is valid and reachable.",
    inputSchema: {
      type: "object",
      properties: {
        profileurl: {
          type: "string",
          minLength: 1,
          description: "MoodleNet WebFinger address (e.g., '@user@moodlenet.example.com').",
        },
        course: {
          type: "integer",
          minimum: 1,
          description: "Course ID context for the verification.",
        },
        section: {
          type: "integer",
          minimum: 0,
          description: "Section number within the course.",
        },
      },
      required: ["profileurl", "course"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { profileurl: "@user@moodlenet.example.com", course: 2 },
    },
  },
];
