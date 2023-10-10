const dotenv = require("dotenv");
const mongoose =require('mongoose');
const express = require('express');
const app =express();

dotenv.config({path:'./config.env'});

require('./db/conn');
// const User =require('./model/useSchema');
app.use(express.json());
// link router file 
app.use(require('./router/auth'));

// const DB ='mongodb+srv://kaushal:kumar@cluster0.8t8dhro.mongodb.net/placementprep?retryWrites=true&w=majority'

const PORT =process.env.PORT;

// connect with database


// Middelware 

const middelware =(req, res, next) =>{
    console.log("Hello my middelware");
    next();
} 

app.get('/' , (req , res) => {
    res.send(`Hello world from the server app.js`);
});
app.get('/placementprep' , middelware, (req , res) => {
    res.send(`Hello world from the placementprep`);
});
app.get('/explore' , (req , res) => {
    res.send(`Hello world from the explore`);
});
app.get('/aboutme' , (req , res) => {
    res.send(`Hello world from the aboutme`);
});
app.get('/aboutus' , (req , res) => {
    res.send(`Hello world from the aboutus`);
});
app.get('/contactus' , (req , res) => {
    res.send(`Hello world from the contactus`);
}); 
app.get('/signup' , (req , res) => {
    res.send(`Hello world from the signup`);
});
app.get('/signin' , (req , res) => {
    res.send(`Hello world from the signin`);
});
app.listen(5000 ,() => {
    console.log(`server is running at port number ${5000}`);
})