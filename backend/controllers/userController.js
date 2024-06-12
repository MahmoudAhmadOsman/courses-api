const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

//user token
const createToken = _id => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

// login a user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);
    //res.status(200).json({ firstName, email, token }); //send back firstName,email and password
    res.status(200).json({ email, token }); // only send back email and token when logged in
    //res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Verify user
const verifyUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such user!" });
  }
  const user = await User.findOneAndUpdate({ _id: id }, { verified: true });
  // const user = await User.findOneAndUpdate({ _id: id });// before 1/18/2024

  if (!user) {
    return res.status(400).json({ error: "No such user!" });
  }

  res.redirect("/");
});

//Create new user
const signupUser = asyncHandler(async (req, res) => {
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
});

//get all users
// const getAllUsers = asyncHandler(async (req, res) => {
//   const users = await User.find({});
//   res.status(200).json(users);
// });

const getAllUsers = async (req, res) => {
  // const user_id = req.user._id;
  // const isAdmin = req.user.isAdmin;
  try {
    const users = await User.find({}).sort({
      createdAt: -1
    });
    res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

//get user by id

const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such user" });
  }

  const user = await User.findById(id);

  if (!user) {
    return res.status(400).json({ error: "No user found!" });
  }

  res.status(200).json(user);
});

//update User

const updateUserById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such user!" });
  }

  const user = await User.findOneAndUpdate(
    { _id: id },
    {
      ...req.body
    }
  );

  if (!user) {
    return res.status(400).json({ error: "No such user!" });
  }

  res.status(200).json(user);
};

//Delete user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such user" });
  }

  const user = await User.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(400).json({ error: "No such user" });
  }

  // res.status(200).json(user);
  res.json(`User with ${id} has been deleted`);
};

module.exports = {
  signupUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUser,
  verifyUser
};
