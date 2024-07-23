const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

//user token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

// login a user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);

    const { firstName, lastName, isVerified, isAdmin, createdAt } = user;
    const token = createToken(user._id);
    res.status(200).json({
      email,
      token,
      firstName,
      lastName,
      isVerified,
      isAdmin,
      createdAt,
    });
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
  const user = await User.findOneAndUpdate({ _id: id }, { isVerified: true });
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
      message: "Unable to create new user account!!",
    });
  }
});

//get all users

// const getAllUsers = async (req, res) => {
//   const user_id = req.user._id;
//   try {
//     const user = await User.find({}).sort({
//       createdAt: -1
//     });
//     res.status(200).json(user);
//   } catch (error) {
//     console.log(error.message);
//     next(error);
//   }
// };

const getAllUsers = async (req, res, next) => {
  // const isAdmin = req.user.isAdmin;
  console.log("User Details:", req.user);
  if (req.user.isAdmin !== true) {
    return res.status(403).json({
      message:
        "Access forbidden: You are not authorized to view this resource!",
    });
  }

  try {
    const users = await User.find({}).sort({ createdAt: -1 });
    // console.log(users);
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
      ...req.body,
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
  verifyUser,
};
