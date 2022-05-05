const AdminReservation = require('../Model/Reservation')

exports.createReservation = async (req, res) => {
  try {
    const reversion = await AdminReservation.create(req.body)
    res.statusCode(200).json({
      status: 'success',
      reversion,
    })
  } catch (error) {
    console.log(error)
    res.json({
      status: 'fail',
      message: error,
    })
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

exports.getOneReservation = async (req, res) => {
  try {
    const oneReservation = await AdminReservation.findById(req.params.id)
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
