const express = require('express')
const router = express.Router()

const {
  makeReservation,
  getAllReservations,
  cancelreservations,
  checkAvailability,
} = require('../controllers/apiController')

router.post('/', makeReservation)
router.get('/:userId', getAllReservations)
router.delete('/:id', cancelreservations)
router.post('/check-availability', checkAvailability)

module.exports = router
