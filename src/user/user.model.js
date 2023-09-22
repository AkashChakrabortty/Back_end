const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      haveWebDevelopmentAccess: {
        type: Boolean,
        required: true,
      },
      haveUiAccess: {
        type: Boolean,
        required: true,
      },
      haveSeoAccess: {
        type: Boolean,
        required: true,
      },
      haveServerMigrateAccess: {
        type: Boolean,
        required: true,
      },
      haveGraphicDesignAccess: {
        type: Boolean,
        required: true,
      },
      haveAppDevelopmentAccess: {
        type: Boolean,
        required: true,
      },
      haveChatAccess: {
        type: Boolean,
        required: true,
      },
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
