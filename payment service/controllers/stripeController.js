const stripe = require('stripe')(process.env.STRIPE_KEY)

const stripeController = async (req, res) => {
  const { items } = req.body

  const calculateOrderAmount = (items) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400
  }

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: 'USD',
    automatic_payment_methods: {
      enabled: true,
    },
  })

  res.json({
    clientSecret: paymentIntent.client_secret,
  })
}

module.exports = stripeController
