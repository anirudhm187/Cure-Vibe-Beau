const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');

require('../db/conn');
const User = require('../models/userSchema');

router.get('/' , (req, res) => {
    res.send(`Hello World from the server router js`);
});

// Using promises
// router.post('/register' , (req, res) => {
//     const { name, email, phone, password, cpassword} = req.body;

//     if(!name || !email || !phone || !password || !cpassword){
//         return res.status(422).json({error : "Plz fill the field porperly"});
//     }

//     User.findOne({ email : email})
//         .then((userExist) => {
//             if(userExist){
//                 return res.status(422).json({error : "Email already exists"});
//             }  

//             const user = new User({name, email, phone, password, cpassword});

//             user.save().then(() => {
//                 res.status(201).json({message : "user registered successfully"});
//             }).catch((err) => res.status(500).json({ error : "Failed to register"}));
            
//         }).catch((err) => {console.log(err);});
// });

// Using async await
// Registration route
router.post('/register' , async (req, res) => {
    const { name, email, phone, password, cpassword} = req.body;

    if(!name || !email || !phone || !password || !cpassword){
        return res.status(422).json({error : "Plz fill the field porperly"});
    }

    try{
        const userExist = await User.findOne({ email : email});

        if(userExist){
            return res.status(422).json({error : "Email already exists"});
        }
        else if(password != cpassword){
            return res.status(422).json({error : "Passwords are not matching."});
        }
        else{
            const user = new User({name, email, phone, password, cpassword});

            const userRegister = await user.save();
            if(userRegister){
                return res.status(201).json({message : "user registered successfully"});
            }
        }

    }catch(err){
        console.log(err);
    }
});

// login route

router.post('/login' , async (req, res) => {
    try{
        let token;
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({ error : "Please fill the data"});
        }

        const userLogin = await User.findOne({email : email});

        // console.log(userLogin);

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);
        
            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken" , token, {
                expires : new Date(Date.now() + 25892000000),
                httpOnly : true,
                path: '/login',
                sameSite: 'Lax'
            });

            if(!isMatch){
                res.status(400).json({message : "Invalid Credentials Pass"});
            }
            else{
                res.json({message : "User Login Successfully"});
            }
        }
        else{
            return res.status(400).json({ error : "Invalid Credentials"});
        }   
    }
    catch(err){
        console.log(err); 
    }
});

router.get('/about', authenticate , (req, res) => {
    console.log(`Hello my about`);
    res.send(`Hello About World from server`);
});

module.exports = router;