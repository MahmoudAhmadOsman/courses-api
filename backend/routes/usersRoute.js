const express = require("express");

const {
  signupUser,
  getAllUsers,
  verifyUser,
  getUserById,
  updateUserById,
  deleteUser,
  loginUser
} = require("../controllers/userController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// Register a user route
router.post("/register", signupUser);
//Login a user route
router.post("/login", loginUser);

//=== REQUIRE AUTH USING use() middle

//get user by id
router.get("/list/:id", getUserById);

//update user by id
router.put("/list/update/:id", updateUserById);

// Verify email
router.get("/verify/:id", verifyUser);

//delete user by id
router.delete("/list/delete/:id", deleteUser);

router.use(requireAuth);
//Get all users
router.get("/list", getAllUsers);
// router.get("/list", protect, isAdmin, getAllUsers);

module.exports = router;
