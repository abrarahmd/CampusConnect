const express = require("express");
const db = require('../db');
const bcrypt = require('bcrypt');

const generateSessionToken = () => {
  
    const randomString = Math.random().toString(36).substring(2, 15);
    return randomString;
};

//Login Signup Stuff

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

//Bus Stuff

exports.BusRoutes = (req, res) => {

  const condition = req.params.condition;

  db.query('SELECT * FROM routes', (error, results) => {

    if (error) {
      return res.status(500).send('Internal server error');
    }
    res.send(results);
  });

}

exports.bookTicket = (req, res) => {

  const { studentID, email, goingFrom, goingTo, number, time } = req.body;
  const loggedInUser = req.session.user;

  const busType = goingFrom === '1' ? 'Going' : 'Returning';

  db.query('SELECT * FROM transportation WHERE FIND_IN_SET(?, SeatBooked) > 0 AND BusType = ?', [loggedInUser.Username.toString(), busType], (error, result) => {

    if (error) {
      return res.status(500).send('Internal server error');
    }

    if (result.length > 0) {
      return res.status(400).send('You have already booked a seat.');
    } else {
      db.query('SELECT SeatID FROM transportation WHERE BusType = ? AND SeatAvailibility = 1 LIMIT 1', [busType], (error, result) => {
        if (error) {
          return res.status(500).send('Internal server error');
        }
        if (result.length === 0) {
          return res.status(400).send('No Available Seats');
        } else {

          const seatID = result[0].SeatID;

          db.query('UPDATE transportation SET SeatAvailibility = 0, SeatBooked = CONCAT_WS(",", SeatBooked, ?) WHERE BusType = ? AND SeatID = ?', [loggedInUser.Username, busType, seatID], (error, result) => {
            if (error) {
              console.error('Error updating seat:', error);
              return res.status(500).send('Internal Server Error');
            }
            res.redirect('/successful')
          });
        }
      });
    }
  });
};

exports.BusSeatAvailability = (req, res) => {
  db.query('SELECT COUNT(*) AS goingSeats FROM transportation WHERE SeatAvailibility = 1 AND BusType = ?', ['Going'], (error, goingResult) => {
    if (error) {
      return res.status(500).send('Internal server error');
    }

    const goingSeats = goingResult[0].goingSeats;

    db.query('SELECT COUNT(*) AS returningSeats FROM transportation WHERE SeatAvailibility = 1 AND BusType = ?', ['Returning'], (error, returningResult) => {
      if (error) {
        return res.status(500).send('Internal server error');
      }

      const returningSeats = returningResult[0].returningSeats;

      const seatAvailability = {going: goingSeats, returning: returningSeats};
      res.send(seatAvailability);

    });
  });
};

exports.busTicket = (req, res) => {
  const { fullName, studentID, email, phone, time, transaction } = req.body;
  const loggedInUser = req.session.user;

  const BusType = time === '1' ? 'Going' : 'Returning';

  db.query('UPDATE transportation SET SeatPaid = 1 WHERE BusType = ? AND SeatBooked = ?', [BusType, loggedInUser.Username], (error, result) => {
    if (error) {
      return res.status(500).send('Internal Server Error');
    }
    if (result.affectedRows > 0) {
      res.render('successBuy')
    } else {
      res.status(400).send('No matching seat found')
    }
  })
}

// User Stuff

exports.GetUserData = (req, res) => {

  if (!req.session.user) {
    return res.status(401).send('User not logged in.');
  }

  const userId = req.session.user.StudentID;

  db.query('SELECT StudentID, Username, StudentName, Email, Phone FROM user WHERE StudentID = ?', [userId], (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).send('Internal server error');
    }

    if (results.length === 0) {
      return res.status(404).send('User not found.');
    }

    const userData = results;
    res.send(userData);
  });
};

exports.UserUpdate = (req, res) => {

  const { fullName, studentID, username, email, phone } = req.body;
  const userId = req.session.user.StudentID;

  if (!req.session.user) {
    return res.status(401).send('User not logged in.');
  }

  if (studentID == userId) {
      db.query('UPDATE user SET StudentName = ?, Email = ?, Phone = ? WHERE StudentID = ?', [fullName, email, phone, userId], (error, results) => {
          if (error) {
            console.error('Database error:', error);
            return res.status(500).send({
              success: false,
              message: 'Internal server error',
            });
          }

          if (results.affectedRows === 0) {
            return res.status(404).send({
              success: false,
              message: 'User not found.',
            });
          }

          return res.render('userUpdate')
        
        }
      );
  } else {
    console.error('User Match Error:', error);
  }
}

//Food 
exports.FoodInfo = (req, res) => {
  
  db.query('SELECT * FROM food', (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Internal Server Error' });

    }
    res.send(results);
  });
};

