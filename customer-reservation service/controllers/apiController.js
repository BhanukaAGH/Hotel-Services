const Reservation = require('../models/Reservations')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

//! Make Reservation
const makeReservation = async (req, res) => {
  const { userId, roomCount, roomType, hotelName, phoneNo, checkIn, checkOut } =
    req.body

  let { prepaid } = req.body

  if (
    !userId ||
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

  let availability
  let message

  for (let x in reservations) {
    let checkInDate = new Date(reservations[x].checkIn)
    let checkOutDate = new Date(reservations[x].checkOut)
    let newcheckIn = new Date(checkIn)
    let newcheckOut = new Date(checkOut)

    if (
      (checkInDate <= newcheckIn && checkOutDate >= newcheckIn) ||
      (checkInDate <= newcheckOut && checkOutDate >= newcheckOut)
    ) {
      availability = false
      message = 'date clashed'
      break
    } else {
      availability = true
      message = 'not date clashed'
    }
  }

  res.status(StatusCodes.OK).json({ availability, message })
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
