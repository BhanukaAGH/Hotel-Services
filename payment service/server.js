require('dotenv').config()

const express = require('express')
const app = express()

const cors = require('cors')
const morgan = require('morgan')

const stripeController = require('./controllers/stripeController')

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

app.post('/create-payment-intent', stripeController)

const port = process.env.PORT || 8001

app.listen(port, () => console.log(`Server is listening on port ${port}`))
