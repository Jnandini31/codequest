import mongoose from mongoose
import users from '../models/auth.js'

export const getAllUsers = async (req,res)=>{
    try {
        const allusers =await users.find()
        const alluserdetails = [];
        allusers.forEach((user)=>{
            alluserdetails.push({_id:user_id,
                name:user.name,
                about:user.about,
                tags:user.tags,
                joinedon:user.joinedon,
            });
        });
        res.status(200).json(alluserdetails)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const updateprofile=async(req,res)=>{
    const {id:_id}=req.params;
    const {name, about, tag}=req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("user unavaliable");
    }
    try {
        const updateprofile=await users.findByIdAndUpdate(_id, {$set:{name:name,about:about,tags:tag}},
            {new:true}
        );
        res.status(200).json(updateprofile)
    } catch (error) {
        res.status(404).json({message:error.message})
        return
    }
}