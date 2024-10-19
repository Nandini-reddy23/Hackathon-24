const express = require('express');
const { getCourses, getTeachers } = require('../controllers/courseController');
const router = express.Router();

router.get('/courses', getCourses);
router.get('/teachers/:courseId', getTeachers);

module.exports = router;