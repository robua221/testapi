const mongoose = require("mongoose");
const Order = new mongoose.Schema({
  userId: { type: String, required: true },
  productname: { type: String, required: true },
  status: { type: String, default: "pending" },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
const model = mongoose.model("OrderData", Order);
module.exports = model;
