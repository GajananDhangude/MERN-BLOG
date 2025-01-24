const User = require("../models/User");
const bcrypt = require("bcryptjs");
const errorHandler = require("../utils/error")

module.exports.signup = async(req , res , next) =>{
    let { username , email , password} = req.body;
    

    if(!username || !email || !password || username ==="" || email === "" || password ===""){
        next(errorHandler(400 , "All fields Are required"))
    }


    const hashPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashPassword,
    });
    
    try{
        await newUser.save();
        res.json("signup successfull");
    } catch(err) {
        next(err);
        
    }

    
    
}
