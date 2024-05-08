const User=require('../models/userModel')
const bcryptjs=require('bcryptjs')
const signup=async(req,res)=>{
    const {userName,email,password}=req.body;
    if(
        !userName ||
        !email ||
        !password ||
        userName===" "||
        email=== " "||
        password===" "
    ){
        console.log("All fields must be filled!");
    }
    const hashPassword=bcryptjs.hashSync(password,10)
    const newUser=new User({
        userName,
        email,
        password:hashPassword
    })
    try {
        await newUser.save();
        res.json("signup successful")
    } catch (error) {
        console.log(error.message);
    }
}
module.exports={
signup
}