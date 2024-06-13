// middleware/isAdmin.js
const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");

const isAdmin = asyncHandler(async (req, res, next) => {
  // const user = await User.findById(req.user);
  const user = await User.findById(req.user._id);
  if (!req.user) {
    res.status(401).json({ message: "Unauthorized request!" });
    return;
  }
  if (user && user.isAdmin === true) {
    next();
  } else {
    res.status(403).json({ message: "Access denied. Admins only." });
  }
});

module.exports = isAdmin;
