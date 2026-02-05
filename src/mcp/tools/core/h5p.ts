import type { ToolSpec } from "../../types.js";

export const core_h5p_tools: ToolSpec[] = [
  {
    name: "core_h5p_get_trusted_h5p_file",
    moodleFunction: "core_h5p_get_trusted_h5p_file",
    description:
      "Gets a trusted H5P file URL for embedding. Validates the file and returns a URL that can be used in an iframe. Returns file info and embed URL.",
    inputSchema: {
      type: "object",
      properties: {
        url: {
          type: "string",
          minLength: 1,
          description: "URL of the H5P file to validate and get trusted URL for.",
        },
        frame: {
          type: "integer",
          enum: [0, 1],
          description: "Show frame around H5P: 0=no, 1=yes. Default 1.",
        },
        export: {
          type: "integer",
          enum: [0, 1],
          description: "Show export button: 0=no, 1=yes. Default 0.",
        },
        embed: {
          type: "integer",
          enum: [0, 1],
          description: "Show embed button: 0=no, 1=yes. Default 0.",
        },
        copyright: {
          type: "integer",
          enum: [0, 1],
          description: "Show copyright button: 0=no, 1=yes. Default 0.",
        },
      },
      required: ["url"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {
        url: "https://moodle.example.com/pluginfile.php/123/mod_h5pactivity/package/0/content.h5p",
      },
    },
  },
];
