const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: '112484',
  resave: false,
  saveUninitialized: true,
}))

//Define Routes 
app.use("/", require("./Routes/pages"));
app.use('/auth', require('./Routes/auth'));

//Server Run
app.listen(port, () => {
  console.log('Server is running on http://localhost:${port}');
});
