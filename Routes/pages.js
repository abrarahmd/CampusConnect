const express = require('express');
const router = express.Router();
const {GetUserData} = require("../Controllers/auth");

router.post("/api/auth", GetUserData)

router.get('/', (req, res) => {

  res.send('Welcome to the main page!');

});

/*Login-Signup Route */

router.get('/signup-signin', (req, res) => {

    res.render("signup-signin");

});
  
/* Homepage Route */

router.get('/CampusConnect', (req, res) => {

  res.render("homepage");

});

router.get('/homepage', (req, res) => {

  if (req.session.user) {

    res.render("homepage-loggedin");

  }
  else {

    res.render("/signup-signin");

  }
});
  
/*Bus Routes */

router.get('/bus-book', (req, res) => {

  res.render("busBooking");

});

router.get('/bus-routes-in', (req, res) => {

  res.render("busRoutes");

});

router.get('/bus-routes', (req, res) => {

  res.render("busRoutes-Loggedout");

});

router.get('/bus-ticket', (req, res) => {

  res.render("busTicket");

});
  
/*User Profile Routes */

router.get('/userProfile', (req, res) => {

  res.render("userProfile");

});
router.get('/userUpdate', (req, res) => {

  res.render("userUpdate");

});

module.exports = router;