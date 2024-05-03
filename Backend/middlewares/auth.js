const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Token not provided", success: false });
    }

    jwt.verify(token, "Blitz", (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Auth failed", success: false });
      }

      req.user = decoded; // Attach decoded payload to req.user
      console.log("Decoded JWT payload:", decoded);
      next();
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};