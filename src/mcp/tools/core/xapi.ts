import type { ToolSpec } from "../../types.js";

export const core_xapi_tools: ToolSpec[] = [
  {
    name: "core_xapi_delete_state",
    moodleFunction: "core_xapi_delete_state",
    description:
      "Deletes a specific xAPI state document. Used by H5P and other xAPI-compliant activities to manage state data.",
    inputSchema: {
      type: "object",
      properties: {
        component: {
          type: "string",
          minLength: 1,
          description: "Component name (e.g., 'mod_h5pactivity').",
        },
        activityId: {
          type: "string",
          minLength: 1,
          description: "xAPI activity IRI identifier.",
        },
        agent: {
          type: "string",
          minLength: 1,
          description: "JSON-encoded xAPI agent object.",
        },
        stateId: {
          type: "string",
          minLength: 1,
          description: "State document identifier.",
        },
        registration: {
          type: "string",
          description: "Optional registration UUID for the state.",
        },
      },
      required: ["component", "activityId", "agent", "stateId"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: {
        component: "mod_h5pactivity",
        activityId: "http://example.com/activities/1",
        agent: '{"mbox":"mailto:user@example.com"}',
        stateId: "state1",
      },
    },
  },
  {
    name: "core_xapi_delete_states",
    moodleFunction: "core_xapi_delete_states",
    description:
      "Deletes all xAPI state documents for an activity/agent combination. Useful for resetting activity state.",
    inputSchema: {
      type: "object",
      properties: {
        component: {
          type: "string",
          minLength: 1,
          description: "Component name (e.g., 'mod_h5pactivity').",
        },
        activityId: {
          type: "string",
          minLength: 1,
          description: "xAPI activity IRI identifier.",
        },
        agent: {
          type: "string",
          minLength: 1,
          description: "JSON-encoded xAPI agent object.",
        },
        registration: {
          type: "string",
          description: "Optional registration UUID to limit deletion scope.",
        },
      },
      required: ["component", "activityId", "agent"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: {
        component: "mod_h5pactivity",
        activityId: "http://example.com/activities/1",
        agent: '{"mbox":"mailto:user@example.com"}',
      },
    },
  },
  {
    name: "core_xapi_get_state",
    moodleFunction: "core_xapi_get_state",
    description:
      "Retrieves a specific xAPI state document. Returns the stored state data for the activity/agent/stateId combination.",
    inputSchema: {
      type: "object",
      properties: {
        component: {
          type: "string",
          minLength: 1,
          description: "Component name (e.g., 'mod_h5pactivity').",
        },
        activityId: {
          type: "string",
          minLength: 1,
          description: "xAPI activity IRI identifier.",
        },
        agent: {
          type: "string",
          minLength: 1,
          description: "JSON-encoded xAPI agent object.",
        },
        stateId: {
          type: "string",
          minLength: 1,
          description: "State document identifier.",
        },
        registration: {
          type: "string",
          description: "Optional registration UUID.",
        },
      },
      required: ["component", "activityId", "agent", "stateId"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: {
        component: "mod_h5pactivity",
        activityId: "http://example.com/activities/1",
        agent: '{"mbox":"mailto:user@example.com"}',
        stateId: "state1",
      },
    },
  },
  {
    name: "core_xapi_get_states",
    moodleFunction: "core_xapi_get_states",
    description:
      "Lists all state document IDs for an activity/agent combination. Returns array of stateId strings.",
    inputSchema: {
      type: "object",
      properties: {
        component: {
          type: "string",
          minLength: 1,
          description: "Component name (e.g., 'mod_h5pactivity').",
        },
        activityId: {
          type: "string",
          minLength: 1,
          description: "xAPI activity IRI identifier.",
        },
        agent: {
          type: "string",
          minLength: 1,
          description: "JSON-encoded xAPI agent object.",
        },
        registration: {
          type: "string",
          description: "Optional registration UUID to filter states.",
        },
        since: {
          type: "string",
          description: "ISO 8601 timestamp to filter states modified after this time.",
        },
      },
      required: ["component", "activityId", "agent"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: {
        component: "mod_h5pactivity",
        activityId: "http://example.com/activities/1",
        agent: '{"mbox":"mailto:user@example.com"}',
      },
    },
  },
  {
    name: "core_xapi_post_state",
    moodleFunction: "core_xapi_post_state",
    description:
      "Stores or updates an xAPI state document. Used to save activity progress and state data.",
    inputSchema: {
      type: "object",
      properties: {
        component: {
          type: "string",
          minLength: 1,
          description: "Component name (e.g., 'mod_h5pactivity').",
        },
        activityId: {
          type: "string",
          minLength: 1,
          description: "xAPI activity IRI identifier.",
        },
        agent: {
          type: "string",
          minLength: 1,
          description: "JSON-encoded xAPI agent object.",
        },
        stateId: {
          type: "string",
          minLength: 1,
          description: "State document identifier.",
        },
        stateData: {
          type: "string",
          description: "JSON-encoded state data to store.",
        },
        registration: {
          type: "string",
          description: "Optional registration UUID.",
        },
      },
      required: ["component", "activityId", "agent", "stateId", "stateData"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: {
        component: "mod_h5pactivity",
        activityId: "http://example.com/activities/1",
        agent: '{"mbox":"mailto:user@example.com"}',
        stateId: "state1",
        stateData: '{"progress":50}',
      },
    },
  },
  {
    name: "core_xapi_statement_post",
    moodleFunction: "core_xapi_statement_post",
    description:
      "Posts an xAPI statement to Moodle. Records learning activity statements for analytics and completion tracking.",
    inputSchema: {
      type: "object",
      properties: {
        component: {
          type: "string",
          minLength: 1,
          description: "Component name (e.g., 'mod_h5pactivity').",
        },
        requestjson: {
          type: "string",
          minLength: 1,
          description: "JSON-encoded xAPI statement or array of statements.",
        },
      },
      required: ["component", "requestjson"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: {
        component: "mod_h5pactivity",
        requestjson:
          '{"actor":{"mbox":"mailto:user@example.com"},"verb":{"id":"http://adlnet.gov/expapi/verbs/completed"},"object":{"id":"http://example.com/activities/1"}}',
      },
    },
  },
];
