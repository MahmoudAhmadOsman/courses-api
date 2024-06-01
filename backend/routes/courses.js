const express = require("express");

//1.  get all course controller routes one by one

const {
  getAllCourses,
  createCourse
} = require("../controllers/courseController");

//2. create a router

const router = express.Router();

//3.use the router

//1. Get All courses route
router.get("/list", getAllCourses);

//create new course route
router.post("/create", createCourse);

//4. use this router in index.js

module.exports = router;
