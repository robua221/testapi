const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const userRoute = require("./routes/user");
const orderRoute = require("./routes/order");
app.use(cors());
app.use(express.json());

const db =
  "mongodb+srv://robin:1234@cluster0.qwwf3h4.mongodb.net/?retryWrites=true&w=majority";
app.use("/api/users", userRoute);
app.use("/api/order", orderRoute);

mongoose.connect(db, () => {
  console.log("db connected");
});
app.listen(5000, () => {
  console.log("Port");
});
