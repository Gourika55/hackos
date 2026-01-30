const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  bookingId: { type: String, unique: true },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
  eventName: String,
  resourceId: String, // Can link to a Resource model if we create one
  resourceName: String,
  organizerId: { type: String, required: true },
  date: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', BookingSchema);
