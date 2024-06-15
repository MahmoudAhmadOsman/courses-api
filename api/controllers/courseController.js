const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

const Course = require("../models/CourseModel");
//@INSERT MANY COURSES AT ONCE
const seedCourses = asyncHandler(async (req, res) => {
  try {
    const user_id = req.user._id;
    // Add the user_id to each course in the request body
    const coursesWithUser = req.body.map(course => ({ ...course, user_id }));

    // Insert the modified courses
    const createdCourses = await Course.insertMany(coursesWithUser, user_id);

    res.status(200).json({
      message: "Courses seeded successfully!",
      courses: createdCourses
      // user_id
    });
  } catch (error) {
    console.error(error.stack); // Use console.error for logging errors
    res.status(400).json({ error: error.message });
  }
});

// const seedCourses = asyncHandler(async (req, res) => {
//   try {
//     const user_id = req.user_.id;
//     const createdCourses = await Course.insertMany(req.body);
//     res.status(200).json({
//       message: "Courses seeded successfully!",
//       courses: createdCourses,
//       user_id
//     });
//   } catch (error) {
//     console.log(error.stack);
//     res.status(400).json({ error: error.message });
//   }
// });

//@ CREATE A COURSE
const createCourse = async (req, res) => {
  const {
    title,
    instructor,
    description,
    credit,
    price,
    role,
    hasPaid
  } = req.body;
  // console.log("Course Details: ", req.body);

  try {
    const user_id = req.user._id;
    const course = await Course.create({
      title,
      instructor,
      description,
      credit,
      price,
      role,
      hasPaid,
      user_id
    });
    // res.status(200).json(course);
    res.status(200).json({
      message: "New course created successfully!",
      course
    });
  } catch (error) {
    res.status(400).json({
      messageError: "An error occured while creating new course!",
      error: error.message
    });
    console.log(error.message);
  }
};

//@ GET ALL COURSES

const getAllCourses = asyncHandler(async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.status(200).json(courses); //Send all courses to client
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//@ GET A COURSE BY ID
const getCourseById = asyncHandler(async (req, res) => {
  const { id } = req.params;
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
  const { id } = req.params;
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
  res.status(200).json({
    message: "Courses updated successfully!",
    course
  });
});

//@ DELETE A COURSE
const deleteCourse = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ error: `There is no such course with this id:! ${id}` });
  }

  const course = await Course.findOneAndDelete({ _id: id });

  if (!course) {
    return res.status(400).json({ error: "No such course!" });
  }
  res.status(200).json({
    message: `Course with an id of - [ ${id} ] - has been deleted!`
    // course
  });
});

//Delete All Courses route
const deleteAllCourses = asyncHandler(async (req, res) => {
  try {
    // await Course.deleteMany({});
    await Course.remove({});
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
  deleteAllCourses,
  seedCourses
};
