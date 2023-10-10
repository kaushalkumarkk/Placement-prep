const jwt = require('jsonwebtoken');
const express = require('express');
const router =express.Router();
const bcrypt =require('bcryptjs');

require('../db/conn');
const User = require("../model/useSchema");

router.get('/' , (req , res) => {
    res.send(`Hello world from the server router js`);
});

// connect with database(mongiodb-atls)
// with the help of promises
// router.post('/register' ,  (req, res)=>{
//     const {name,email,phone,password,Cpassword} =req.body;
//     if(!name || !email || !phone || !password || !Cpassword){
//         return res.status(422).json({ error: "Pls fill the empty box"});
//     }
//     User.findOne({email: email})
//     .then((userExist)=>{
//        if(userExist){
//         return res.status(422).json({ error: "Email already exist"});
//        }
//        const user =new User({name,email,phone,password,Cpassword});

//        user.save().then(() =>{
//         res.status(201).json({message:"user register succesfully"});
//        }).catch((err) =>res.status(500).json({error:"failed to register"}));

    
      
//     }).catch(err =>{ console.log(err);});

   
// });

// with the help of assyn


router.post('/register' , async (req, res)=>{
    const {name,email,phone,password,Cpassword} =req.body;
    if(!name || !email || !phone || !password || !Cpassword){
        return res.status(422).json({ error: "Pls fill the empty box"});
    }
    try{
        const userExist = await User.findOne({email: email});

        if(userExist){
            return res.status(422).json({ error: "Email already exist"});
        }else if(password != Cpassword){
            return res.status(422).json({ error: "Email already exist"});
        }else{
            const user =new User({name,email,phone,password,Cpassword});
        // Hasssing (paswword show nhi katre ga database me )
        await user.save();
        
        res.status(201).json({message:"user register succesfully"});

        }
        
        
    }catch(err){
        console.log(err);
    }   
});

// Login route 

router.post('/signin' , async (req,res) =>{
    try {
        let token;
        const {email ,password} =req.body;
        // for validation not any filled is empty
        if(!email || !password){
            return res.status(400).json({error:"plz filled the data"})
        }
        // read data from mongo (for already exit )
        const userLogin = await User.findOne({email: email});

       if(userLogin){
        const isMatch =await bcrypt.compare(password ,userLogin.password );
        token =await userLogin.generateAuthToken();
        console.log(token);

        res.cookie("jwtoken" ,token ,{
            expires:new Date(Date.now() + 25892000000),
            httpOnly:true
        });

        if(!isMatch){
            res.status(400).json({error: "user eroor pass"});
        } else {
            res.json({message :"user Signin Successfully"});
        }
       } else {
        res.status(400).json({error: "user eroor"});
       }

        
    } catch (err) {
        console.log(err);
        
    }
});
module.exports =router; 