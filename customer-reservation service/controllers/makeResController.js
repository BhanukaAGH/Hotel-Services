const Reservations=require('../models/Reservations')


const makeReservation= async(req,res)=>{
    let { RoomCount, RoomType, HotelName, PhoneNo,Email,CheckIn,CheckOut,UseName,prepaid } = req.body

    // const checkreservations=await Reservations.find({UseName})
    // console.log(checkreservations)

     prepaid=prepaid*RoomCount
     
try{
    const reservations=await Reservations.create({
        RoomCount,
        RoomType,
        HotelName,
        PhoneNo,
        Email,
        CheckIn,
        CheckOut,
        UseName,
        prepaid

    })
    
    res.json(reservations)
    //res.status(201)
    
}catch (e){
    
    console.log("data not sumbited at makeResController.js")
    console.log(e)
    res.status(401)
 }

}

module.exports={
    makeReservation
}