const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors')
require('dotenv').config();
const userRoutes=require('./routes/userRoutes.js')
const app=express();
app.use(cors())
app.use(express.json())
// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connected to db");
    app.listen(process.env.PORT,()=>{
        console.log("listening on port",process.env.PORT);
    })
})
.catch((err)=>{
    console.log("Unable to connect to db",err);
})
app.use('/api/test',userRoutes)