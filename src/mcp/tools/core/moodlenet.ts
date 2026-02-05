import type { ToolSpec } from "../../types.js";

export const core_moodlenet_tools: ToolSpec[] = [
  {
    name: "core_moodlenet_auth_check",
    moodleFunction: "core_moodlenet_auth_check",
    description:
      "Checks if the user is authenticated with MoodleNet. Returns authentication status and profile info if connected.",
    inputSchema: {
      type: "object",
      properties: {
        issuerid: {
          type: "integer",
          minimum: 1,
          description: "OAuth2 issuer ID for MoodleNet.",
        },
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID context for the check.",
        },
      },
      required: ["issuerid", "courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { issuerid: 1, courseid: 2 },
    },
  },
  {
    name: "core_moodlenet_get_share_info_activity",
    moodleFunction: "core_moodlenet_get_share_info_activity",
    description:
      "Gets information about sharing an activity to MoodleNet. Returns sharing capabilities and activity metadata.",
    inputSchema: {
      type: "object",
      properties: {
        cmid: {
          type: "integer",
          minimum: 1,
          description: "Course module ID of the activity to share.",
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
    name: "core_moodlenet_get_shared_course_info",
    moodleFunction: "core_moodlenet_get_shared_course_info",
    description:
      "Gets information about sharing a course to MoodleNet. Returns course metadata and sharing options.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID to get sharing info for.",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { courseid: 2 },
    },
  },
  {
    name: "core_moodlenet_send_activity",
    moodleFunction: "core_moodlenet_send_activity",
    description:
      "Shares an activity to MoodleNet as a resource. Returns the MoodleNet resource URL on success.",
    inputSchema: {
      type: "object",
      properties: {
        issuerid: {
          type: "integer",
          minimum: 1,
          description: "OAuth2 issuer ID for MoodleNet.",
        },
        cmid: {
          type: "integer",
          minimum: 1,
          description: "Course module ID of the activity to share.",
        },
        shareformat: {
          type: "integer",
          description: "Format for sharing: 0=backup file, 1=other formats.",
        },
      },
      required: ["issuerid", "cmid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { issuerid: 1, cmid: 10 },
    },
  },
  {
    name: "core_moodlenet_send_course",
    moodleFunction: "core_moodlenet_send_course",
    description:
      "Shares an entire course to MoodleNet as a backup file. Returns the MoodleNet resource URL on success.",
    inputSchema: {
      type: "object",
      properties: {
        issuerid: {
          type: "integer",
          minimum: 1,
          description: "OAuth2 issuer ID for MoodleNet.",
        },
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID to share.",
        },
      },
      required: ["issuerid", "courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: { issuerid: 1, courseid: 2 },
    },
  },
];
