"use strict";
let Models = require("../models"); //matches index.js
const getMealPlanner = (res) => {
 
  Models.MealPlanner.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const createMealPlanner = (data, res) => {
  //creates a new user using JSON data POSTed in request body
  console.log(data);
  new Models.MealPlanner(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateMealPlanner = (req, res) => {
  //updates the user matching the ID from the param using JSON data POSTed in request body
  console.log(req.body);
  Models.MealPlanner.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const deleteMealPlanner = (req, res) => {
  //deletes the user matching the ID from the param
  Models.MealPlanner.findByIdAndRemove(req.params.id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
module.exports = {
 getMealPlanner,
 createMealPlanner,
 updateMealPlanner,
 deleteMealPlanner
};
