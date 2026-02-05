import type { ToolSpec } from "../../types.js";

export const enrol_meta_tools: ToolSpec[] = [
  {
    name: "enrol_meta_add_instances",
    moodleFunction: "enrol_meta_add_instances",
    description:
      "Creates one or more meta enrolment instances, linking child courses to a parent (meta) course so enrolments can be synchronized.",
    inputSchema: {
      type: "object",
      properties: {
        instances: {
          type: "array",
          description:
            "List of meta enrolment instances to create. Each item links a child course to a parent (meta) course.",
          minItems: 1,
          items: {
            type: "object",
            properties: {
              courseid: {
                type: "integer",
                description: "The course ID where the meta enrolment instance will be created (the child course).",
                minimum: 1,
              },
              customint1: {
                type: "integer",
                description: "The parent (meta) course ID to link to (stored as customint1 in the instance).",
                minimum: 1,
              },
            },
            required: ["courseid", "customint1"],
            additionalProperties: false,
          },
        },
      },
      required: ["instances"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: {
        instances: [{ courseid: 101, customint1: 202 }],
      },
    },
  },
  {
    name: "enrol_meta_delete_instances",
    moodleFunction: "enrol_meta_delete_instances",
    description:
      "Deletes one or more meta enrolment instances, removing the link between child courses and their parent (meta) course.",
    inputSchema: {
      type: "object",
      properties: {
        instances: {
          type: "array",
          description:
            "List of meta enrolment instances to delete. Each item identifies the meta enrolment instance by its enrol instance ID.",
          minItems: 1,
          items: {
            type: "object",
            properties: {
              instanceid: {
                type: "integer",
                description: "The enrolment instance ID to delete.",
                minimum: 1,
              },
            },
            required: ["instanceid"],
            additionalProperties: false,
          },
        },
      },
      required: ["instances"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: {
        instances: [{ instanceid: 321 }],
      },
    },
  },
];