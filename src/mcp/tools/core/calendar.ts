import type { ToolSpec } from "../../types.js";

export const core_calendar_tools: ToolSpec[] = [
  {
    name: "core_calendar_get_calendar_event_by_id",
    moodleFunction: "core_calendar_get_calendar_event_by_id",
    description:
      "Gets a single calendar event by its ID. Returns event details including name, description, times, and associated course/module.",
    inputSchema: {
      type: "object",
      properties: {
        eventid: {
          type: "integer",
          minimum: 1,
          description: "Calendar event ID to retrieve.",
        },
      },
      required: ["eventid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { eventid: 10 },
    },
  },
  {
    name: "core_calendar_get_calendar_events",
    moodleFunction: "core_calendar_get_calendar_events",
    description:
      "Gets calendar events within a time range with optional filtering by course, group, or event type. Returns array of event objects.",
    inputSchema: {
      type: "object",
      properties: {
        events: {
          type: "object",
          description: "Event filter criteria.",
          properties: {
            eventids: {
              type: "array",
              description: "Specific event IDs to retrieve.",
              items: { type: "integer", minimum: 1 },
            },
            courseids: {
              type: "array",
              description: "Course IDs to filter events by.",
              items: { type: "integer", minimum: 1 },
            },
            groupids: {
              type: "array",
              description: "Group IDs to filter events by.",
              items: { type: "integer", minimum: 1 },
            },
            categoryids: {
              type: "array",
              description: "Category IDs to filter events by.",
              items: { type: "integer", minimum: 1 },
            },
          },
          additionalProperties: false,
        },
        options: {
          type: "object",
          description: "Query options.",
          properties: {
            userevents: {
              type: "boolean",
              description: "Include user events. Default true.",
            },
            siteevents: {
              type: "boolean",
              description: "Include site-wide events. Default true.",
            },
            timestart: {
              type: "integer",
              description: "Start of time range (Unix timestamp). Default 0.",
            },
            timeend: {
              type: "integer",
              description: "End of time range (Unix timestamp). Default now + 1 month.",
            },
            ignorehidden: {
              type: "boolean",
              description: "Ignore hidden events. Default true.",
            },
          },
          additionalProperties: false,
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { events: { courseids: [2] }, options: { userevents: true } },
    },
  },
  {
    name: "core_calendar_update_event_start_day",
    moodleFunction: "core_calendar_update_event_start_day",
    description:
      "Updates the start day of a calendar event (drag-and-drop in calendar view). Returns updated event data.",
    inputSchema: {
      type: "object",
      properties: {
        eventid: {
          type: "integer",
          minimum: 1,
          description: "Calendar event ID to update.",
        },
        daytimestamp: {
          type: "integer",
          description: "Unix timestamp of the new start day (any time on that day).",
        },
      },
      required: ["eventid", "daytimestamp"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { eventid: 10, daytimestamp: 1704067200 },
    },
  },
];
