const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  serving: { type: Number, required: true },
  cuisines: { type: String, required: true },
  diet: { type: String, required: true },
  instructions: { type: String, required: true },
  dishTypes: { type: String, required: true },
  image: { type: String },
  UserId: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("recipes", recipeSchema);
