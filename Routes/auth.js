const express = require("express");
const authController = require("../Controllers/auth");
const router = express.Router();

router.post("/signup", authController.UserSignup)
router.post("/signin", authController.UserLogin)

router.get("/userProfile", authController.userProfile)

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error('Error destroying session:', err);
            res.status(500).send('Internal server error');
        } else {
            res.redirect('/CampusConnect');
        }
    });
});

module.exports = router;