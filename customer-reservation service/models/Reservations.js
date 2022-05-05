const mongoose = require('mongoose')

const ReservationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    roomCount: {
      type: Number,
      required: true,
      trim: true,
    },
    roomType: {
      type: String,
      required: true,
      trim: true,
    },
    hotelName: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNo: {
      type: String,
      required: true,
      trim: true,
    },
    checkIn: {
      type: String,
      required: true,
      trim: true,
    },
    checkOut: {
      type: String,
      required: true,
      trim: true,
    },
    prepaid: {
      type: Number,
      trim: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Reservation', ReservationSchema)
