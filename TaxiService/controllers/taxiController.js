const Taxi=require('../models/Taxi')

const  getTaxi= async (req,res)=>{
    try {
        const{phone,location,hotelname,date}=req.body

        const create=await Taxi.create({phone,location,hotelname,date})
        res.status(200).json(create)
    } catch (error) {
        console.log(error)
        res.status(400)

        
    }
   

}

module.exports={
    getTaxi
}