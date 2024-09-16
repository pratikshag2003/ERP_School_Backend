const User = require('../models/userModles');

const { validationResult } = require('express-validator');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser =async

const loginUser = async(req,res) =>{
    try{ 


    }catch (error){
         return res.status(400).json({
            success:false,
            msg:error.message
         });
    }
}