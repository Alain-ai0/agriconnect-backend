// seed/seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Product = require('../models/Product');
const Course = require('../models/Course');
const Expert = require('../models/Expert');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/agriconnect';

async function seed() {
  await connectDB(MONGO_URI);
  await Product.deleteMany({});
  await Course.deleteMany({});
  await Expert.deleteMany({});

  const products = [
    {
      title: 'Organic Tomatoes',
      img: 'https://images.unsplash.com/photo-1689154683800-391752e77996?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0',
      price: '$1.50/kg',
      seller: 'Green Valley',
      description: 'Certified organic tomatoes from local farms.'
    },
    {
      title: 'Sweet Corn (dozen)',
      img: 'https://images.unsplash.com/photo-1598533639123-ab55777ef8d9?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0',
      price: '$2.00',
      seller: 'Sunny Acres',
      description: 'Fresh sweet corn, harvested this morning.'
    },
    {
      title: 'Heritage Apples',
      img: 'https://plus.unsplash.com/premium_photo-1665455301915-f56917a69ace?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0',
      price: '$2.80/kg',
      seller: 'Orchard Hill',
      description: 'Crisp, heirloom apples with rich flavor.'
    }
  ];

  const courses = [
    {
      title: 'Soil Health Program',
      description: 'Learn how to restore soil and increase yields.',
      imageUrl: 'https://images.unsplash.com/photo-1753345741174-5e69e446c3b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0',
      videoUrl: 'https://player.vimeo.com/progressive_redirect/playback/720p/file.mp4', // placeholder; replace with real host if needed
      category: 'Soil'
    },
    {
      title: 'Modern Corn Farming',
      description: 'Best practices for sweet corn production.',
      imageUrl: 'https://images.unsplash.com/photo-uulMMGOPUwc?auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://player.vimeo.com/progressive_redirect/playback/720p/file2.mp4',
      category: 'Crops'
    }
  ];

  const experts = [
    {
      name: 'Dr. Aline Nkurunziza',
      specialization: 'Soil Scientist',
      contactInfo: 'alinen@example.com',
      bio: '10+ years experience in soil health and regenerative farming.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Samuel Mugisha',
      specialization: 'Crop Management',
      contactInfo: 'samuel@example.com',
      bio: 'Worked with smallholder farms to improve yields.',
      avatar: 'https://images.unsplash.com/photo-1545996124-73f8c539e0b8?q=80&w=400&auto=format&fit=crop'
    }
  ];

  await Product.insertMany(products);
  await Course.insertMany(courses);
  await Expert.insertMany(experts);

  console.log('Seeding complete');
  process.exit(0);
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
