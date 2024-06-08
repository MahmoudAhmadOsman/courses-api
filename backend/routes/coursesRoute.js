const express = require("express");

//1.  Get all course controller routes one by one

const {
  getAllCourses,
  createCourse,
  getCourseById,
  updateCourse,
  deleteCourse,
  seedCourses
} = require("../controllers/courseController");

//2. create a router

const router = express.Router();

//3.use the router

//@ GET ALL COURSES
router.get("/list", getAllCourses);

//@ CREATE A COURSE
router.post("/create", createCourse);

//@GET A COURSE BY ID
router.get("/list/:id", getCourseById);

//@UPDATE COURSE
router.put("/list/update/:id", updateCourse);

//@DELETE COURSE
router.delete("/list/delete/:id", deleteCourse);

//@DELLE ALL COURSES
router.delete("/deleteAll", deleteCourse);

//@SEED COURSES
router.post("/seed", seedCourses);

module.exports = router; //4. use this router in index.js
