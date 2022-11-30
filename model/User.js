const mongoose = require("mongoose");
const User = new mongoose.Schema({
  usid: { type: String, required: true, unique: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  img: { type: String },
});
const model = mongoose.model("UserData", User);
module.exports = model;
