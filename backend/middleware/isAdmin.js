// middleware/isAdmin.js
const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");

const isAdmin = asyncHandler(async (req, res, next) => {
  //   const user = req.user;
  //   console.log("isAdmin");
  //   console.log(req.user);
  const user = await User.findById(req.user);

  if (user && user.isAdmin === true) {
    next();
    console.log("user is admin");
  } else {
    res.status(403).json({ message: "Access denied. Admins only." });
  }
});

module.exports = isAdmin;
