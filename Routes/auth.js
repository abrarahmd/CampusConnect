const express = require("express");
const authController = require("../Controllers/auth");
const bcrypt = require('bcrypt');
const router = express.Router();

router.post("/signup-signin", authController.UserSignup)

module.exports = router;