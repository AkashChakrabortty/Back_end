const mongoose = require("mongoose");

const chatNotificationSchema = mongoose.Schema(
  {
    senderEmail: {
      type: String,
      required: true,
    },
    senderName: {
      type: String,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
    flag: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ChatNotification = mongoose.model(
  "chatNotification",
  chatNotificationSchema
);
module.exports = ChatNotification;
