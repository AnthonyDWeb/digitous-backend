const bcrypt = require('bcrypt');

const {validationResult} = require('express-validator');
const {User} = require("../models/user");


// ----- GET -----
const admin = async(req,res) => {
    try {
        let users = await User.find();
    
        res.json({
            status: "success",
            data: users
        }) 
    } catch {
        res.status(401).json({
            message: "error detected !"
        })
    }
};

// ----- POST -----
const register = async(req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty() === false){
        res.status(400).json({message: "error"});
        return;
    } else {
        
        const {password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 12);

        try {
            User.create({
                firstName: req.body.firstName,
                surname: req.body.surname,
                email: req.body.email,
                dateOfBirth: req.body.dateOfBirth, 
                password: hashedPassword,      
            });
        } catch (err) {
            return res.status(400).json({
                messages: "This user already exists"
            });
        }
        res.status(201).json({
            success: true,
            messages: `user: ${req.body.firstName} created with email: ${req.body.email}`,
        })
    }  
};
const login = (req, res) => {
    console.log("login is ok !")
};


module.exports = {
    admin: admin,
    register: register,
    login: login,
}