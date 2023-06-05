const express = require("express");

const router = express.Router();

const authController = require("../../controllers/profileController");

router.get("/:userId", authController.getProfile);
router.put("/", authController.updateProfile);
router.post("/avatar", authController.uploadAvatar);

module.exports = router;
