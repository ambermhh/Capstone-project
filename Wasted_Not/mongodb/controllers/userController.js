"use strict";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let Models = require("../models"); //matches index.js

const getUsers = (res) => {
  Models.User.findAll({})
    .then(function (data) {
      res
        .status(200)
        .json({ result: "User data fetched successfully", data: data });
    })
    .catch((err) => {
      res.status(500).json({ result: err.message });
    });
};

const getUser = (res) => {
  console.log(req.params.id)
  Models.User.findAll({ id: req.params.id })
    .then(function (data) {
      res
        .status(200)
        .json({ result: "User data fetched successfully", data: data });
    })
    .catch((err) => {
      res.status(500).json({ result: err.message });
    });
};

const loginUser = async (req, res) => {
  try {
    // Get user input from request body
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).json({ result: "All input is required" });
    }
    // Validate if user exists in our database
    const user = await Models.User.findOne( { email: email } );
     console.log(user);
    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign({ userId: user.id, email }, process.env.JWT_KEY, {
        expiresIn: "2h",
      });
      console.log(token);

      // send back logged in user details
      res.status(200).json({
        result: "User successfully logged in",
        data: user,
        token: token,
      });
    } else res.status(400).json({ result: "Invalid user credentials" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ result: err.message });
  }
};

const registerUser = async (req, res) => {
  try {
    // Get user input by destructuring request body
    const { first_name, last_name, email, password, username } = req.body;

    // Validate user input
    if (!(email && password && first_name && last_name && username)) {
      res.status(400).json("All input is required");
    }

    // Validate if user exists in our database
    const oldUser = await Models.User.findOne({ where: { email } });

    if (oldUser) {
      res.status(409).json({ result: "User already exists. Please login" });
    }

    //Encrypt user password
    let encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await Models.User.create({
      first_name,
      last_name,
      username,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign({ user_id: user.id, email }, process.env.JWT_KEY, {
      expiresIn: "2h",
    });
    // save user token
    user.token = token;

    // return new user
    res
      .status(201)
      .json({ result: "User successfully registered", data: user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ result: err.message });
  }
};


const updateUser = (req, res) => {
  Models.User.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
  })
    .then(function (data) {
      res.status(200).json({ result: "User updated successfully", data: data });
    })
    .catch((err) => {
      res.status(500).json({ result: err.message });
    });
};

const deleteUser = (req, res) => {
  Models.User.destroy({
    where: { id: req.params.id },
  })
    .then(function (data) {
      res.status(200).json({ result: "User deleted successfully", data: data });
    })
    .catch((err) => {
      res.status(500).json({ result: err.message });
    });
};

const addProfileImage = (req, res) => {
      console.log(req.file);
      const userUpdates = {
        profile_picture: "/images/" + req.file.filename,
        //  + req.file.originalname,
      };
      //save path to uploaded file in DB
      Models.User.findOneAndUpdate({ _id: req.params.id },userUpdates)
        .then(
          (response) => {
            console.log(response);
            res.status(200).json({
              result: "Image uploaded successfully",
              data: userUpdates,
            }) // send updated info back in response
          })
        .catch((err) => res.status(500).json({ result: err.message }));
    }

module.exports = {
  getUsers,
  loginUser,
  registerUser,
  updateUser,
  deleteUser,
  addProfileImage,
  getUser
};
