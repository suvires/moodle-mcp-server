import type { ToolSpec } from "../../types.js";

export const core_completion_tools: ToolSpec[] = [
  {
    name: "core_completion_get_activities_completion_status",
    moodleFunction: "core_completion_get_activities_completion_status",
    description:
      "Gets the completion status of all activities in a course for a user. Returns array of activity completion states.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID to get completion status for.",
        },
        userid: {
          type: "integer",
          minimum: 1,
          description: "User ID to get completion status for.",
        },
      },
      required: ["courseid", "userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { courseid: 2, userid: 5 },
    },
  },
  {
    name: "core_completion_get_course_completion_status",
    moodleFunction: "core_completion_get_course_completion_status",
    description:
      "Gets the overall course completion status for a user, including completion criteria progress. Returns completion status object.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID.",
        },
        userid: {
          type: "integer",
          minimum: 1,
          description: "User ID to check completion for.",
        },
      },
      required: ["courseid", "userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { courseid: 2, userid: 5 },
    },
  },
  {
    name: "core_completion_mark_course_self_completed",
    moodleFunction: "core_completion_mark_course_self_completed",
    description:
      "Allows a student to mark a course as self-completed (if self-completion is enabled as a completion criterion). Returns success status.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: {
          type: "integer",
          minimum: 1,
          description: "Course ID to mark as self-completed.",
        },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { courseid: 2 },
    },
  },
  {
    name: "core_completion_override_activity_completion_status",
    moodleFunction: "core_completion_override_activity_completion_status",
    description:
      "Overrides an activity's completion status for a user (teacher/admin action). Useful for manual completion adjustments.",
    inputSchema: {
      type: "object",
      properties: {
        userid: {
          type: "integer",
          minimum: 1,
          description: "User ID to override completion for.",
        },
        cmid: {
          type: "integer",
          minimum: 1,
          description: "Course module ID (activity ID).",
        },
        newstate: {
          type: "integer",
          enum: [0, 1, 2, 3],
          description:
            "New completion state: 0=incomplete, 1=complete, 2=complete-pass, 3=complete-fail.",
        },
      },
      required: ["userid", "cmid", "newstate"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { userid: 5, cmid: 10, newstate: 1 },
    },
  },
  {
    name: "core_completion_update_activity_completion_status_manually",
    moodleFunction: "core_completion_update_activity_completion_status_manually",
    description:
      "Updates activity completion manually for the current user (checkbox-style completion). Only works for activities with manual completion enabled.",
    inputSchema: {
      type: "object",
      properties: {
        cmid: {
          type: "integer",
          minimum: 1,
          description: "Course module ID (activity ID).",
        },
        completed: {
          type: "boolean",
          description: "True to mark complete, false to mark incomplete.",
        },
      },
      required: ["cmid", "completed"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { cmid: 10, completed: true },
    },
  },
];
