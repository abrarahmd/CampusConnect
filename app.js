const express = require('express');
const path = require("path");
const dotenv = require('dotenv');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')

dotenv.config({ path: './.env'})

const publicDirectory = path.join(__dirname, "./public");

app.set('view engine', 'hbs'); //hbs access method

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(publicDirectory));
app.use('/app', express.static(path.join(__dirname, 'app')));

app.use(session({
  secret: '112484',
  resave: true,
  saveUninitialized: true,
}))

//Define Routes 
app.use("/", require("./Routes/pages"));
app.use('/auth', require('./Routes/auth'));

//Server Run
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});