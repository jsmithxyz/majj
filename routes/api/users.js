const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs"); // used to hash pw
const jwt = require("jsonwebtoken"); // used for authorization
const keys = require("../../config/keys"); // mongodb URI

// load input validation functions
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// load user model
const User = require("../../models/user");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  console.log("errors: " + JSON.stringify(errors));
  // check validation
  if (!isValid) {
    debugger;
    console.log("400 error incoming!");
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      console.log("user already exists");
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        filter: req.body.userFilter,
      });

      // hash password before saving it into db
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
      // ! do we need something here to return upon successful creation?
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  console.log("login hit");
  // form validation
  const { errors, isValid } = validateLoginInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // find user by email
  User.findOne({ email }).then((user) => {
    // check if user exists
    if (!user) {
      return res.status(400).json({ emailnotfound: "Email not found" });
    } else {
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          res.status(200).json(user);
        } else {
          res.status(400).json({ passwordincorrect: "Password incorrect" });
        }
      });
    }
  });
});

module.exports = router;
