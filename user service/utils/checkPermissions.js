const CustomError = require('../errors')

const checkPermissions = (requestUser, resourceUserId) => {
  if (requestUser.role === 'system_admin') return
  if (requestUser.userId === resourceUserId.toString()) return

  throw new CustomError.UnauthorizedError('Not authorized to access this route')
}

module.exports = checkPermissions
