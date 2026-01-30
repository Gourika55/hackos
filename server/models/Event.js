const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  eventId: { type: String, unique: true }, // Can use UUID or rely on _id
  title: { type: String, required: true },
  description: String,
  date: { type: String, required: true }, // ISO Date string YYYY-MM-DD
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  location: String,
  clubId: String,
  clubName: String,
  createdBy: { type: String, required: true }, // User UID
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  rejectionReason: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', EventSchema);
