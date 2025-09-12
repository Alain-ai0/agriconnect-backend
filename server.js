// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const courseRoutes = require('./routes/courses');
const expertRoutes = require('./routes/experts');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB(process.env.MONGO_URI);

app.use(express.json({ limit: '10mb' }));
app.use(cors({
  origin: process.env.CLIENT_URL || '*'
}));

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/experts', expertRoutes);

app.get('/', (req, res) => res.send('AgriConnect API is running'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
