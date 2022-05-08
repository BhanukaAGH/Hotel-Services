const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const taxiSchema=new Schema({
    
    phone:{
        type:Number,                
        required:true,
        trim:true
    },
    location:{
        type:String,
        required:true,
        trim:true
    },
    hotelname:{
        type:String,
        required:true,
        trim:true
    },
    date:{
        type:String,
        required:true,
        trim:true
    }

})

const Taxi=mongoose.model('Taxi',taxiSchema)

module.exports=Taxi