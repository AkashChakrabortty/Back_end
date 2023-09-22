const mongoose = require("mongoose");

const chatSchema = mongoose.Schema(
  {
    senderEmail: {
      type: String,
      required: true,
    },
    senderName: {
      type: String,
      required: true,
    },
    toEmail: {
      type: String,
      required: true,
    },
    length: {
      type: Number,
    },
    country: {
      type: String,
    },
    flag: {
      type: String,
    },
    message: [
      {
        text: {
          type: String,
        },
        sender: {
          type: String,
        },
        time: {
          type: Number,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("chat", chatSchema);
module.exports = Chat;
