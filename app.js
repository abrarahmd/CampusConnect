const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')
const db = require('./db');

app.use(bodyParser.urlencoded({ extended: false }));

//Define Routes 
app.use("/", require("./Routes/pages"));

//Server Run
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
