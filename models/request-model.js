const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    service: {
      type: String,
      required: true, // service id
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    pickupLocation: {
      type: String,
      required: true,
    },
    deliveryLocation: {
      type: String,
      default: "",
    },
    preferredDate: {
      type: Date,
      required: true,
    },
    preferredTime: {
      type: String,
      required: true,
    },
    budget: {
      type: String,
      default: "",
    },
    urgency: {
      type: String,
      enum: ["normal", "urgent", "emergency"],
      default: "normal",
    },
    status: {
      type: String,
      enum: ["pending", "assigned", "completed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Newrequest = mongoose.model("Newrequest", requestSchema);

module.exports = Newrequest;
