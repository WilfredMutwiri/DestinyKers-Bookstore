const express=require('express');
const mongoose=require('mongoose');
const crypto=require('crypto');
const cors=require('cors')
const path=require('path')
const methodOverride=require('method-override');
const multer=require('multer');
const dotenv=require('dotenv').config();
const {GridFsStorage}=require('multer-gridfs-storage');
const { config } = require('dotenv');
const app=express();
app.use(methodOverride());
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
// create storage engine
const storage=new GridFsStorage({
    url:process.env.MONGO_URI,
    file:(req,file)=>{
        return new Promise((resolve,reject)=>{
            // encrypt file before storing it
            crypto.randomBytes(16,(err,buf)=>{
                if(err){
                    return reject(err)
                }
                const filename=buf.toString('hex')+path.extname(file.originalname);
                const fileInfo={
                    filename:filename,
                    bucketName:'uploads'
                };
                resolve(fileInfo)
            })
        })
    }
})

const upload=multer({storage})


app.post('/upload', upload.single('file'), (req, res) => {
    res.send(`File uploaded: ${req.file.filename}`);
});
