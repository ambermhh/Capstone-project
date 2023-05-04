"use strict";
let Models = require("../models"); //matches index.js

const getRecipe = (res) => {
  Models.Recipe.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const getUserPosts = (req, res) => {
  // console.log(req.params.id);
  const user = req.params.id;
  console.log('getting posts for user '+user);
  
  Models.Recipe.find({ UserId: user })

    .then((data) => {
      console.log(data);
      if (data) {
        res.send({ result: 200, data: data });
      } else {
        res.send({ result: 404, error: "Data not found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createRecipe = (req, res) => {
  console.log(req.file) // saved filename is in req.file.filename
  const data = req.body;
  data.image = "/images/" + req.file.filename
  data.UserId = req.params.userid
  //creates a new user using JSON data POSTed in request body
  console.log(data);
  new Models.Recipe(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateRecipe = (req, res) => {
  //updates the user matching the ID from the param using JSON data POSTed in request body
  console.log(req.body);
  Models.Recipe.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const deleteRecipe = (req, res) => {
  //deletes the user matching the ID from the param
  Models.Recipe.findByIdAndRemove(req.params.id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
module.exports = {
getRecipe,
createRecipe,
updateRecipe,
deleteRecipe,
getUserPosts

};
