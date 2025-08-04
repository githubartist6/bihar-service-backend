const express = require("express")
const router = express.Router()
const {
    createTravel,
    getAllTravels,
    updateTravel,
} = require("../controllers/travel-controller.js")

// ✅ Single route for GET + POST
router
    .route("/travel")
    .get(getAllTravels)   // GET -> all travels
    .post(createTravel)   // POST -> create new travel

// ✅ Update route
router.put("/travel/:id", updateTravel)

module.exports = router
