const AdminReservation = require('../Model/Reservation')

exports.createReservation = async (req, res) => {
  try {
    const reversion = await AdminReservation.create(req.body)
    res.status(200).json(reversion)
  } catch (error) {
    console.log(error)
    res.status(409)
  }
}

exports.getReservationDetails = async (req, res) => {
  try {
    const reservationDetails = await AdminReservation.find()
    res.json({
      status: 'success',
      results: reservationDetails.length,
      reservationDetails,
    })
  } catch (error) {
    console.log(error)
    res.json({
      status: 'fail',
      message: error,
    })
  }
  
}

exports.getOneReservation = async (req, res) => {//get one admins hotels
 try {
  const reservations = await AdminReservation.find({ userId: req.params.userId })
  if (!reservations) {
    throw new CustomError.NotFoundError('No reservations')
  }

  res.status(200).json({ reservations })
 } catch (error) {
   console.log(error);
   res.status(500);
 } 
}

exports.updateReservation = async (req, res) => {
  try {
    const oneReservation = await AdminReservation.findOneAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    )

    res.json({
      status: 'success',
      oneReservation,
    })
  } catch (error) {
    res.json({
      status: 'fail',
      message: error,
    })
  }
}

exports.deleteOneReservation = async (req, res) => {
  try {
    await AdminReservation.findOneAndDelete(req.params.id)
    res.json({
      status: 'success',
    })
  } catch (error) {
    res.json({
      status: 'fail',
      message: error,
    })
  }
}
