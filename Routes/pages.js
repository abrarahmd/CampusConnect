
const express = require('express');
const path = require('path');
const router = express.Router();

router.use(express.static(path.join(__dirname, '..', 'Public')));
router.use('/img', express.static(path.join(__dirname, '..', 'img')));
router.use('/App', express.static(path.join(__dirname,'..', 'App')));

router.get('/', (req, res) => {
    res.send('Welcome to the main page!');
  });
  
  /*Login-Signup Route */
  router.get('/signup-signin', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'View', 'signup-signin.html'));
});
  
  /* Homepage Route */
  router.get('/CampusConnect', (req, res) => {
    res.sendFile(path.join(__dirname, '..','View', 'homepage.html'));
  });
  router.get('/homepage', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'View', 'homepage-loggedin.html'));
  });
  
  /*Bus Routes */
  router.get('/bus-book', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'View', 'cafetaria-ticket', 'Bus', 'busBooking.html'));
  });
  router.get('/bus-routes-in', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'View', 'cafetaria-ticket', 'Bus', 'busRoutes.html'));
  });
  router.get('/bus-routes', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'View', 'cafetaria-ticket', 'Bus', 'busRoutes-Loggedout.html'));
  });
  router.get('/bus-ticket', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'View', 'cafetaria-ticket', 'Bus', 'busTicket.html'));
  });
  
  /*User Profile Routes */
  router.get('/userProfile', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'View', 'user', 'userProfile.html'));
  });
router.get('/userUpdate', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'View', 'user', 'userUpdate.html'));
  });

module.exports = router;