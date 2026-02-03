import mongoose from "mongoose";
import auth from "../utils/firebaseAdmin.js";
import User from "../models/user.model.js";

const addUser = async (req,res) =>{
    const {uid, email} = req.user;
    const {userName, userEmail, userContact, password, occupation, organisation} = req.body;

    try{
        const user = await User.findOne({userId: uid});
        if (!user) {
                user = await User.create({
                userName,userEmail, userContact, password, occupation, organisation
            });

            res.status(200).json({success: true, message: "User details in the DB successfully!", data: user});
        }
    }catch(err){
        return res.status(401).json({success: false, message:" Error occurred while saving the data in DB"});
    }
};

export default addUser;