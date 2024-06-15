const express = require("express");
const {
  getAllCourses,
  createCourse,
  getCourseById,
  updateCourse,
  deleteCourse,
  seedCourses
} = require("../controllers/courseController");
const requireAuth = require("../middleware/requireAuth");

//2. create a router

const router = express.Router();
//=== REQUIRe AUTH USING use() middle
// router.use(requireAuth);

//@SEED COURSES
router.post("/seed", requireAuth, seedCourses);

//3.use the router

//@ GET ALL COURSES
router.get("/list", getAllCourses);

//@ CREATE A COURSE
router.post("/create", requireAuth, createCourse);

//@GET A COURSE BY ID
router.get("/list/:id", getCourseById);

//@UPDATE COURSE
router.put("/list/update/:id", requireAuth, updateCourse);

//@DELETE COURSE
router.delete("/list/delete/:id", deleteCourse);

//@DELLE ALL COURSES
router.delete("/deleteAll", deleteCourse);

//@SEED COURSES
// router.post("/seed", seedCourses);

module.exports = router; //4. use this router in index.js
