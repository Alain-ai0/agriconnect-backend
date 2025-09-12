// models/Expert.js
const mongoose = require('mongoose');

const ExpertSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String },
  contactInfo: { type: String },
  bio: { type: String },
  avatar: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Expert', ExpertSchema);
