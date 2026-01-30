const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('UniFlow API is running');
});

// Import Routes
const userRoutes = require('./routes/users');
const eventRoutes = require('./routes/events');

app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
