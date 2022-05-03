const sgMail = require('@sendgrid/mail')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../errors')

const sendEmailController = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { to, message, subject } = req.body

  if (!to || !message || !subject) {
    throw new BadRequestError('Please provide all values')
  }

  const msg = {
    to,
    from: 'abewickramah1@gmail.com', // Change to your verified sender
    subject,
    html: message,
  }

  const info = await sgMail.send(msg)
  res.status(StatusCodes.OK).json(info)
}

module.exports = sendEmailController
