import type { ToolSpec } from "../../types.js";

export const tool_tcpdffonts_tools: ToolSpec[] = [
  {
    name: "tool_tcpdffonts_core_reset",
    moodleFunction: "tool_tcpdffonts_core_reset",
    description:
      "Resets TCPDF core fonts to default state. Removes any customizations and restores the original font set used for PDF generation.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    allowedRoles: ["admin"],
    examples: { minimal: {} },
  },
  {
    name: "tool_tcpdffonts_delete_font",
    moodleFunction: "tool_tcpdffonts_delete_font",
    description:
      "Deletes a custom TCPDF font. Removes the font from the available fonts for PDF generation.",
    inputSchema: {
      type: "object",
      properties: {
        fontname: {
          type: "string",
          minLength: 1,
          description: "Name of the font to delete.",
        },
      },
      required: ["fontname"],
      additionalProperties: false,
    },
    allowedRoles: ["admin"],
    examples: { minimal: { fontname: "customfont" } },
  },
  {
    name: "tool_tcpdffonts_init_custom_fonts",
    moodleFunction: "tool_tcpdffonts_init_custom_fonts",
    description:
      "Initializes custom TCPDF fonts. Scans for and registers new custom fonts for use in PDF generation.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    allowedRoles: ["admin"],
    examples: { minimal: {} },
  },
];
