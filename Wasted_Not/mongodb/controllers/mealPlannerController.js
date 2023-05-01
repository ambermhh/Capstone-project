"use strict";
const { parseInt } = require("dotenv");
let Models = require("../models"); //matches index.js
const getMealPlanner = (res) => {
  Models.MealPlanner.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
// const getUserMealPlanner = (req, res) => {
//   const user = req.params.userId;

//   Models.MealPlanner.findOne({ UserId: user })
//     .then((data) => {
//       if (data) {
//         res.send({ result: 200, data: data.MealPlanner });
//       } else {
//         res.send({ result: 404, error: "Data not found" });
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send({ result: 500, error: err.message });
//     });
// };
const createMealPlanner = (req, res) => {
  const user = req.params.userId;
  const data = req.body;
  const dayofweek = parseInt(req.params.index);
  let dayOfWeekName = "";
  switch (dayofweek) {
    case 0:
      dayOfWeekName = "sunday";
      break;
    case 1:
      dayOfWeekName = "monday";
      break;
    case 2:
      dayOfWeekName = "tuesday";
      break;
    case 3:
      dayOfWeekName = "wednesday";
      break;
    case 4:
      dayOfWeekName = "thursday";
      break;
    case 5:
      dayOfWeekName = "friday";
      break;
    case 6:
      dayOfWeekName = "saturday";
      break;
  }

  //creates a new user using JSON data POSTed in request body
  console.log(data);
  console.log(dayOfWeekName, dayofweek);

  Models.MealPlanner.findOneAndUpdate(
    { UserId: user },
    { [dayOfWeekName]: data, UserId: user },
    { upsert: true }
  )
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
  deleteMealPlanner,
  // getUserMealPlanner,
};
