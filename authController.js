const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Student } = require('../models/models');

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const student = new Student({ name, email, password });
    await student.save();
    const token = jwt.sign({ id: student._id }, 'secretkey', { expiresIn: '1h' });
    res.json({ token, student });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const student = await Student.findOne({ email });
  if (!student || !(await bcrypt.compare(password, student.password))) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: student._id }, 'secretkey', { expiresIn: '1h' });
  res.json({ token, student });
};

module.exports = { register, login };