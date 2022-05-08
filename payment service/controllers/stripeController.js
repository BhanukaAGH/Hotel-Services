const stripe = require('stripe')(process.env.STRIPE_KEY)

const stripeController = async (req, res) => {
  const { prepaid, roomCount } = req.body

  const calculateOrderAmount = (prepaid) => {
    const calcValue = prepaid * roomCount
    const amount = Number(calcValue + '00')
    return amount
  }

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(prepaid),
    currency: 'LKR',
    automatic_payment_methods: {
      enabled: true,
    },
  })

  res.json({
    clientSecret: paymentIntent.client_secret,
  })
}

module.exports = stripeController
