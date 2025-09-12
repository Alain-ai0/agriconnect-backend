// models/Product.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  img: { type: String },
  price: { type: String }, // keep string since frontend shows '$1.50/kg'
  seller: { type: String },
  description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
