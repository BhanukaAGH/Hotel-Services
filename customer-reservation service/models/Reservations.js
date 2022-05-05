const mongoose= require('mongoose')
const Schema=mongoose.Schema

const reservationsSchema=new Schema({
    RoomCount:{
        type:Number,
        required:true,
        trim:true
    },
    RoomType:{
        type:String,
        required:true,
        trim:true
    },
    HotelName:{
        type:String,
        required:true,
        trim:true
    },
    PhoneNo:{
        type:Number,
        required:true,
        trim:true
    },
    Email:{
        type:String,
        required:true,
        trim:true
    },
    CheckIn:{
        type:String,
        required:true,
        trim:true
    },
    CheckOut:{
        type:String,
        required:true,
        trim:true
    },
    UseName:{
        type:String,
        required:true,
        trim:true
    },
    prepaid:{
        type:Number,
        trim:true
    },
    

},{timestamps:true})

const Reservations=mongoose.model('Reservations',reservationsSchema)

module.exports=Reservations