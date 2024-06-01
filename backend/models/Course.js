//1. create mongoose model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      trim: true,
      required: true
    }
  },
  {
    timestamps: true
  }
);

// Create the Course model and export it
module.exports = mongoose.model("Course", courseSchema);
