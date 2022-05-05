const express = require('express')
const {
  createReservation,
  getReservationDetails,
  getOneReservation,
  updateReservation,
  deleteOneReservation,
} = require('../Controller/reservationController')
const router = express.Router()

router.route('/createReservationDetails').post(createReservation)
router.route('/getReservationDetails').get(getReservationDetails)
router.route('/getReservationDetail/:id').get(getOneReservation)
router.route('/updateReservationDetail/:id').patch(updateReservation)
router.route('/deleteOneReservation/:id').delete(deleteOneReservation)

module.exports = router
