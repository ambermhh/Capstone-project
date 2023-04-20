const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mealPlannerSchema = new Schema({
  name: { type: String,required: true },
  UserId: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("mealPlanners", mealPlannerSchema);