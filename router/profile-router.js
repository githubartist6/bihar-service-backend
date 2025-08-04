const express = require("express");
const router = express.Router();
const { createUserProfile, getUserProfile, updateUserProfile } = require("../controllers/profile-controller");

// POST -> create profile
router.post("/profile", createUserProfile);

router.get("/profile", getUserProfile);

router.put("/profile", updateUserProfile);

module.exports = router;
