const User = require("../models/User");
const bcrypt = require("bcryptjs")

module.exports.signup = async(req , res) =>{
    let { username , email , password} = req.body;
    

    if(!username || !email || !password || username ==="" || email === "" || password ===""){
        return res.status(400).json({message: "All fields are required"});
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
        res.status(500).json({message: "All fields are required"});
    }

    
    
}
