const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt =require('bcryptjs');
const userShema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Cpassword:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
]
     
})




// we are hassing the password.....

userShema.pre('save' , async function (next){
    console.log("hii from inside");
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password ,12);
        this.Cpassword = await bcrypt.hash(this.Cpassword ,12);
    }
    next();

});
// we are generating token
userShema.methods.generateAuthToken = async function () {
    try{
        let token =jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens =this.tokens.concat({ token: token });
        await this.save();
        return token;

    } catch (err){
        console.log(err);

    }

}

const User =mongoose.model('USER',userShema);

module.exports =User;