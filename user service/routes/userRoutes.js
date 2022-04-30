const express = require('express')
const router = express.Router()
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication')

const {
  getAllUsers,
  getSingleUser,
  updateUser,
  updateUserPassword,
} = require('../controllers/userController')

router
  .route('/')
  .get(authenticateUser, authorizePermissions('system_admin'), getAllUsers)

router.route('/updateUser').patch(authenticateUser, updateUser)
router.route('/updateUserPassword').patch(authenticateUser, updateUserPassword)
router.route('/:id').get(authenticateUser, getSingleUser)

module.exports = router
