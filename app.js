const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the Public folder
app.use(express.static(path.join(__dirname, 'Public')));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/App', express.static(path.join(__dirname, 'App')));

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the main page!');
});

/*Login-Signup Route */
app.get('/signup-signin', (req, res) => {
  res.sendFile(path.join(__dirname, 'View', 'signup-signin.html'));
});

/*Bus Routes */
app.get('/bus-book', (req, res) => {
  res.sendFile(path.join(__dirname, 'View', 'cafetaria-ticket', 'Bus', 'busTicketPurchase.html'));
});

/*User Profile Routes */
app.get('/userProfile', (req, res) => {
  res.sendFile(path.join(__dirname, 'View', 'user', 'userProfile.html'));
});
app.get('/userUpdate', (req, res) => {
  res.sendFile(path.join(__dirname, 'View', 'user', 'userUpdate.html'));
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
