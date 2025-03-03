const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access denied" });
  try {
    const verified = jwt.verify(
      token.replace("Bearer ", ""),
      process.env.SECRET
    );
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

const authorizeRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access Forbidden" });
    }
    next();
  };
};

module.exports = { authenticateUser, authorizeRole };
