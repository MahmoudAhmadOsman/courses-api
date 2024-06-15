//1. create mongoose model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Course title is required!"]
    },
    instructor: {
      type: String,
      trim: true,
      required: [true, "Instructor name is required!"]
    },
    description: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Course description is required!"]
    },
    credit: {
      type: Number,
      trim: true,
      required: [true, "Course credit is required!"]
    },
    price: {
      type: Number,
      required: [true, "Course price is required!"]
    },
    hasPaid: {
      type: Boolean,
      default: false
    },
    user_id: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

// Create the Course model and export it
module.exports = mongoose.model("Course", courseSchema);
