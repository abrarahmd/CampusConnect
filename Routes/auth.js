const express = require("express");
const authController = require("../Controllers/auth");
const router = express.Router();

router.post("/signup", authController.UserSignup)
router.post("/signin", authController.UserLogin)

module.exports = router;