require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const cors = require('cors')
const morgan = require('morgan')

const smsController = require('./controllers/smsController')

// middleware
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

app.post('/send-sms', smsController)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 8002
app.listen(port, () => console.log(`Server is listening on port ${port}`))
