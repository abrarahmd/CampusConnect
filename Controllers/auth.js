const express = require("express");
const db = require('../db');
const bcrypt = require('bcrypt');

const generateSessionToken = () => {
    const randomString = Math.random().toString(36).substring(2, 15);
    return randomString;
};

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

exports.UserLogin = (req, res) => {
    const {Username, Password } = req.body;
  
    const sanitizedUsername = db.escape(Username);

    const query = `SELECT * FROM user WHERE Username = ${sanitizedUsername}`;
    db.query(query, async (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).send('Internal server error');
      }

      if (results.length === 0) {
        return res.status(200).send('User not found.');
      }
      const user = results[0]; 

      const isPasswordValid = await bcrypt.compare(Password, user.Password);
      if (isPasswordValid) {
        const sessionToken = generateSessionToken();
        db.query('UPDATE user SET Token = ? WHERE StudentID = ?', [sessionToken, user.StudentID], (updateError, updateResults) => {
            if (updateError) {
              console.error('Database error:', updateError);
              return res.status(500).send('Internal server error');
            }
            req.session.user = { ...user, Token: sessionToken };
            res.redirect('/homepage');
          });
        } else {
          return res.status(400).send('Invalid password');
        }
      });
};

exports.GetUserData = (req, res) => {
  console.log('Session Data:', req.session);

  if (!req.session.user) {
    return res.status(401).send('User not logged in.');
  }

  const userId = req.session.user.StudentID;
  console.log(userId)

  db.query('SELECT StudentID, Username, StudentName, Email, Phone FROM user WHERE StudentID = ?', [userId], (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).send('Internal server error');
    }
    if (results.length === 0) {
      return res.status(404).send('User not found.');
    }

    const userData = results[0];
    res.send(userData);
  });
};