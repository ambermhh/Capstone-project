const mongoose = require("mongoose");
const { number, array } = require("prop-types");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: { type: String, trim: true, required: true },
  last_name: { type: String, trim: true, required: true },
  username: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true, unique: true },
  password: { type: String, required: true },
  numFollowers: { type: Number, default: 0 },
  numFollowing: { type: Number, default: 0 },
  user_bio: { type: String },
  profile_picture: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  
});
module.exports = mongoose.model("users", userSchema);
