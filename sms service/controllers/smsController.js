const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../errors')

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)

const sendSMS = async (req, res) => {
  const { countryCode, phoneNumber, message } = req.body

  if (!countryCode) {
    throw new BadRequestError('Please provide country code')
  }

  if (!phoneNumber) {
    throw new BadRequestError('Please provide a phone number to send message')
  }

  if (!message) {
    throw new BadRequestError('Please provide a message to send')
  }

  client.messages
    .create({
      body: message,
      messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID,
      to: countryCode + phoneNumber.replace(/^0+/, ''),
    })
    .then((message) => console.log(message.sid))
    .catch((err) => console.log(err))

  res.status(StatusCodes.OK).send('message sent.')
}

module.exports = sendSMS
