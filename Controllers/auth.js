const express = require("express");
const mysql = require("mysql"); 
const db = require('../db');
const router = express.Router();

exports.UserSignup = (req, res) => {
    console.log(req.body);
  
    const {StudentID, Username, StudentName, Email, Phone, Password} = req.body;
  
  
    db.query("SELECT StudentID FROM user WHERE StudentID = ?", [StudentID], async (error, results) => {
        console.log(results)
  
        if(error) {
            console.log(error);
        }
        if(results.length > 0) {
            return res.status(400).send('You are already registered.');
  
        } 

        let hashedPassword = await bcrypt.hash(Password, 8);
        console.log(hashedPassword);
  
        db.query("INSERT INTO admin SET ?", {StudentID: StudentID, Username: Username, StudentName: StudentName, Email: Email, Phone: Phone, Password: Password}, (error, results) => {
            if(error){
                console.log(error);
            } else {
                console.log(results);
                return res.status(400).send('User Registered');
            }
        })
  
    });
  
  }
  module.exports = router;
