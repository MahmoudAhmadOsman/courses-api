const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
const requireAuth = async (req, res, next) => {
  // verify user is authenticated
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token is required!" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    // req.user = await User.findOne({ _id }).select("_id isAdmin");
    req.user = await User.findOne({ _id }).select("_id isAdmin"); // check if the user is admin or not
    next();
  } catch (error) {
    res.status(401).json({ error: "Request is not authorized!!!" });
    console.log("An authentication error: ", error.message);
  }
};

module.exports = requireAuth;
