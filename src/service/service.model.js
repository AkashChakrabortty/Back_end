const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema(
  {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    bgImage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const SERVICE = mongoose.model("service", serviceSchema);
module.exports = SERVICE;
