// In an express.js application, a controller refers to a part of your code typically used to process incoming requests, interact with models (data sources), and send responses back to clients. They help organize your application by separatin concerns and following the MVC(Model-View-Controller) design pattern.
const User = require('../models/user-model');
// const argon2 = require('argon2');
const home = async(req,res)=>{
    try{
        res.status(200).send("Welcome to mern stack tutorial using router.")
    }catch(err){
        console.log(err);
    }
}
const register = async(req,res)=>{
    try{
        const {username,email,phone,password} = req.body;
        const userExist = await User.findOne({email});//check if the user is present or not
        if(userExist){
            return res.status(400).json({message:"Email already exist"})
        }
         //hash the password
        // const hash_password = await argon2.hash(password);
        const userCreated = await User.create({username,email,phone,password});
        res.status(201).json({msg:userCreated,token:await userCreated.generateToken(),userId:userCreated._id.toString()});
    }catch(err){
        res.status(500).send({message:"page not found"});
    }
}
//user login route
const login = async(req,res)=>{
    try{
        const {email,password} = req.body;        
         const userExist = await User.findOne({email});
         
         if(!userExist){
            return res.status(400).json({message:"Invalid credentials"});
         }
         
         const user =  await userExist.checkPassword(password);
        
         
         if(user){
            res.status(200).json({
                msg:"Login successful",
                token:await userExist.generateToken(),
                userId:userExist._id.toString(),
            });
            
         }else{
            res.status(401).json({message:"Invalid email or password"});
         }


    }catch(err){
        res.status(500).json("internal server error");
    }
}
// to send user data - user logic
const user = async(req,res)=>{
    try{
        const userData = req.user;
        return res.status(200).json({userData});

    }catch(err){
        console.log(err);
    }
    
}
module.exports = {home,register,login,user};