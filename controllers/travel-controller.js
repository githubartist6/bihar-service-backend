const AgentTravel = require("../models/travel-model.js")

// ✅ Create new travel (POST)
const createTravel = async (req, res) => {
  try {
    const travel = new AgentTravel(req.body)
    await travel.save()
    res.status(201).json(travel)
  } catch (error) {
    res.status(500).json({ message: "Error creating travel", error })
  }
}

// ✅ Get all travels (GET)
const getAllTravels = async (req, res) => {
  try {
    const travels = await AgentTravel.find().sort({ createdAt: -1 })
    res.json(travels)
  } catch (error) {
    res.status(500).json({ message: "Error fetching travels", error })
  }
}

// ✅ Update travel (PUT) - example: subscribe increment
const updateTravel = async (req, res) => {
  try {
    const { id } = req.params
    const { action } = req.body

    let update = {}

    if (action === "subscribe") {
      update = { $inc: { subscribers: 1 } }
    } else if (action === "cancel") {
      update = { status: "Cancelled" }
    } else {
      update = req.body
    }

    const updatedTravel = await AgentTravel.findByIdAndUpdate(id, update, {
      new: true,
    })

    if (!updatedTravel) {
      return res.status(404).json({ message: "Travel not found" })
    }

    res.json(updatedTravel)
  } catch (error) {
    res.status(500).json({ message: "Error updating travel", error })
  }
}

module.exports = { createTravel, getAllTravels, updateTravel }
