const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Create Event
router.post('/', async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    const savedEvent = await newEvent.save();
    res.json(savedEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get All Events (Filter by status optional)
router.get('/', async (req, res) => {
  const { status } = req.query;
  try {
    const query = status ? { status } : {};
    const events = await Event.find(query).sort({ date: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Event Status (Approve/Reject)
router.patch('/:id/status', async (req, res) => {
  const { status, rejectionReason } = req.body;
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ msg: 'Event not found' });

    event.status = status;
    if (rejectionReason) event.rejectionReason = rejectionReason;
    
    await event.save();
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
