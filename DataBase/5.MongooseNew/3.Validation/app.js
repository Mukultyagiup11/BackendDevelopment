const express=require('express');
const mongoose=require('mongoose');

const app=express();

const URL=''

const connectDB=async ()=>{
    try {
        await mongoose.connect(URL);
        console.log('MongoDB Connected Succcessfully.....!');
    } catch (error) {
        console.log(error);
    }
}
connectDB();

//!===Third Party Validation
const userProfileSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Please userName is required'],
        validate:{
            validator:function(value){
                return /^[a-zA-Z0-9]+$/.test(value)
            },
            message:'UserName can only contain alphanumeric character'
        }
    },
      email:{
        type:String,
        required:[true,'Please email is required'],
        validate:{
            validator:function(value){
                return value.endsWith('@gmail.com');
            },
             message:'Not A Valid Format'
        }
    }
},{
    timestamps:true
})
const User=mongoose.model('User',userProfileSchema);

const userCreate=async ()=>{
    try{
    const user=await User.create({
        username:"Mukul",
        email:"mukul8989@gmail.com"
    })
}catch(err){
  console.log(err);
}
}
userCreate();

const PORT =5000||process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server Listen at http://localhost:${PORT}`);
})