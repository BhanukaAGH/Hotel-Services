const Reservations=require('../models/Reservations')

const cancelreservations=async(req,res)=>{
    console.log("test")
    // const Document=await Reservations.find({});
    // console.log(Document)
    const doc=await Reservations.find({});
    console.log(doc)
    res.json(doc)






//     console.log("test")
//     const arr = req.body.ids.split(',');//get multiple ids from body
//     console.log(arr)
// try{
    
//     //console.log(arr);
//     //const Document=await Reservations.deleteMany({'_id':{'$in':arr}});
   
//     res.json(Document);
//     if (Document.acknowledged){
//         console.log("Delete successfull");
        
//     }else{console.log("Delete Failed");}
// }catch (e){
//     console.log("delete failed error")
// }
}
module.exports={cancelreservations}