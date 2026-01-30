const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create or Update User (Upsert)
router.post('/', async (req, res) => {
  const { uid, name, email, role, department } = req.body;
  try {
    let user = await User.findOne({ uid });
    if (user) {
      // Update existing
      user.name = name || user.name;
      user.role = role || user.role;
      user.department = department || user.department;
      await user.save();
    } else {
      // Create new
      user = new User({ uid, name, email, role, department });
      await user.save();
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get User by UID
router.get('/:uid', async (req, res) => {
  try {
    const user = await User.findOne({ uid: req.params.uid });
    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
