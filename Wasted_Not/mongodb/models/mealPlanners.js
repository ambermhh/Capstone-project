const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mealPlannerSchema = new Schema({
  UserId: { type: Schema.Types.ObjectId, ref: "User" },
  sunday: [{name: {type: String}, recipe: {type: String}}],
  monday: [{name: {type: String}, recipe: {type: String}}],
  tuesday: [{name: {type: String}, recipe: {type: String}}],
  wednesday: [{name: {type: String}, recipe: {type: String}}],
  thursday: [{name: {type: String}, recipe: {type: String}}],
  friday: [{name: {type: String}, recipe: {type: String}}],
  saturday: [{name: {type: String}, recipe: {type: String}}],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("mealPlanners", mealPlannerSchema);
