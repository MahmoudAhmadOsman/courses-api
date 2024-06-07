const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModal");

//user token
const createToken = _id => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "0d" });
};

//Create new user
const signupUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body; //destructure the request body

  try {
    // create new user
    const user = await User.signup(firstName, lastName, email, password);

    //create the token before signing up the user
    const token = createToken(user._id);
    res.status(200).json({ firstName, lastName, email, token }); //send back user email and token
  } catch (error) {
    console.log(error);
    // res.status(400).json({ error: error.message });
    res.status(400).json({
      error: error.message,
      message: "Unable to create new user account!!"
    });
  }
};

module.exports = {
  signupUser
};
