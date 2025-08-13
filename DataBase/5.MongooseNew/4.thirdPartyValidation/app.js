const express=require('express');
const mongoose=require('mongoose');
const validator=require('validator');
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
//!===BuiltIn Validation====

// const userProfileSchema=new mongoose.Schema({
//     username:{
//         type:String,
//         required:[true,'Please userName is required'],
//         unique:true,
//         minLength:3,
//         maxLength:10
//     },
//       email:{
//         type:String,
//         required:[true,'Please email is required'],
//         match:/@/
//     }, 
//      age:{
//         type:Number,
//         required:[true,'Please age is required'],
//         min:18,
//         max:80
//     },
//     gender:{
//         type:String,
//         enum:["male","female","others"],
//         default:"others"
//     }
// },{
//     timestamps:true
// })
// const User=mongoose.model('User',userProfileSchema);

// User.create({
//     username:"Gautam",
//     email:"gautam7987@gmail.com",
//     age:56,
//     gender:"male"
// }).then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//    console.log(err);
// })


//!====Custom Validation====
const userProfileSchema=new mongoose.Schema({
    age:{
        type:String,
        required:[true,'Please userName is required'],
        validate:{
            validator:(value)=>{
             return validator.isInt(value,{min:10,max:120})
            },
             message:"Invalid Age"
        },
    },
      email:{
        type:String,
        required:[true,'Please email is required'],
        validate:{
            validator:(value)=>{
          return validator.isEmail(value);
            },
            message:"Invalid Email"
        }
    }
},{
    timestamps:true
})
const User=mongoose.model('User',userProfileSchema);

const userCreate=async ()=>{
    try{
    const user=await User.create({
        age:"45",
        email:"bulbul8989@gmail.com"
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