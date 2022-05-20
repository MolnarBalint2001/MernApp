
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const SECRET_KEY = "jiosjiuaojdiujaiod";





const registerUser = asyncHandler(async (req, res) => {

    const { username, password } = req.body;

    const userExist = await User.findOne({ username });

    if (userExist) {
        res.json({
            message: "User already exist!"
        });
    }
    else {

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //Create user
        const user = await User.create({
            username: username,
            password: hashedPassword
        });


        if (user) {
            res.status(201).json({
                message: "User was created successfully!",
                id: user.id,
                username: username
            })
        }

    }


});

const loginUser = asyncHandler(async (req, res) => {
    
    const { username, password } = req.body;

    const user = await User.findOne({
        username:username
    })

    if (!user){
        res.json({
            message:"User does not exist!"
        })
    }

    const passwordIsValid = await bcrypt.compare(
        password,
        user.password
    );


    if (passwordIsValid){

        const token = jwt.sign({
            username: user.username,
        },
        SECRET_KEY)

        return res.json({
            user: token
        })
    }
    else{
        return res.json({
            message: "Username or password or both are incorrect!",
            user:false
        })
    }



});



const getMe = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "User data (CRUD customer table)"
    })


});



module.exports = {
    loginUser,
    registerUser,
    getMe
}
