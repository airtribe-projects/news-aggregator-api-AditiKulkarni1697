
const bcrypt = require("bcrypt");

const {UserModel} = require("../models/user.model");
const {CREATEOBJECTRESPONSE} = require("../helper/responsehandler")

const createUser = async (req,res,next)=>{
    try{
        const {username, email, password} = req.body;

    const hash = bcrypt.hashSync(password, 8);

    const user = new UserModel({username, email, password:hash})

    await user.save();

    CREATEOBJECTRESPONSE(res, user)

    
}catch(err){
    next(err)
}

}

const getUser = (req,res,next) =>{
    try{

    }catch(err){
        
    }
}

module.exports = {createUser}