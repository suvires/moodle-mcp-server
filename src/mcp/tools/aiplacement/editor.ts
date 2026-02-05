import type { ToolSpec } from "../../types.js";

export const aiplacement_editor_tools: ToolSpec[] = [
  {
    name: "aiplacement_editor_generate_image",
    moodleFunction: "aiplacement_editor_generate_image",
    description:
      "Uses Moodle's AI subsystem to generate an image from a text prompt. Part of the editor AI placement for rich text editors. Returns generated image data or URL.",
    inputSchema: {
      type: "object",
      properties: {
        contextid: {
          type: "integer",
          minimum: 1,
          description: "Context ID where the AI action is being performed.",
        },
        prompttext: {
          type: "string",
          minLength: 1,
          description: "Text description of the image to generate.",
        },
        aspectratio: {
          type: "string",
          enum: ["square", "landscape", "portrait"],
          description: "Aspect ratio for the generated image. Default varies by provider.",
        },
        quality: {
          type: "string",
          enum: ["standard", "hd"],
          description: "Image quality setting. Default 'standard'.",
        },
        numimages: {
          type: "integer",
          minimum: 1,
          maximum: 4,
          description: "Number of images to generate. Default 1.",
        },
      },
      required: ["contextid", "prompttext"],
      additionalProperties: true, // AI providers may have additional options
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {
        contextid: 50,
        prompttext: "A colorful illustration of a classroom",
      },
    },
  },
  {
    name: "aiplacement_editor_generate_text",
    moodleFunction: "aiplacement_editor_generate_text",
    description:
      "Uses Moodle's AI subsystem to generate text content from a prompt. Part of the editor AI placement for rich text editors. Returns generated text content.",
    inputSchema: {
      type: "object",
      properties: {
        contextid: {
          type: "integer",
          minimum: 1,
          description: "Context ID where the AI action is being performed.",
        },
        prompttext: {
          type: "string",
          minLength: 1,
          description: "The prompt or instruction for text generation.",
        },
      },
      required: ["contextid", "prompttext"],
      additionalProperties: true, // AI providers may have additional options
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {
        contextid: 50,
        prompttext: "Write an introduction paragraph about photosynthesis",
      },
    },
  },
];
