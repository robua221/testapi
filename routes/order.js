const Order = require("../model/Order");
const router = require("express").Router();
const User = require("../model/User");
router.get("/", async (req, res) => {
  try {
    const user = await Order.find();
    res.json(user);
  } catch (error) {
    res.json(error);
  }
});

router.post("/", async (req, res) => {
  const order = await new Order(req.body);
  console.log(order);
  try {
    const savedOrder = await order.save();
    res.status(200).json(savedOrder);
    res.json(order);
  } catch (error) {
    res.json(error.message);
  }
});

//GET USER ORDERS
router.get("/find/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    const user = await User.find({ _id: req.params.userId });
    const userorder = user.map((u) => {
      const { email, ...re } = u._doc;
      return re;
    });

    const remainingorder = orders.map((o) => {
      const { _id, userId, ...re } = o._doc;
      return re;
    });
    Array.prototype.push.apply(userorder, remainingorder);
    res.status(200).json(userorder);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
