const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  
  if (req.session.user) {
    res.render("homepage-loggedin");
  } else {
    res.render("homepage");
  }

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

    res.render("signup-signin");

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

/* Cafetaria Route */
router.get('/cafetaria', (req, res) => {

  res.render("cafetaria");

});

router.get('/foodcart', (req, res) => {

  res.render("foodcart");

});

/* Parking Route */

router.get('/parking', (req, res) => {

  res.render("parking");

});

router.get('/parkingContact', (req, res) => {

  res.render("parkingContact");

});

router.get('/parkingconfirm', (req, res) => {

  res.render("parkingconfirm");

});
  
/*User Profile Routes */

router.get('/userProfile', (req, res) => {

  res.render("userProfile");

});
router.get('/userUpdate', (req, res) => {

  res.render("userUpdate");

});

/* Successful Message Route */

router.get('/successful', (req, res) => {

  res.render("successSubmit");

});

router.get('/successfulPurchase', (req, res) => {

  res.render("successBuy");

});

// Routine Routes

router.get('/routine', (req, res) => {

  res.render("routine");

});

// Forum Routes

router.get('/StudentForum', (req, res) => {

  res.render("forum");

});

router.get('/ForumPost', (req, res) => {

  res.render("forumPost");

});


module.exports = router;