const express = require("express");
const adminController = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-authMiddleware");
const adminMiddleware = require("../middlewares/admin-middleware");
const router = express.Router();

router.route("/users")
    .get(authMiddleware, adminMiddleware, adminController.getAdminAllUsers);

router.route("/users/:id")
    .get(authMiddleware, adminMiddleware, adminController.getUserById);

router.route("/users/update/:id")
    .patch(authMiddleware, adminMiddleware, adminController.updateUserById);

router.route("/users/delete/:id")
    .delete(authMiddleware, adminMiddleware, adminController.deleteUserById);

router.route("/contacts")
    .get(authMiddleware, adminMiddleware, adminController.getAllContacts);

router.route("/contacts/delete/:id")
    .delete(authMiddleware, adminMiddleware, adminController.deleteContactsById);

router.route("/services")
    .get(authMiddleware, adminMiddleware, adminController.getAllService);



router.route("/newdata")
    .post(authMiddleware, adminMiddleware, adminController.createNewData);

module.exports = router;