import type { ToolSpec } from "../../types.js";

export const core_reportbuilder_tools: ToolSpec[] = [
  {
    name: "core_reportbuilder_audiences_delete",
    moodleFunction: "core_reportbuilder_audiences_delete",
    description:
      "Deletes an audience from a custom report. Audiences control who can view the report.",
    inputSchema: {
      type: "object",
      properties: {
        reportid: {
          type: "integer",
          minimum: 1,
          description: "Report ID containing the audience.",
        },
        instanceid: {
          type: "integer",
          minimum: 1,
          description: "Audience instance ID to delete.",
        },
      },
      required: ["reportid", "instanceid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { reportid: 5, instanceid: 3 },
    },
  },
  {
    name: "core_reportbuilder_can_view_system_report",
    moodleFunction: "core_reportbuilder_can_view_system_report",
    description:
      "Checks if the current user can view a system report. Returns boolean capability status.",
    inputSchema: {
      type: "object",
      properties: {
        source: {
          type: "string",
          minLength: 1,
          description: "System report source class name.",
        },
        contextid: {
          type: "integer",
          minimum: 1,
          description: "Context ID for capability check.",
        },
        component: {
          type: "string",
          description: "Component the report belongs to.",
        },
        area: {
          type: "string",
          description: "Area within the component.",
        },
        itemid: {
          type: "integer",
          minimum: 0,
          description: "Item ID within the area.",
        },
      },
      required: ["source", "contextid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { source: "core_user\\reportbuilder\\datasource\\users", contextid: 1 },
    },
  },
  {
    name: "core_reportbuilder_columns_add",
    moodleFunction: "core_reportbuilder_columns_add",
    description:
      "Adds a column to a custom report. Returns the updated report structure.",
    inputSchema: {
      type: "object",
      properties: {
        reportid: {
          type: "integer",
          minimum: 1,
          description: "Report ID to add the column to.",
        },
        uniqueidentifier: {
          type: "string",
          minLength: 1,
          description: "Unique identifier for the column (e.g., 'user:fullname').",
        },
      },
      required: ["reportid", "uniqueidentifier"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { reportid: 5, uniqueidentifier: "user:fullname" },
    },
  },
  {
    name: "core_reportbuilder_columns_delete",
    moodleFunction: "core_reportbuilder_columns_delete",
    description: "Removes a column from a custom report.",
    inputSchema: {
      type: "object",
      properties: {
        reportid: {
          type: "integer",
          minimum: 1,
          description: "Report ID containing the column.",
        },
        columnid: {
          type: "integer",
          minimum: 1,
          description: "Column ID to delete.",
        },
      },
      required: ["reportid", "columnid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { reportid: 5, columnid: 10 },
    },
  },
  {
    name: "core_reportbuilder_columns_reorder",
    moodleFunction: "core_reportbuilder_columns_reorder",
    description: "Reorders columns in a custom report by moving a column to a new position.",
    inputSchema: {
      type: "object",
      properties: {
        reportid: {
          type: "integer",
          minimum: 1,
          description: "Report ID to reorder columns in.",
        },
        columnid: {
          type: "integer",
          minimum: 1,
          description: "Column ID to move.",
        },
        position: {
          type: "integer",
          minimum: 1,
          description: "New position for the column (1-based).",
        },
      },
      required: ["reportid", "columnid", "position"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { reportid: 5, columnid: 10, position: 2 },
    },
  },
  {
    name: "core_reportbuilder_columns_sort_get",
    moodleFunction: "core_reportbuilder_columns_sort_get",
    description:
      "Gets the current sort configuration for report columns. Returns array of sort settings.",
    inputSchema: {
      type: "object",
      properties: {
        reportid: {
          type: "integer",
          minimum: 1,
          description: "Report ID to get sort settings for.",
        },
      },
      required: ["reportid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { reportid: 5 },
    },
  },
  {
    name: "core_reportbuilder_columns_sort_reorder",
    moodleFunction: "core_reportbuilder_columns_sort_reorder",
    description: "Reorders the sort priority of columns in a report.",
    inputSchema: {
      type: "object",
      properties: {
        reportid: {
          type: "integer",
          minimum: 1,
          description: "Report ID to modify.",
        },
        columnid: {
          type: "integer",
          minimum: 1,
          description: "Column ID to reorder in sort.",
        },
        position: {
          type: "integer",
          minimum: 1,
          description: "New sort priority position.",
        },
      },
      required: ["reportid", "columnid", "position"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { reportid: 5, columnid: 10, position: 1 },
    },
  },
  {
    name: "core_reportbuilder_columns_sort_toggle",
    moodleFunction: "core_reportbuilder_columns_sort_toggle",
    description:
      "Toggles or sets the sort direction for a column. Cycles through: none → ascending → descending → none.",
    inputSchema: {
      type: "object",
      properties: {
        reportid: {
          type: "integer",
          minimum: 1,
          description: "Report ID containing the column.",
        },
        columnid: {
          type: "integer",
          minimum: 1,
          description: "Column ID to toggle sort for.",
        },
        enabled: {
          type: "boolean",
          description: "Enable or disable sorting on this column.",
        },
        direction: {
          type: "integer",
          enum: [4, 3],
          description: "Sort direction: 4=ascending (SORT_ASC), 3=descending (SORT_DESC).",
        },
      },
      required: ["reportid", "columnid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { reportid: 5, columnid: 10, enabled: true, direction: 4 },
    },
  },
  {
    name: "core_reportbuilder_conditions_add",
    moodleFunction: "core_reportbuilder_conditions_add",
    description:
      "Adds a condition (filter that report creator sets) to a custom report. Conditions restrict data shown in the report.",
    inputSchema: {
      type: "object",
      properties: {
        reportid: {
          type: "integer",
          minimum: 1,
          description: "Report ID to add the condition to.",
        },
        uniqueidentifier: {
          type: "string",
          minLength: 1,
          description: "Unique identifier for the condition (e.g., 'user:suspended').",
        },
      },
      required: ["reportid", "uniqueidentifier"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { reportid: 5, uniqueidentifier: "user:suspended" },
    },
  },
  {
    name: "core_reportbuilder_conditions_delete",
    moodleFunction: "core_reportbuilder_conditions_delete",
    description: "Removes a condition from a custom report.",
    inputSchema: {
      type: "object",
      properties: {
        reportid: {
          type: "integer",
          minimum: 1,
          description: "Report ID containing the condition.",
        },
        conditionid: {
          type: "integer",
          minimum: 1,
          description: "Condition ID to delete.",
        },
      },
      required: ["reportid", "conditionid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { reportid: 5, conditionid: 3 },
    },
  },
  {
    name: "core_reportbuilder_conditions_reorder",
    moodleFunction: "core_reportbuilder_conditions_reorder",
    description: "Reorders conditions in a custom report.",
    inputSchema: {
      type: "object",
      properties: {
        reportid: {
          type: "integer",
          minimum: 1,
          description: "Report ID to reorder conditions in.",
        },
        conditionid: {
          type: "integer",
          minimum: 1,
          description: "Condition ID to move.",
        },
        position: {
          type: "integer",
          minimum: 1,
          description: "New position for the condition.",
        },
      },
      required: ["reportid", "conditionid", "position"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { reportid: 5, conditionid: 3, position: 1 },
    },
  },
  {
    name: "core_reportbuilder_conditions_reset",
    moodleFunction: "core_reportbuilder_conditions_reset",
    description: "Resets all condition values in a report to their defaults.",
    inputSchema: {
      type: "object",
      properties: {
        reportid: {
          type: "integer",
          minimum: 1,
          description: "Report ID to reset conditions for.",
        },
      },
      required: ["reportid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { reportid: 5 },
    },
  },
  {
    name: "core_reportbuilder_filters_add",
    moodleFunction: "core_reportbuilder_filters_add",
    description:
      "Adds a user filter to a custom report. Filters allow report viewers to filter results dynamically.",
    inputSchema: {
      type: "object",
      properties: {
        reportid: {
          type: "integer",
          minimum: 1,
          description: "Report ID to add the filter to.",
        },
        uniqueidentifier: {
          type: "string",
          minLength: 1,
          description: "Unique identifier for the filter (e.g., 'user:email').",
        },
      },
      required: ["reportid", "uniqueidentifier"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { reportid: 5, uniqueidentifier: "user:email" },
    },
  },
  {
    name: "core_reportbuilder_filters_delete",
    moodleFunction: "core_reportbuilder_filters_delete",
    description: "Removes a user filter from a custom report.",
    inputSchema: {
      type: "object",
      properties: {
        reportid: {
          type: "integer",
          minimum: 1,
          description: "Report ID containing the filter.",
        },
        filterid: {
          type: "integer",
          minimum: 1,
          description: "Filter ID to delete.",
        },
      },
      required: ["reportid", "filterid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { reportid: 5, filterid: 8 },
    },
  },
  {
    name: "core_reportbuilder_filters_reorder",
    moodleFunction: "core_reportbuilder_filters_reorder",
    description: "Reorders user filters in a custom report.",
    inputSchema: {
      type: "object",
      properties: {
        reportid: {
          type: "integer",
          minimum: 1,
          description: "Report ID to reorder filters in.",
        },
        filterid: {
          type: "integer",
          minimum: 1,
          description: "Filter ID to move.",
        },
        position: {
          type: "integer",
          minimum: 1,
          description: "New position for the filter.",
        },
      },
      required: ["reportid", "filterid", "position"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { reportid: 5, filterid: 8, position: 1 },
    },
  },
  {
    name: "core_reportbuilder_filters_reset",
    moodleFunction: "core_reportbuilder_filters_reset",
    description: "Resets all user-applied filter values when viewing a report.",
    inputSchema: {
      type: "object",
      properties: {
        reportid: {
          type: "integer",
          minimum: 1,
          description: "Report ID to reset filters for.",
        },
      },
      required: ["reportid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { reportid: 5 },
    },
  },
  {
    name: "core_reportbuilder_list_reports",
    moodleFunction: "core_reportbuilder_list_reports",
    description:
      "Lists all custom reports the user can access. Returns array of report metadata.",
    inputSchema: {
      type: "object",
      properties: {
        page: {
          type: "integer",
          minimum: 0,
          description: "Page number for pagination (0-indexed).",
        },
        perpage: {
          type: "integer",
          minimum: 1,
          description: "Number of reports per page.",
        },
      },
      required: [],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: {},
    },
  },
  {
    name: "core_reportbuilder_reports_delete",
    moodleFunction: "core_reportbuilder_reports_delete",
    description: "Deletes a custom report and all its configuration.",
    inputSchema: {
      type: "object",
      properties: {
        reportid: {
          type: "integer",
          minimum: 1,
          description: "Report ID to delete.",
        },
      },
      required: ["reportid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { reportid: 5 },
    },
  },
  {
    name: "core_reportbuilder_reports_get",
    moodleFunction: "core_reportbuilder_reports_get",
    description:
      "Gets detailed information about a custom report including its configuration.",
    inputSchema: {
      type: "object",
      properties: {
        reportid: {
          type: "integer",
          minimum: 1,
          description: "Report ID to retrieve.",
        },
        editmode: {
          type: "boolean",
          description: "Whether to include edit mode data. Default false.",
        },
      },
      required: ["reportid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { reportid: 5 },
    },
  },
  {
    name: "core_reportbuilder_retrieve_report",
    moodleFunction: "core_reportbuilder_retrieve_report",
    description:
      "Retrieves a custom report with its data for viewing. Returns report structure and row data.",
    inputSchema: {
      type: "object",
      properties: {
        reportid: {
          type: "integer",
          minimum: 1,
          description: "Report ID to retrieve.",
        },
        page: {
          type: "integer",
          minimum: 0,
          description: "Page number for data pagination.",
        },
        perpage: {
          type: "integer",
          minimum: 1,
          description: "Rows per page.",
        },
      },
      required: ["reportid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { reportid: 5 },
    },
  },
  {
    name: "core_reportbuilder_retrieve_system_report",
    moodleFunction: "core_reportbuilder_retrieve_system_report",
    description:
      "Retrieves a system report (built-in report) with its data. System reports are predefined by Moodle core or plugins.",
    inputSchema: {
      type: "object",
      properties: {
        source: {
          type: "string",
          minLength: 1,
          description: "System report source class name.",
        },
        contextid: {
          type: "integer",
          minimum: 1,
          description: "Context ID for the report.",
        },
        component: {
          type: "string",
          description: "Component the report belongs to.",
        },
        area: {
          type: "string",
          description: "Area within the component.",
        },
        itemid: {
          type: "integer",
          minimum: 0,
          description: "Item ID within the area.",
        },
        page: {
          type: "integer",
          minimum: 0,
          description: "Page number for pagination.",
        },
        perpage: {
          type: "integer",
          minimum: 1,
          description: "Rows per page.",
        },
      },
      required: ["source", "contextid"],
      additionalProperties: true, // System reports may have custom parameters
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { source: "core_user\\reportbuilder\\datasource\\users", contextid: 1 },
    },
  },
  {
    name: "core_reportbuilder_schedules_delete",
    moodleFunction: "core_reportbuilder_schedules_delete",
    description: "Deletes a scheduled email delivery for a report.",
    inputSchema: {
      type: "object",
      properties: {
        reportid: {
          type: "integer",
          minimum: 1,
          description: "Report ID containing the schedule.",
        },
        scheduleid: {
          type: "integer",
          minimum: 1,
          description: "Schedule ID to delete.",
        },
      },
      required: ["reportid", "scheduleid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { reportid: 5, scheduleid: 2 },
    },
  },
  {
    name: "core_reportbuilder_schedules_send",
    moodleFunction: "core_reportbuilder_schedules_send",
    description: "Immediately sends a scheduled report to its configured recipients.",
    inputSchema: {
      type: "object",
      properties: {
        reportid: {
          type: "integer",
          minimum: 1,
          description: "Report ID to send.",
        },
        scheduleid: {
          type: "integer",
          minimum: 1,
          description: "Schedule ID to send immediately.",
        },
      },
      required: ["reportid", "scheduleid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { reportid: 5, scheduleid: 2 },
    },
  },
  {
    name: "core_reportbuilder_schedules_toggle",
    moodleFunction: "core_reportbuilder_schedules_toggle",
    description: "Enables or disables a report schedule.",
    inputSchema: {
      type: "object",
      properties: {
        reportid: {
          type: "integer",
          minimum: 1,
          description: "Report ID containing the schedule.",
        },
        scheduleid: {
          type: "integer",
          minimum: 1,
          description: "Schedule ID to toggle.",
        },
        enabled: {
          type: "boolean",
          description: "True to enable, false to disable.",
        },
      },
      required: ["reportid", "scheduleid", "enabled"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: { reportid: 5, scheduleid: 2, enabled: true },
    },
  },
  {
    name: "core_reportbuilder_set_filters",
    moodleFunction: "core_reportbuilder_set_filters",
    description:
      "Sets filter values when viewing a report. Filter values are JSON-encoded and specific to each filter type.",
    inputSchema: {
      type: "object",
      properties: {
        reportid: {
          type: "integer",
          minimum: 1,
          description: "Report ID to set filters for.",
        },
        values: {
          type: "string",
          description: "JSON-encoded filter values object.",
        },
      },
      required: ["reportid", "values"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { reportid: 5, values: '{"user:email_operator":"1","user:email_value":"@example.com"}' },
    },
  },
  {
    name: "core_reportbuilder_view_report",
    moodleFunction: "core_reportbuilder_view_report",
    description:
      "Triggers the report viewed event for logging and analytics. Call when a user views a report.",
    inputSchema: {
      type: "object",
      properties: {
        reportid: {
          type: "integer",
          minimum: 1,
          description: "Report ID being viewed.",
        },
      },
      required: ["reportid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: { reportid: 5 },
    },
  },
];
