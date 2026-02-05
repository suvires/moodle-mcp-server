import type { ToolSpec } from "../../types.js";

export const core_filters_tools: ToolSpec[] = [
  {
    name: "core_filters_get_all_states",
    moodleFunction: "core_filters_get_all_states",
    description:
      "Gets the state of all text filters at site level. Returns array of filter objects with name, active state, and sort order.",
    inputSchema: {
      type: "object",
      properties: {},
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: {},
    },
  },
  {
    name: "core_filters_get_available_in_context",
    moodleFunction: "core_filters_get_available_in_context",
    description:
      "Gets text filters available in specific contexts. Returns which filters are active for processing content in those contexts.",
    inputSchema: {
      type: "object",
      properties: {
        contexts: {
          type: "array",
          minItems: 1,
          description: "Array of contexts to check filter availability.",
          items: {
            type: "object",
            properties: {
              contextlevel: {
                type: "string",
                description:
                  "Context level: 'system', 'coursecat', 'course', 'module', etc.",
              },
              instanceid: {
                type: "integer",
                minimum: 0,
                description: "Instance ID for the context level.",
              },
            },
            required: ["contextlevel", "instanceid"],
            additionalProperties: false,
          },
        },
      },
      required: ["contexts"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {
        contexts: [{ contextlevel: "course", instanceid: 2 }],
      },
    },
  },
];
