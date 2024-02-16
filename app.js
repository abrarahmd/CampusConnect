const express = require('express');
const path = require('path');
const mysql = require('mysql')
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 3000;
dotenv.config({ path: './.env'})

app.use(express.static(path.join(__dirname, 'Public')));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/App', express.static(path.join(__dirname, 'App')));

//Database Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})
db.connect( (error) => {
  if(error) {
      console.log(error)
  } else {
      console.log("MYSQL Connected...")
  }
})

//Redirecting Pages

app.get('/', (req, res) => {
  res.send('Welcome to the main page!');
});

/*Login-Signup Route */
app.get('/signup-signin', (req, res) => {
  res.sendFile(path.join(__dirname, 'View', 'signup-signin.html'));
});

/* Homepage Route */
app.get('/CampusConnect', (req, res) => {
  res.sendFile(path.join(__dirname, 'View',  'homepage.html'));
});
app.get('/homepage', (req, res) => {
  res.sendFile(path.join(__dirname, 'View',  'homepage-loggedin.html'));
});

/*Bus Routes */
app.get('/bus-book', (req, res) => {
  res.sendFile(path.join(__dirname, 'View', 'cafetaria-ticket', 'Bus', 'busBooking.html'));
});
app.get('/bus-routes-in', (req, res) => {
  res.sendFile(path.join(__dirname, 'View', 'cafetaria-ticket', 'Bus', 'busRoutes.html'));
});
app.get('/bus-routes', (req, res) => {
  res.sendFile(path.join(__dirname, 'View', 'cafetaria-ticket', 'Bus', 'busRoutes-Loggedout.html'));
});
app.get('/bus-ticket', (req, res) => {
  res.sendFile(path.join(__dirname, 'View', 'cafetaria-ticket', 'Bus', 'busTicket.html'));
});

/*User Profile Routes */
app.get('/userProfile', (req, res) => {
  res.sendFile(path.join(__dirname, 'View', 'user', 'userProfile.html'));
});
app.get('/userUpdate', (req, res) => {
  res.sendFile(path.join(__dirname, 'View', 'user', 'userUpdate.html'));
});

//Exports
module.exports = db;

//Server Run
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
