const express = require("express");
const router = express.Router();
const jwt= require('jsonwebtoken')
const User = require('../models/user')
const mongoose = require("mongoose");
const db = "mongodb+srv://userOlga:12345@projects.4acog.mongodb.net/projects";

mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

//creact middleware
function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send("Unauthorized request");
  }
  let token = req.headers.authorization.splite(' ')[1]
  if(token === 'null') {
    return res.status(401).send("Unauthorized request");
  }let payload = jwt.verify(tolen, 'secretKey')
  if(!payload) {
    return res.status(401).send("Unauthorized request");
  }
  req.userId = payload.subject
  next()

}

router.get("/", (req, res) => {
  res.send("From API router");
});

router.post('/register', (req, res) => {
  let userDate = req.body
  let user = new User(userDate);
  user.save((error, registeredUser) => {
    if(error) {
      console.log(error)
    } else {
      let payload = { subject: registeredUser._id }
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({token});
    }
  })
})

router.post('/login', (req, res) => {
  let userData = req.body

  User.findOne({email: userData.email}, (error, user) => {
    if(error) {
      console.log(error)
    } else { 
        if (!user) {
          res.status(401).send('Invalid email')
        } else
        if (user.password !== userData.password) {
          res.status(401).send("Invalid password");
        } else {
          let payload = { subject: user._id }
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token});
        }
    }
  })
})

module.exports = router;
