const { generateToken } = require("./jwtUtil");
const { genPasswordHash, verifyPassword } = require("./passwordUtils");
const { sanitizeUserData } = require("./utils");
const { findUserByUsername, addUser } = require("./data/userStore");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ status: "API is running" });
});

router.post("/signup", async (req, res) => {
  const userData = req.body;
  const { username, password } = userData;

  if (!username || !password) {
    return res.status(400).send({ message: "username and password are required" });
  }

  if (findUserByUsername(username)) {
    return res.status(409).send({ message: "username already exists" });
  }

  userData.password = await genPasswordHash(password);
  addUser({ ...userData, cart: [] });

  return res.send({
    data: sanitizeUserData(userData),
    message: `${username} signed up successfully!!!`,
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userData = findUserByUsername(username);

  if (!userData) {
    return res.status(404).send("username doesn't exist");
  }

  const isPwdValid = await verifyPassword(password, userData.password);

  if (!isPwdValid) {
    return res.status(401).send("Invalid credentials");
  }

  const tokenPayload = {
    username: userData.username,
    email: userData.email,
    name: userData.name,
  };
  const token = generateToken(tokenPayload, "30m");

  res.cookie("authToken", token, { httpOnly: true, maxAge: 3600_000 });

  return res.send({
    message: "Logged in successfully!!!",
    data: sanitizeUserData(userData),
  });
});

router.get("/logout", (req, res) => {
  res.clearCookie("authToken");
  res.send({ message: "Logged out successfully!!!" });
});

module.exports = router;
