// models/Course.js
const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String },
  videoUrl: { type: String },
  category: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Course', CourseSchema);
