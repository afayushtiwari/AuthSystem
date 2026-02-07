const express = require("express");
const authController = require("./authController");
const { findUserByUsername } = require("./data/userStore");

const cartRouter = express.Router();

cartRouter.post("/add", authController, (req, res) => {
  const { username } = res.locals.user;
  const user = findUserByUsername(username);

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  const product = req.body?.product || {
    id: 101,
    price: 120000,
    name: "Smartphone",
  };

  user.cart.push(product);
  return res.send({
    message: "Product added to cart successfully",
    cart: user.cart,
  });
});

module.exports = cartRouter;
