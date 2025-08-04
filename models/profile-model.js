const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        village: { type: String, required: true },
        address: { type: String },
        state: { type: String },
        pincode: { type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Profile", profileSchema);
