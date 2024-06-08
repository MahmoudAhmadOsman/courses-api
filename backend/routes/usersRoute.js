const express = require("express");

const { signupUser, getAllUsers } = require("../controllers/userController");

const router = express.Router();

// Register a user route
router.post("/register", signupUser);

//Get all users
router.get("/list", getAllUsers);

module.exports = router;
