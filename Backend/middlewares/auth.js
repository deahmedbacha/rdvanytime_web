const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/env");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Token not provided", success: false });
    }

    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Auth failed", success: false });
      }

      req.user = decoded;
      next();
    });
  } catch (error) {
    console.error("Auth middleware error:", error.message);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};