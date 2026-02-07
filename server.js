const express = require("express");
const cookieParser = require("cookie-parser");

const router = require("./router");
const cartRouter = require("./cartRouter");

const app = express();
const port = 4000;

app.use(cookieParser());
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  return next();
});

app.use("/user", router);
app.use("/cart", cartRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
