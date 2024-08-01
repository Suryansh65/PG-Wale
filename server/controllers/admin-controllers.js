const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const Service = require("../models/service-model");
const getAllUsers = async(req,res)=>{
    try{
        const users = await User.find({},{password:0});
        if(!users || users.length === 0){
            return res.status(404).json({message:"No user found"});
        }
        res.status(200).json(users);
    }catch(err){
        next(err);
    }
}
//function to get user by Id
const getUserById = async(req,res)=>{
    try{
        const id = req.params.id;
        const user = await User.findOne({_id:id});
        res.status(200).json({message:user});
    }catch(err){
        next(err);
    }
}
//function to update user details
const updateUserById = async(req,res)=>{
    try{
        const id = req.params.id;
        const updateData = req.body;
        const updateUser = await User.updateOne({_id:id},{
            $set:updateData,
        });
        return res.status(200).json({message:updateUser});
    }catch(err){
        next(err);
    }
}
//function to delete a user using its Id
const deleteUserById = async(req,res)=>{
    try{
        const id = req.params.id;
        await User.deleteOne({_id:id});
        return res.status(200).json({message:"User Deleted Successfully!"})
    }catch(err){
        next(err);
    }
}
//function to delete the contact from the database
const deleteContactById = async(req,res)=>{
    try{
        const id = req.params.id;
        await Contact.deleteOne({_id:id});
        return res.status(200).json({message:"Contact deleted Successfully!"});
    }catch(err){
        next(err);
    }
}
//get all contacts controller
const getAllContacts = async(req,res)=>{
    try{
        const contacts = await Contact.find();
        if(!contacts || contacts.length === 0){
            return res.status(404).json({message:"No Contact Found."});
        }
        res.status(200).json(contacts);
    }catch(err){
        next(err);
    }
}
//get all hostels data
const getAllHostelsData = async(req,res)=>{
    try{
        const hostels = await Service.find();
        if(!hostels || hostels.length === 0){
            return res.status(404).json({message:"No Hostels Found."});
        }
        res.status(200).json(hostels);
    }catch(err){
        next(err);
    }
}
//Delete hostel by ID
const deleteHostelById = async(req,res)=>{
    try{
        const id = req.params.id;
        await Service.deleteOne({_id:id});
        return res.status(200).json({message:"Hostel deleted Successfully!"});
    }catch(err){
        next(err);
    }
}
module.exports = {getAllUsers,getAllContacts,deleteUserById,getUserById,updateUserById,deleteContactById,getAllHostelsData,deleteHostelById};