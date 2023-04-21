"use strict";
let Models = require("../models"); //matches index.js
const getRecipe = (res) => {
  //finds all users
  Models.Recipe.findAll({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const createRecipe = (data, res) => {
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

};
