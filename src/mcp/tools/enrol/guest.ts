import type { ToolSpec } from "../../types.js";

export const enrol_guest_tools: ToolSpec[] = [
  {
    name: "enrol_guest_get_instance_info",
    moodleFunction: "enrol_guest_get_instance_info",
    description:
      "Gets information about a guest enrolment instance, typically including its status and configuration for a given course.",
    inputSchema: {
      type: "object",
      properties: {
        instanceid: {
          type: "integer",
          description: "The enrolment instance ID (enrol instance id) for the guest enrolment method.",
          minimum: 1,
        },
      },
      required: ["instanceid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: {
        instanceid: 123,
      },
    },
  },
];