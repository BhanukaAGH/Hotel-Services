const express=require('express')
const router=express.Router()

const {getTaxi}=require('../controllers/taxiController')

router.post("/taxi",getTaxi)

module.exports=router