const Profile = require("../models/profile-model");

// ✅ POST: Create new user profile
const createUserProfile = async (req, res) => {
    try {
        const { name, phone, email, village, address, state, pincode } = req.body;

        if (!name || !phone || !email) {
            return res.status(400).json({ message: "Name, phone and email are required" });
        }

        const newProfile = await Profile.create({
            name,
            phone,
            email,
            village,
            address,
            state,
            pincode,
        });

        return res.status(201).json({ message: "Profile created successfully" });
    } catch (error) {
        console.error("Error creating profile:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

// ✅ GET: Fetch all profiles
// ✅ GET: Fetch single profile without ID (latest one)
const getUserProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne().sort({ createdAt: -1 });
        if (!profile) return res.status(404).json({ message: "Profile not found" });

        return res.status(200).json({ profile });
    } catch (error) {
        console.error("Error fetching profile:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};



// ✅ PUT: Update profile
const updateUserProfile = async (req, res) => {
    try {
        // पहले latest profile find करो
        const profile = await Profile.findOne().sort({ createdAt: -1 });

        if (!profile) {
            return res.status(404).json({ message: "Profile not found" });
        }

        // उसी profile को update करो
        await Profile.findByIdAndUpdate(profile._id, req.body, {
            new: true,
            runValidators: true,
        });

        return res.status(200).json({ message: "Profile updated successfully" });
    } catch (error) {
        console.error("Error updating profile:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { createUserProfile, getUserProfile, updateUserProfile };
