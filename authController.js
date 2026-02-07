const { verifyToken } = require("./jwtUtil");

const authController = (req, res, next) => {
  const { authToken } = req.cookies;

  if (!authToken) {
    return res.status(401).send({ message: "Authentication token is missing" });
  }

  try {
    const userData = verifyToken(authToken);
    res.locals.user = userData;
    return next();
  } catch (error) {
    return res.status(401).send({ message: "Invalid or expired token" });
  }
};

module.exports = authController;
