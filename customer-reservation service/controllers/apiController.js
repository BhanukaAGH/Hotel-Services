const Reservation = require('../models/Reservations')
const { StatusCodes } = require('http-status-codes')
const Moment = require('moment')
const MomentRange = require('moment-range')
const moment = MomentRange.extendMoment(Moment)
const CustomError = require('../errors')

//! Make Reservation
const makeReservation = async (req, res) => {
  const {
    userId,
    name,
    email,
    roomCount,
    roomType,
    hotelName,
    phoneNo,
    checkIn,
    checkOut,
  } = req.body

  let { prepaid } = req.body

  if (
    !userId ||
    !name ||
    !email ||
    !roomCount ||
    !roomType ||
    !hotelName ||
    !phoneNo ||
    !checkIn ||
    !checkOut
  ) {
    throw new CustomError.BadRequestError('Please provide all values')
  }

  prepaid = prepaid * roomCount
  const reservation = await Reservation.create({
    userId,
    name,
    email,
    roomCount,
    roomType,
    hotelName,
    phoneNo,
    checkIn,
    checkOut,
    prepaid,
  })
  res.status(StatusCodes.CREATED).json(reservation)
}

//! Get All Reservations By userId
const getAllReservations = async (req, res) => {
  const reservations = await Reservation.find({ userId: req.params.userId })

  if (!reservations) {
    throw new CustomError.NotFoundError('No reservations')
  }

  res.status(StatusCodes.OK).json({ reservations })
}

//! Cancel Reservation
const cancelreservations = async (req, res) => {
  const reservation = await Reservation.findOne({ _id: req.params.id })

  if (!reservation) {
    throw new CustomError.NotFoundError(
      `No reservation with id ${req.params.id}`
    )
  }

  await reservation.remove()
  res.status(StatusCodes.OK).json({ msg: 'Success! Reservation canceled.' })
}

//! Check Availability by user Id
const checkAvailability = async (req, res) => {
  const { userId, checkIn, checkOut } = req.body
  const reservations = await Reservation.find({ userId })

  let availability = true

  for (let x in reservations) {
    var date1 = [
      moment(reservations[x].checkIn),
      moment(reservations[x].checkOut),
    ]
    var date2 = [moment(checkIn), moment(checkOut)]

    var range = moment.range(date1)
    var range2 = moment.range(date2)

    if (range.overlaps(range2)) {
      availability = false
      break
    } else {
      availability = true
    }
  }

  res.status(StatusCodes.OK).json({ availability })
}

module.exports = {
  makeReservation,
  getAllReservations,
  cancelreservations,
  checkAvailability,
}

//! Get Reservation By Id
// const getReservation = async (req, res) => {
//   const reservation = await Reservation.findOne({ _id: req.params.id })

//   if (!reservation) {
//     throw new CustomError.NotFoundError(
//       `No reservation with id ${req.params.id}`
//     )
//   }

//   res.status(StatusCodes.OK).json({ reservation })
// }
