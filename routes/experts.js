// routes/experts.js
const express = require('express');
const router = express.Router();
const Expert = require('../models/Expert');
const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
  const experts = await Expert.find().sort({ createdAt: -1 });
  res.json(experts);
});

router.post('/', auth, async (req, res) => {
  const { name, specialization, contactInfo, bio, avatar } = req.body;
  const expert = new Expert({ name, specialization, contactInfo, bio, avatar });
  await expert.save();
  res.status(201).json(expert);
});

module.exports = router;
