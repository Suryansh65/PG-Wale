const mongoose = require('mongoose');
// const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }

});


// userSchema.pre('save',async function(next){
//     const user = this;
//     if(!user.isModified('password')){
//         next();
//     }
//     try{

//         // const hash_password = await argon2.hash(user.password);
//         user.password = hash_password;
//     }catch(err){
//         next(err);
//     }
// })
// check password
userSchema.methods.checkPassword = async function(password){
    const dbpass = this.password;
    if(password === this.password){
        return true;
    }else{
        return false;
    }
}
//json web token
userSchema.methods.generateToken = async function () {
    try{
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin,
        },process.env.JWT_SECRET_KEY,{
            expiresIn:"30d",
        });
    }catch(err){
        console.log(err);
    }
}
//define the model
const User = new mongoose.model("User",userSchema);
module.exports = User;