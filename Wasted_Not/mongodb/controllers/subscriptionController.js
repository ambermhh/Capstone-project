"use strict";
let Models = require("../models"); //matches index.js



const getSubsriptions = (res) => {
  //finds all users
  Models.Subscription.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const createSubscription = (data, res) => {
  //creates a new user using JSON data POSTed in request body
  console.log(data);
  new Models.Subscription(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateSubscription = (req, res) => {
  //updates the user matching the ID from the param using JSON data POSTed in request body
  console.log(req.body);
  Models.Subscription.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const deleteSubscription = (req, res) => {
  //deletes the user matching the ID from the param
  Models.Subscription.findByIdAndRemove(req.params.id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
module.exports = {
  getSubsriptions,
  createSubscription,
  updateSubscription,
  deleteSubscription,
};
