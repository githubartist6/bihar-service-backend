const mongoose = require("mongoose")

const agentTravelSchema = new mongoose.Schema(
  {
    agentName: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    date: { type: String, required: true },
    departureTime: { type: String, required: true },
    availableSlots: { type: Number, required: true },
    services: { type: [String], default: [] },
    vehicleType: { type: String, required: true },
    fare: { type: String, required: true },
    status: { type: String, default: "Active" },
    subscribers: { type: Number, default: 0 },
    bookings: { type: Number, default: 0 },
  },
  { timestamps: true }
)

const AgentTravel = mongoose.model("AgentTravel", agentTravelSchema)

module.exports = AgentTravel
