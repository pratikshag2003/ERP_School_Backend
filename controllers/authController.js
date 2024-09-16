const  User = require("../models/userModles");

const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const registerUser= async(req,res)=>{
     try{
       const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(200).json({
                success:false,
                msg:'Errors',
                errors:errors.array()
            });
        }
        const {name ,email ,password ,role} = req.body;
          const hashedPassword = await bcrypt.hash(password,10);

         const user = new User({
             name,
             email,
             password :hashedPassword ,
             role
           
          });

          const userdata= await user.save();

          return res.status(200).json({
            success:true,
            msg:"Register successfully",
            data :userdata
          });

     }catch(error){
        return res.status(400).json({
            success:false,
            msg:error.message
        });
     }
};

module.exports ={
    registerUser
}