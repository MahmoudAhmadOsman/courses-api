const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Course = require("../models/CourseModal");

//@ CREATE A COURSE
const createCourse = asyncHandler(async (req, res) => {
  const { title, instructor, description, credit, price } = req.body;
  console.log("Course Details: ", req.body);

  try {
    const course = await Course.create({
      title,
      instructor,
      description,
      credit,
      price
    });
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
});

//@ GET ALL COURSES

const getAllCourses = asyncHandler(async (req, res) => {
  //use try catch to handle errors
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.status(200).json(courses); //Send all courses to client
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//@ GET A COURSE BY ID
const getCourseById = asyncHandler(async (req, res) => {
  //get course by its id
  const { id } = req.params;
  // check if id is valid or not
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: `There is no such course with this id:! ${id}` });
  }
  const course = await Course.findById(id);
  if (!course) {
    return res.status(404).json({ error: "There is no such course!" });
  }
  res.status(200).json(course);
});

//@ UPDATE A COURSE

const updateCourse = asyncHandler(async (req, res) => {
  // console.log("update course");
  const { id } = req.params;
  //check if there is an id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: `There is no such course with this id:! ${id}` });
  }
  const course = await Course.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body
    },
    { new: true }
  );
  if (!course) {
    return res
      .status(404)
      .json({ error: `There is no such course with this id:! ${id}` });
  }
  res.status(200).json(course);
});

//@ DELETE A COURSE
const deleteCourse = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ error: `There is no such course with this id:! ${id}` });
  }

  // const course = await Course.findOneAndDelete({ _id: id });
  const course = await Course.deleteOne({ _id: id });

  if (!course) {
    return res.status(400).json({ error: "No such course!" });
  }
  res.status(200).json("Course has been deleted!");
  res.status(200).json(course);
});

//Delete All Courses route

const deleteAllCourses = asyncHandler(async (req, res) => {
  res.send("Delete All Courses Route");
  try {
    await Course.deleteMany({});
    res.status(200).send({ message: "All courses have been deleted!" });
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while deleting courses!" });
  }
});

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  deleteAllCourses
};
