const mongoose = require('mongoose');
const Course = require('../models/Course');


 

//@ GET ALL COURSES

const getAllCourses = async (req, res) =>{

    //Send all courses to client
    const courses = await Course.find().sort({createdAt: -1});
    res.status(200).json(courses);
    
}


 





//@ GET A COURSE
const geCourse = (req, res) =>{
    res.send('Get a course');
}




//@ CREATE A COURSE
const createCourse = (req, res) =>{
    res.send('Create a course');
}


//@ UPDATE A COURSE

const updateCourse = (req, res) =>{
    res.send('Update a course');
}   




//@ DELETE A COURSE
const deleteCourse = (req, res) =>{
    res.send('Delete a course');
}


module.exports = {
    getAllCourses,
     geCourse, createCourse,
      updateCourse, deleteCourse
    }