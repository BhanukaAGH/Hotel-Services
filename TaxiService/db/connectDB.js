const mongoose=require('mongoose')


const dbURI='mongodb+srv://dsproj:secret123@dspoj.hmuky.mongodb.net/Hotel-Database?retryWrites=true&w=majority'

mongoose.connect(dbURI,{
    useNewUrlParser:true,useUnifiedTopology:true
})
.then(()=>console.log("DB connected"))
.catch(()=>console.log("connection failed"))