//Cart
exports.AddToCart = (req, res) => {
  const { foodPicture, foodName, foodCost } = req.body;
  const loggedInUser = req.session.user;
  console.log(foodPicture, foodName, foodCost)

  db.query("INSERT INTO FoodCart SET ?", {FoodPicture : foodPicture,  StudentID: loggedInUser.StudentID, FoodName : foodName, Quantity : 1, Bill: foodCost }, (error, results) => {    
      if(error){
        console.log(error);
        } 
    })
};
  
//Routine Stuff
exports.CourseFetch = async (req, res) => {
  db.query('SELECT CourseName, Time, Section, Day1, Day2 FROM courses', (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).send('Internal server error');
    }

    if (results.length === 0) {
      return res.status(404).send('No Courses Found!.');
    }

    const userData = results;
    res.send(userData);
  });
};

exports.CourseSelected = async (req, res) => {
  try {
    if (!req.session.user || !req.session.user.Username) {
      return res.status(401).send("User is not logged in");
    }
    const { courseDetails } = req.body;
    const username = req.session.user.Username;

    db.query("SELECT * FROM usercoursetable WHERE Username = ? AND CourseName = ?", [username, courseDetails.courseName], (error, results) => {
        if (error) {
          console.error("Database error:", error);
          return res.status(500).send("Internal server error");
        }
        if (results.length > 0) {
          return res.status(404).send("You have taken this course");
        } else {
          db.query(
            "INSERT INTO usercoursetable SET ?", {Username: username, CourseName: courseDetails.courseName, CourseSection: courseDetails.section}, (insertError, insertResults) => {
              if (insertError) {
                console.error("Database insert error:", insertError);
                return res.status(500).send("Internal server error");
              }
              return res.status(200).send("Course selection successful");
            }
          );
        }
      }
    );
  } catch (error) {
    console.error("Error in CourseSelected:", error);
    return res.status(500).send("Internal server error");
  }
};

exports.CourseShowRoutine = async (req, res) => {
  try {
    if (!req.session.user || !req.session.user.Username) {
      return res.status(401).send("User is not logged in");
    }
    const username = req.session.user.Username;
    const results = await new Promise((resolve, reject) => {
      db.query('SELECT * FROM usercoursetable WHERE Username = ?', [username], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });

    const courseNamesList = results.map(row => ({ courseName: row.CourseName, courseSection: row.CourseSection }));
    const courseDetails = [];

    for (let i = 0; i < courseNamesList.length; i++) {
      const courseName = courseNamesList[i]['courseName'];
      const courseSection = courseNamesList[i]['courseSection'];

      const courseResults = await new Promise((resolve, reject) => {
        db.query('SELECT * FROM courses WHERE CourseName = ? AND Section = ?', [courseName, courseSection], (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });

      courseDetails.push(courseResults);
    }
    res.send(courseDetails);

  } catch (error) {
    console.error("Error in CourseShowRoutine:", error);
    return res.status(500).send("Internal server error");
  }
};

//Forum
exports.ForumPost = async (req, res) => {
  const username = req.session.user.Username;
  const { 'post-title': title, 'post-text': text } = req.body;
  const image = req.file
  const imagePath = image['path']
  db.query('INSERT INTO forum (Title, Text, Picture, Username) VALUES (?, ?, ?, ?)', [title, text, imagePath, username], (error, result) => {
    if (error) {
      console.error('Error executing SQL query:', err);
      return res.status(500).send('Internal Server Error');
    } else {
      res.redirect('/StudentForum')
    }
  })
}

exports.PostFetch = async (req, res) => {
  db.query('SELECT PostID, Title, Text, Picture, Username FROM forum', (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).send('Internal server error');
    }

    if (results.length === 0) {
      return res.status(404).send('No Post Found!.');
    }

    const Posts = results;
    res.send(Posts);
  });
}

exports.PostFetchBasedOnID = async (req, res) => {
  const postID = req.query.id;
  db.query('SELECT * FROM forum WHERE PostID = ?', [postID], (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).send('Internal server error');
    } else {
      const Post = results;
      res.send(Post);
    }
  });
}

//Parking
exports.parking = (req, res) => {
  const { name, phoneNo, lic_plate, type } = req.body; 
  const loggedInUser = req.session.user;

  // Checking if the student has already booked
  db.query('SELECT * FROM parking_ver1 WHERE student_id = ? LIMIT 1', [loggedInUser.StudentID], (error, results) => {
      if (error) {
          console.error('Error checking previous bookings:', error);
          return res.status(500).send('Internal Server Error');
      }

      if (results.length > 0) {
          return res.status(400).send('No more bookings available');
      }

      const status = 'unpaid';

      db.query('INSERT INTO parking_ver1 (name, phoneNo, lic_plate, student_id, type, status) VALUES (?, ?, ?, ?, ?, ?)',
          [name, phoneNo, lic_plate, loggedInUser.StudentID, type, status],
          (insertError, insertResults) => {
              if (insertError) {
                  console.error('Error booking parking:', insertError);
                  return res.status(500).send('Internal Server Error');
              }
              res.redirect('back');
          }
      );
  });
};
