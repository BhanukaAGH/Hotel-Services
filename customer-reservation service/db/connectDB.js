const mongoose=require('mongoose')


mongoose.connect(process.env.dbURI,{
    
}).then(()=>console.log("DB connection successfull"))
.catch(()=>console.log("DB connection failed"))