const mongoose = require("mongoose");
const { Schema } = mongoose;
const AdminReservationSchema = new Schema({
  hotelName: {
    type: String,
    unique: true,
    required: [true, "hotel must have a name"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, " must have a price"],
  },
  roomType: {
    type: String,
    default: "Single",
    enum: {
      values: ["Single", "Double", "Triple", "Quad"],
      message: "Hotel room is either:Single, Double, Triple, Quad",
    },
  },
  prePaymentAmount: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    default: "Not Book",
    enum: ["Book", "Not Book"],
  },
  url: {
    type: String,
  },
});

module.exports = mongoose.model("AdminReservation", AdminReservationSchema);
