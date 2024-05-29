const express = require('express');


//1.  get all course controller routes one by one

const {getAllCourses} = require('../controllers/courseController');


//2. create a router

const router = express.Router();

//3.use the router

router.get('/',getAllCourses)



//4. use this router in index.js




//export the router module
module.exports = router;

module.exports = router;

module.exports = router;