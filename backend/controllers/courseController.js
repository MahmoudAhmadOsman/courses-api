const mongoose = require("mongoose");
const Course = require("../models/Course");

//@ CREATE A COURSE
const createCourse = async (req, res) => {
  //steps to create a course
  //1. Get the data from the request body

  //2. Create a new course instance
  //3. Save the course instance to the database
  //4. Send a response to the client
  //5. Handle errors
  //6. Handle success
  //7. Handle failure
  //8. Handle completion
  //9. Handle cancellation
  //10. Handle completion

  const { title } = req.body;
  console.log(title);

  try {
    const course = await Course.create({
      title
    });
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

//@ GET ALL COURSES

const getAllCourses = async (req, res) => {
  //use try catch to handle errors
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.status(200).json(courses); //Send all courses to client
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//@ GET A COURSE
const geCourse = (req, res) => {
  res.send("Get a course");
};

//@ UPDATE A COURSE

const updateCourse = (req, res) => {
  res.send("Update a course");
};

//@ DELETE A COURSE
const deleteCourse = (req, res) => {
  res.send("Delete a course");
};

module.exports = {
  getAllCourses,
  geCourse,
  createCourse,
  updateCourse,
  deleteCourse
};
