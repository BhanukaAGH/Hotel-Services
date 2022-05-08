const mongoose = require('mongoose')
const validator = require('validator')

const ReservationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: validator.isEmail,
        message: 'Please provide valid email',
      },
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
