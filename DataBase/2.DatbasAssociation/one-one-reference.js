 const express=require('express');
 const mongoose=require('mongoose');
  //express instance:-
  const app=express();

  //1MgsMUt0RizzbUAP
//connect mongoDb:-
const MONGO_URI=''

mongoose.connect(MONGO_URI).then(()=>{
    console.log('MongoDB Successfully Connected!');
}).catch((err)=>{
    console.log(err);
})
//Embedding one to one association
//profile schema
const profileSchema=new mongoose.Schema({
    age:Number,
    bio:String,
    avatar:String
},{timestamps:true});

//compile to form model
const profile=mongoose.model('profile',profileSchema);

//user schema
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    profile:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'profile'
    }
},{timestamps:true})
//compile to form Model
const User=mongoose.model("User",userSchema);

//!create profile and the use the profile ID to link to the user
// profile.create({
//     age:66,
//     bio:"JAVA-Developer",
//     avatar:"avatar.png"
// }).then((user)=>{
//   console.log(user);
// }).catch((err)=>{
//    console.log(err);
// })

//!create user
// User.create({
//     name:"Satyam",
//     email:"ty5656@gmail.com",
//     profile:'688354db02aff3bfd4c27256'   
// }).then((user)=>{
//     console.log(user);
// }).catch((err)=>{
//     console.log(err);
// })

//!Fetch user with its profile:-

// //?First Method 
// User.findById('68835533b214d521484c73e0').populate("profile").then((user)=>{
//    console.log(user)
// }).catch((err)=>{
//     console.log(err);
// });

//?Second Method
User.findById('68835533b214d521484c73e0').populate({path:"profile",select:"age bio"}).then((user)=>{
   console.log(user)
}).catch((err)=>{
    console.log(err);
});

const PORT=4545;
  app.listen(PORT,()=>{
   console.log(`server listen at http://localhost:${PORT}`);
  })