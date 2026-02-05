import type { ToolSpec } from "../../types.js";

export const core_user_tools: ToolSpec[] = [
  {
    name: "core_user_add_user_device",
    moodleFunction: "core_user_add_user_device",
    description: "Registers a mobile device for the current user.",
    inputSchema: {
      type: "object",
      properties: {
        appid: { type: "string", description: "Application id (e.g. com.moodle.moodlemobile).", minLength: 1 },
        name: { type: "string", description: "Device name.", minLength: 1 },
        model: { type: "string", description: "Device model.", minLength: 1 },
        platform: { type: "string", description: "Device platform (e.g. ios/android).", minLength: 1 },
        version: { type: "string", description: "Platform version.", minLength: 1 },
        pushid: { type: "string", description: "Push token/id.", minLength: 1 },
        uuid: { type: "string", description: "Unique device id (UUID).", minLength: 1 },
      },
      required: ["appid", "name", "model", "platform", "version", "pushid", "uuid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: {
        appid: "com.moodle.moodlemobile",
        name: "iPhone de Ana",
        model: "iPhone15,2",
        platform: "ios",
        version: "17.3",
        pushid: "PUSH_TOKEN",
        uuid: "550e8400-e29b-41d4-a716-446655440000",
      },
    },
  },

  {
    name: "core_user_remove_user_device",
    moodleFunction: "core_user_remove_user_device",
    description: "Unregisters a mobile device for the current user.",
    inputSchema: {
      type: "object",
      properties: {
        uuid: { type: "string", description: "Unique device id (UUID).", minLength: 1 },
      },
      required: ["uuid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { uuid: "550e8400-e29b-41d4-a716-446655440000" } },
  },

  {
    name: "core_user_update_user_device_public_key",
    moodleFunction: "core_user_update_user_device_public_key",
    description: "Updates the public key associated with a registered device.",
    inputSchema: {
      type: "object",
      properties: {
        uuid: { type: "string", description: "Unique device id (UUID).", minLength: 1 },
        publickey: { type: "string", description: "Public key (PEM/base64 depending on client).", minLength: 1 },
      },
      required: ["uuid", "publickey"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { uuid: "550e8400-e29b-41d4-a716-446655440000", publickey: "-----BEGIN PUBLIC KEY-----..." } },
  },

  {
    name: "core_user_agree_site_policy",
    moodleFunction: "core_user_agree_site_policy",
    description: "Records that the current user agrees to the site policy.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: {} },
  },

  {
    name: "core_user_create_users",
    moodleFunction: "core_user_create_users",
    description: "Creates one or more users (admin/operations).",
    inputSchema: {
      type: "object",
      properties: {
        users: {
          type: "array",
          minItems: 1,
          description: "List of users to create.",
          items: {
            type: "object",
            properties: {
              username: { type: "string", minLength: 1 },
              password: { type: "string", minLength: 1 },
              firstname: { type: "string", minLength: 1 },
              lastname: { type: "string", minLength: 1 },
              email: { type: "string", minLength: 3 },
              auth: { type: "string", description: "Auth plugin (e.g. manual).", default: "manual" },
              idnumber: { type: "string" },
              lang: { type: "string" },
              timezone: { type: "string" },
              city: { type: "string" },
              country: { type: "string" },
            },
            required: ["username", "password", "firstname", "lastname", "email"],
            additionalProperties: true,
          },
        },
      },
      required: ["users"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: {
      minimal: {
        users: [
          {
            username: "ana.perez",
            password: "Str0ngP@ssw0rd!",
            firstname: "Ana",
            lastname: "Pérez",
            email: "ana.perez@example.com",
          },
        ],
      },
    },
  },

  {
    name: "core_user_update_users",
    moodleFunction: "core_user_update_users",
    description: "Updates one or more users (admin/operations).",
    inputSchema: {
      type: "object",
      properties: {
        users: {
          type: "array",
          minItems: 1,
          items: {
            type: "object",
            properties: {
              id: { type: "integer", minimum: 1, description: "User ID." },
              username: { type: "string" },
              firstname: { type: "string" },
              lastname: { type: "string" },
              email: { type: "string" },
              idnumber: { type: "string" },
              suspended: { type: "integer", enum: [0, 1], description: "0=active, 1=suspended." },
            },
            required: ["id"],
            additionalProperties: true,
          },
        },
      },
      required: ["users"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager"],
    examples: { minimal: { users: [{ id: 123, firstname: "Ana María" }] } },
  },

  {
    name: "core_user_delete_users",
    moodleFunction: "core_user_delete_users",
    description: "Deletes one or more users (admin only; destructive).",
    inputSchema: {
      type: "object",
      properties: {
        userids: {
          type: "array",
          minItems: 1,
          items: { type: "integer", minimum: 1 },
          description: "User IDs to delete.",
        },
      },
      required: ["userids"],
      additionalProperties: false,
    },
    allowedRoles: ["admin"],
    examples: { minimal: { userids: [123] } },
  },

  {
    name: "core_user_get_users",
    moodleFunction: "core_user_get_users",
    description: "Searches users based on criteria.",
    inputSchema: {
      type: "object",
      properties: {
        criteria: {
          type: "array",
          minItems: 1,
          items: {
            type: "object",
            properties: {
              key: { type: "string", minLength: 1, description: "Field key (e.g. email, username, idnumber)." },
              value: { type: "string", description: "Search value." },
            },
            required: ["key", "value"],
            additionalProperties: false,
          },
        },
      },
      required: ["criteria"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: { minimal: { criteria: [{ key: "email", value: "ana.perez@example.com" }] } },
  },

  {
    name: "core_user_get_users_by_field",
    moodleFunction: "core_user_get_users_by_field",
    description: "Gets users by a specific field (e.g. id, username, email, idnumber).",
    inputSchema: {
      type: "object",
      properties: {
        field: { type: "string", minLength: 1, description: "Field name (e.g. id, username, email, idnumber)." },
        values: { type: "array", minItems: 1, items: { type: "string" }, description: "Values to match." },
      },
      required: ["field", "values"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: { minimal: { field: "username", values: ["ana.perez"] } },
  },

  {
    name: "core_user_get_course_user_profiles",
    moodleFunction: "core_user_get_course_user_profiles",
    description: "Returns user profiles in the context of a course.",
    inputSchema: {
      type: "object",
      properties: {
        userlist: {
          type: "array",
          minItems: 1,
          items: {
            type: "object",
            properties: {
              userid: { type: "integer", minimum: 1 },
              courseid: { type: "integer", minimum: 1 },
            },
            required: ["userid", "courseid"],
            additionalProperties: false,
          },
        },
      },
      required: ["userlist"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: { minimal: { userlist: [{ userid: 123, courseid: 45 }] } },
  },

  {
    name: "core_user_get_user_preferences",
    moodleFunction: "core_user_get_user_preferences",
    description: "Gets user preferences.",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string", description: "Preference name filter (optional).", default: "" },
        userid: { type: "integer", description: "User ID (0 for current user).", minimum: 0, default: 0 },
      },
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { userid: 0 } },
  },

  {
    name: "core_user_set_user_preferences",
    moodleFunction: "core_user_set_user_preferences",
    description: "Sets user preferences (typically for the current user).",
    inputSchema: {
      type: "object",
      properties: {
        preferences: {
          type: "array",
          minItems: 1,
          items: {
            type: "object",
            properties: {
              name: { type: "string", minLength: 1 },
              value: { type: "string" },
              userid: { type: "integer", minimum: 0, default: 0, description: "0 for current user." },
            },
            required: ["name", "value"],
            additionalProperties: false,
          },
        },
      },
      required: ["preferences"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { preferences: [{ name: "calendar_display", value: "month", userid: 0 }] } },
  },

  {
    name: "core_user_update_user_preferences",
    moodleFunction: "core_user_update_user_preferences",
    description: "Updates user preferences (alternative endpoint present in some versions).",
    inputSchema: {
      type: "object",
      properties: {
        preferences: {
          type: "array",
          minItems: 1,
          items: {
            type: "object",
            properties: {
              name: { type: "string", minLength: 1 },
              value: { type: "string" },
              userid: { type: "integer", minimum: 0, default: 0 },
            },
            required: ["name", "value"],
            additionalProperties: false,
          },
        },
      },
      required: ["preferences"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { preferences: [{ name: "forum_maildigest", value: "0", userid: 0 }] } },
  },

  {
    name: "core_user_search_identity",
    moodleFunction: "core_user_search_identity",
    description: "Searches users by identity fields (helpdesk/operations search).",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", minLength: 1, description: "Search text (name, email, idnumber, etc.)." },
      },
      required: ["query"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: { minimal: { query: "ana perez" } },
  },

  {
    name: "core_user_view_user_list",
    moodleFunction: "core_user_view_user_list",
    description: "Checks if the current user can view the user list.",
    inputSchema: {
      type: "object",
      properties: {
        courseid: { type: "integer", minimum: 1, description: "Course ID context." },
      },
      required: ["courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher"],
    examples: { minimal: { courseid: 45 } },
  },

  {
    name: "core_user_view_user_profile",
    moodleFunction: "core_user_view_user_profile",
    description: "Checks if the current user can view a user profile in a given context.",
    inputSchema: {
      type: "object",
      properties: {
        userid: { type: "integer", minimum: 1, description: "Target user ID." },
        courseid: { type: "integer", minimum: 1, description: "Course ID context." },
      },
      required: ["userid", "courseid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { userid: 123, courseid: 45 } },
  },

  // ---- Files / picture related core_user functions (require upload.php draft first) ----

  {
    name: "core_user_update_picture",
    moodleFunction: "core_user_update_picture",
    description:
      "Updates (or deletes) a user's profile picture. Requires the image to be uploaded first to the user's draft area via /webservice/upload.php, then pass its draftitemid here.",
    inputSchema: {
      type: "object",
      properties: {
        userid: { type: "integer", minimum: 1, description: "User ID whose picture will be updated." },
        draftitemid: {
          type: "integer",
          minimum: 1,
          description: "Draft item id returned by /webservice/upload.php (itemid).",
        },
        delete: {
          type: "integer",
          enum: [0, 1],
          description: "1 to delete the user's current picture (draftitemid can be omitted/ignored by server).",
          default: 0,
        },
      },
      required: ["userid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: {
      minimal: { userid: 123, draftitemid: 880413555 },
    },
  },

  {
    name: "core_user_get_private_files_info",
    moodleFunction: "core_user_get_private_files_info",
    description: "Returns information about the current user's private files area.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: {} },
  },

  {
    name: "core_user_add_user_private_files",
    moodleFunction: "core_user_add_user_private_files",
    description:
      "Adds files from the current user's draft area to their private files area. Upload to draft first via /webservice/upload.php and pass the draft item id.",
    inputSchema: {
      type: "object",
      properties: {
        draftitemid: {
          type: "integer",
          minimum: 1,
          description: "Draft item id returned by /webservice/upload.php (itemid).",
        },
      },
      required: ["draftitemid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { draftitemid: 880413555 } },
  },

  {
    name: "core_user_prepare_private_files_for_edition",
    moodleFunction: "core_user_prepare_private_files_for_edition",
    description:
      "Prepares the current user's private files area for edition (returns/uses a draft area). Useful for edit flows.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: {} },
  },

  {
    name: "core_user_update_private_files",
    moodleFunction: "core_user_update_private_files",
    description:
      "Updates the current user's private files from a draft area. Typically used after editing; requires a draft item id.",
    inputSchema: {
      type: "object",
      properties: {
        draftitemid: {
          type: "integer",
          minimum: 1,
          description: "Draft item id representing the edited private files (from draft area).",
        },
      },
      required: ["draftitemid"],
      additionalProperties: false,
    },
    allowedRoles: ["admin", "manager", "editingteacher", "teacher", "student", "user"],
    examples: { minimal: { draftitemid: 880413555 } },
  },
];