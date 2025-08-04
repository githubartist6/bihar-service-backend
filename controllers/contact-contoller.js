const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
  try {
    const { name, phone, email, subject, message, type } = req.body;

    // Validate fields
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }
    if (!phone) {
      return res.status(400).json({ message: "Phone is required" });
    }
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    if (!subject) {
      return res.status(400).json({ message: "Subject is required" });
    }
    if (!message) {
      return res.status(400).json({ message: "Message is required" });
    }
    if (!type) {
      return res.status(400).json({ message: "Message type is required" });
    }

    // Save to DB
    await Contact.create({
      name,
      phone,
      email,
      subject,
      message,
      type,
    });

    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error in contact form:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = contactForm;
