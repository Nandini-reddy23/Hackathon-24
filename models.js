const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Student Schema
const studentSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

// Password hashing
studentSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Course Schema
const courseSchema = new mongoose.Schema({
  name: String,
  type: { type: String, enum: ['theory', 'lab'] },
  branch: String
});

// Teacher Schema
const teacherSchema = new mongoose.Schema({
  name: String,
  background: String,
  rating: Number,
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

const Student = mongoose.model('Student', studentSchema);
const Course = mongoose.model('Course', courseSchema);
const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = { Student, Course, Teacher };