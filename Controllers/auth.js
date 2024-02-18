const express = require("express");
const db = require('../db');
const bcrypt = require('bcrypt');

exports.UserSignup = async (req, res) => {
    const {StudentID, Username, StudentName, Email, Phone, Password} = req.body;
    db.query("SELECT StudentID FROM user WHERE StudentID = ?", [StudentID], async (error, results) => {
        if(error) {
            console.log(error);
        }
        if(results.length > 0) {
            return res.status(400).send('You are already registered.');
        } 

        let hashedPassword = await bcrypt.hash(Password, 8);
        db.query("INSERT INTO user SET ?", {StudentID: StudentID, Username: Username, StudentName: StudentName, Email: Email, Phone: Phone, Password: hashedPassword}, (error, results) => {
            if(error){
                console.log(error);
            } else {
                res.redirect("/signup-signin")
            }
        })
  
    });
  
}