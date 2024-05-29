//1. create mongoose model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema(
  {
    title: { type: String, unique: true, lowercase: true, trim: true }
  },
  {
    timestamps: true
  }
);

// Create the Course model and export it
const Course = mongoose.model("Course", CourseSchema);
exports.Course = Course;
