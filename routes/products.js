// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const auth = require('../middleware/auth');

// GET all
router.get('/', async (req, res) => {
  const items = await Product.find().sort({ createdAt: -1 });
  res.json(items);
});

// GET single
router.get('/:id', async (req, res) => {
  const item = await Product.findById(req.params.id);
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json(item);
});

// POST (protected) - add product
router.post('/', auth, async (req, res) => {
  const { title, img, price, seller, description } = req.body;
  const product = new Product({ title, img, price, seller, description });
  await product.save();
  res.status(201).json(product);
});

module.exports = router;
