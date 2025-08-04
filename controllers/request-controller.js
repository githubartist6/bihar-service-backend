const Request = require("../models/request-model");

// ✅ POST: Create new request
const createRequest = async (req, res) => {
  try {
    const {
      service,
      description,
      pickupLocation,
      deliveryLocation,
      preferredDate,
      preferredTime,
      budget,
      urgency,
    } = req.body;

    // Validate required fields
    if (!service) return res.status(400).json({ message: "Service is required" });
    if (!description) return res.status(400).json({ message: "Description is required" });
    if (!pickupLocation) return res.status(400).json({ message: "Pickup location is required" });
    if (!preferredDate) return res.status(400).json({ message: "Preferred date is required" });
    if (!preferredTime) return res.status(400).json({ message: "Preferred time is required" });

    // Save request in DB
    await Request.create({
      service,
      description,
      pickupLocation,
      deliveryLocation,
      preferredDate,
      preferredTime,
      budget,
      urgency,
    });

    return res.status(200).json({ message: "Request created successfully" });
  } catch (error) {
    console.error("Error creating request:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ GET: Fetch all requests
const getAllRequests = async (req, res) => {
  try {
    const requests = await Request.find().sort({ createdAt: -1 });
    return res.status(200).json(requests);
  } catch (error) {
    console.error("Error fetching requests:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { createRequest, getAllRequests };
