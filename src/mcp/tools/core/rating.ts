import type { ToolSpec } from "../../types.js";

export const core_rating_tools: ToolSpec[] = [
  {
    name: "core_rating_add_rating",
    moodleFunction: "core_rating_add_rating",
    description:
      "Adds or updates a rating for an item (forum post, glossary entry, etc.). Returns success status and aggregate rating info.",
    inputSchema: {
      type: "object",
      properties: {
        contextlevel: {
          type: "string",
          enum: ["module", "course", "user", "system"],
          description: "Context level where the rated item exists.",
        },
        instanceid: {
          type: "integer",
          minimum: 1,
          description: "Instance ID for the context (e.g., course module ID).",
        },
        component: {
          type: "string",
          minLength: 1,
          description: "Component name (e.g., 'mod_forum', 'mod_glossary').",
        },
        ratingarea: {
          type: "string",
          minLength: 1,
          description: "Rating area within the component (e.g., 'post', 'entry').",
        },
        itemid: {
          type: "integer",
          minimum: 1,
          description: "Item ID being rated (e.g., post ID).",
        },
        scaleid: {
          type: "integer",
          description: "Scale ID for the rating. Negative for custom scales.",
        },
        rating: {
          type: "integer",
          description: "Rating value. Must be within the scale range.",
        },
        rateduserid: {
          type: "integer",
          minimum: 1,
          description: "User ID who created the rated item.",
        },
        aggregation: {
          type: "integer",
          enum: [0, 1, 2, 3, 4, 5],
          description:
            "Aggregation method: 0=none, 1=average, 2=count, 3=max, 4=min, 5=sum.",
        },
      },
      required: [
        "contextlevel",
        "instanceid",
        "component",
        "ratingarea",
        "itemid",
        "scaleid",
        "rating",
        "rateduserid",
      ],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student"],
    examples: {
      minimal: {
        contextlevel: "module",
        instanceid: 10,
        component: "mod_forum",
        ratingarea: "post",
        itemid: 100,
        scaleid: 100,
        rating: 5,
        rateduserid: 3,
      },
    },
  },
  {
    name: "core_rating_get_item_ratings",
    moodleFunction: "core_rating_get_item_ratings",
    description:
      "Gets all individual ratings for an item. Returns array of ratings with user info and timestamps.",
    inputSchema: {
      type: "object",
      properties: {
        contextlevel: {
          type: "string",
          enum: ["module", "course", "user", "system"],
          description: "Context level where the rated item exists.",
        },
        instanceid: {
          type: "integer",
          minimum: 1,
          description: "Instance ID for the context (e.g., course module ID).",
        },
        component: {
          type: "string",
          minLength: 1,
          description: "Component name (e.g., 'mod_forum').",
        },
        ratingarea: {
          type: "string",
          minLength: 1,
          description: "Rating area within the component.",
        },
        itemid: {
          type: "integer",
          minimum: 1,
          description: "Item ID to get ratings for.",
        },
        scaleid: {
          type: "integer",
          description: "Scale ID for the rating.",
        },
        sort: {
          type: "string",
          enum: ["firstname", "rating", "timemodified"],
          description: "Sort field for results. Default 'timemodified'.",
        },
      },
      required: ["contextlevel", "instanceid", "component", "ratingarea", "itemid", "scaleid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: {
      minimal: {
        contextlevel: "module",
        instanceid: 10,
        component: "mod_forum",
        ratingarea: "post",
        itemid: 100,
        scaleid: 100,
      },
    },
  },
];
