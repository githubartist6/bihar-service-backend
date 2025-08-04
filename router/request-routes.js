const express = require("express");
const router = express.Router();
const { createRequest, getAllRequests } = require("../controllers/request-controller");

router.route("/newrequest").post(createRequest);

router.get("/getnewrequest", getAllRequests);

module.exports = router;
