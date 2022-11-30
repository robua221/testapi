const User = require("../model/User.js");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.json(error);
  }
});

router.post("/register", async (req, res) => {
  try {
    const user = await new User(req.body);
    console.log(user);
    const savedUser = await user.save();
    res.status(200).json(savedUser);
    console.log(savedUser);
  } catch (error) {
    res.json(error.message);
  }
});
module.exports = router;
