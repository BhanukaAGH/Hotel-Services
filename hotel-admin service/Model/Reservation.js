const mongoose = require('mongoose')
const { Schema } = mongoose
const AdminReservationSchema = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  hotelName: {
    type: String,
    unique: true,
    required: [true, 'hotel must have a name'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, ' must have a price'],
  },
  roomType: {
    type: String,
    default: 'single',
    enum: {
      values: ['single', 'double', 'triple', 'quad'],
      message: 'Hotel room is either:Single, Double, Triple, Quad',
    },
  },
  prePaymentAmount: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    default: 'Not Book',
    enum: ['Book', 'Not Book'],
  },
  longitude: {
    type: String,
  },
  latitude: {
    type: String,
  },
})

module.exports = mongoose.model('AdminReservation', AdminReservationSchema)
