const Reservations=require('../models/Reservations')

const getReservations= async (req,res)=>{
    const email=req.params.email;//get email from params
   // const Email=req.body.emails;//get email from body
    try{
        const data=await Reservations.find({Email:email})
        console.log(data)
        res.json(data)
        
    }catch (error){
        console.log("failed")
        console.log(error)
        res.status(500).send({error:error})
    }
}
const getAll= async (req,res)=>{//get all ids by reservation
        const a = req.body.ids;
        
    try{
        const data=await Reservations.find({Email:a})
        //const data=await Reservations.find({})
        //console.log(data)
        res.json(data)
        
    }catch (error){
        console.log("failed")
        console.log(error)
        res.status(500).send({error:error})
    }
}
module.exports={getReservations,getAll}