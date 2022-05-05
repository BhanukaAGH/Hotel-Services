const express=require('express')
const router=express.Router()
const{makeReservation}=require('../controllers/makeResController')
const {getReservations,getAll}=require('../controllers/getResController')
const {cancelreservations}=require('../controllers/cancelResController')


router.post("/makeres",makeReservation)
router.get("/getres/:email",getReservations)
//router.delete('/deletem',cancelreservations)
router.get('/getres',getAll)

//all post method
router.post('/getres',getAll) //get all reservations of entered id
router.post('/deletem',cancelreservations)//get multiple reservation from id field

module.exports=router