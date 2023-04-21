const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mealPlannerSchema = new Schema({
  name: { type: String,required: true },
  UserId: { type: Schema.Types.ObjectId, ref: "User" },
  monday: {type: String},
  tuesday: {type: String},
  wednesday: {type: String},
  thursday: {type: String},
  friday: {type: String},
  satureday: {type: String},
  sunday: {type: String},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("mealPlanners", mealPlannerSchema);