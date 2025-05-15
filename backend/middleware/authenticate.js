const jwt = require("jsonwebtoken");
const allConfig = require("../config/config");
const env = process.env.NODE_ENV || "development";
const config = allConfig[env];

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    console.log("Decoded token:", decoded, config.jwtSecret);

    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid token" });
  }
};
