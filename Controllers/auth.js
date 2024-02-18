const express = require("express");
const db = require('../db');
const bcrypt = require('bcrypt');

exports.UserSignup = async (req, res) => {
    const {StudentID, Username, StudentName, Email, Phone, Password} = req.body;
    db.query("SELECT StudentID, Email, Username, Phone FROM user WHERE StudentID = ? OR Email = ? OR Username = ? OR Phone = ?", [StudentID, Email, Username, Phone], async (error, results) => {
        if(error) {
            console.log(error);
        }
        if(results.length > 0) {
            let errorMessage = ''
            if (results.some(result => result.StudentID === StudentID)) {
                errorMessage += 'Student ID already registered. ';
            }
            if (results.some(result => result.Email === Email)) {
                errorMessage += 'Email already exists. ';
            }

            if (results.some(result => result.Username === Username)) {
                errorMessage += 'Username already taken. ';
            }

            if (results.some(result => result.Number === Phone)) {
                errorMessage += 'Phone number already registered. ';
            }

            return res.status(400).send(errorMessage.trim());
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