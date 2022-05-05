const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')

const app =express()
dotenv.config()

app.use(cors())
app.use(express.json())

require('./db/connectDB')
const apiRoutes=require('./routes/apiRoutes')

app.use('/api',apiRoutes)



const port=process.env.PORT || 5003

app.listen(port,()=>{
    console.log("Traveler Reservation Service port Started at:"+port);
})