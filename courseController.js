const { Course, Teacher, Assignment } = require('../models/models');

const getCourses = async (req, res) => {
  const courses = await Course.find({});
  res.json(courses);
};

const getTeachers = async (req, res) => {
  const teachers = await Teacher.find({ courses: req.params.courseId });
  res.json(teachers);
};

module.exports = { getCourses, getTeachers };