import type { ToolSpec } from "../../types.js";

export const enrol_manual_tools: ToolSpec[] = [
  {
    name: "enrol_manual_enrol_users",
    moodleFunction: "enrol_manual_enrol_users",
    description:
      "Enrols one or more users into a course using the manual enrolment method (manual enrol plugin instance).",
    inputSchema: {
      type: "object",
      properties: {
        enrolments: {
          type: "array",
          description:
            "List of enrolment operations to perform. Each item enrols one user into one course, optionally specifying role, enrol instance, and time window.",
          minItems: 1,
          items: {
            type: "object",
            properties: {
              roleid: {
                type: "integer",
                description: "Role ID to assign to the user in the course.",
                minimum: 1,
              },
              userid: {
                type: "integer",
                description: "User ID to enrol.",
                minimum: 1,
              },
              courseid: {
                type: "integer",
                description: "Course ID where the user will be enrolled.",
                minimum: 1,
              },
              starttime: {
                type: "integer",
                description:
                  "Enrolment start time as a Unix timestamp (seconds). Use 0 or omit for default/now depending on site config.",
                minimum: 0,
              },
              endtime: {
                type: "integer",
                description:
                  "Enrolment end time as a Unix timestamp (seconds). Use 0 or omit for no end time, depending on site config.",
                minimum: 0,
              },
              suspend: {
                type: "integer",
                description:
                  "Whether to suspend the enrolment on creation (1 = suspended, 0 = active). If omitted, defaults to active.",
                enum: [0, 1],
              },
            },
            required: ["roleid", "userid", "courseid"],
            additionalProperties: false,
          },
        },
      },
      required: ["enrolments"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: {
        enrolments: [{ roleid: 5, userid: 123, courseid: 45 }],
      },
    },
  },
  {
    name: "enrol_manual_unenrol_users",
    moodleFunction: "enrol_manual_unenrol_users",
    description:
      "Unenrols one or more users from a course using the manual enrolment method.",
    inputSchema: {
      type: "object",
      properties: {
        enrolments: {
          type: "array",
          description:
            "List of unenrolment operations to perform. Each item unenrols one user from one course.",
          minItems: 1,
          items: {
            type: "object",
            properties: {
              userid: {
                type: "integer",
                description: "User ID to unenrol.",
                minimum: 1,
              },
              courseid: {
                type: "integer",
                description: "Course ID from which the user will be unenrolled.",
                minimum: 1,
              },
            },
            required: ["userid", "courseid"],
            additionalProperties: false,
          },
        },
      },
      required: ["enrolments"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher"],
    examples: {
      minimal: {
        enrolments: [{ userid: 123, courseid: 45 }],
      },
    },
  },
];