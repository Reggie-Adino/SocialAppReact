const jwt = require("jsonwebtoken");
const JWT_SECRET = "gjahjah35643y484y80ndn";

const verifyToken = async (req, res, next) => {
  // const authHeader = req.headers.authorization;
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader; 
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Invalid token" });
      } else {
        req.user = decoded; 
        next();
      }
    });
  } else {
    return res.status(401).json({ error: "Token is required" });
  }
};

module.exports = { verifyToken };
