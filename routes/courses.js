// routes/courses.js
const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
  const courses = await Course.find().sort({ createdAt: -1 });
  res.json(courses);
});

router.get('/:id', async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) return res.status(404).json({ message: 'Not found' });
  res.json(course);
});

router.post('/', auth, async (req, res) => {
  const { title, description, imageUrl, videoUrl, category } = req.body;
  const course = new Course({ title, description, imageUrl, videoUrl, category });
  await course.save();
  res.status(201).json(course);
});

module.exports = router;
