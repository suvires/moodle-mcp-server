import type { ToolSpec } from "../../types.js";

export const enrol_self_tools: ToolSpec[] = [
  {
    name: "enrol_self_get_instance_info",
    moodleFunction: "enrol_self_get_instance_info",
    description:
      "Gets information about a self enrolment instance (e.g., whether it is enabled, if an enrolment key is required, and other configuration details).",
    inputSchema: {
      type: "object",
      properties: {
        instanceid: {
          type: "integer",
          description: "The enrolment instance ID (enrol instance id) for the self enrolment method.",
          minimum: 1,
        },
      },
      required: ["instanceid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {
        instanceid: 123,
      },
    },
  },
  {
    name: "enrol_self_enrol_user",
    moodleFunction: "enrol_self_enrol_user",
    description:
      "Self-enrols the current authenticated user into a course using an enabled self enrolment instance. If the instance requires an enrolment key, provide it via password.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          description: "Course ID to self-enrol into.",
          minimum: 1,
        },
        password: {
          type: "string",
          description:
            "Enrolment key/password for the self enrolment instance (only required if the instance is configured to require it).",
          default: "",
        },
        instanceid: {
          type: "integer",
          description:
            "Self enrolment instance ID. Use 0 to let Moodle choose the appropriate instance (recommended to pass an explicit instanceid when possible).",
          minimum: 0,
          default: 0,
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {
        courseid: 45,
      },
    },
  },
];