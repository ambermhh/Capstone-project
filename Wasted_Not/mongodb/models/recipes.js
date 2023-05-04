const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  cuisines: { type: String},
  ingredients: { type: Array},
  instructions: { type: String, required: true },
  image: { type: String },
  UserId: { type: Schema.Types.ObjectId, ref: "User", require:true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("recipes", recipeSchema);
