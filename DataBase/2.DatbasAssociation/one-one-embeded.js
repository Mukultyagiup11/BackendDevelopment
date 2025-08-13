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
});
//user schema
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    profile:profileSchema//Embeded directly
},{timestamps:true})
//Complie to form Model:-
const User=mongoose.model("User",userSchema);

// create a user:-
User.create({
    name:"Mukul Tyagi",
    email:"yu989898@gmail.com",
    profile:{
        age:45,
        bio:"Full Stack Web Deveoloper",
        avatar:"mukul.jpg"
    }
}).then((data)=>{
    console.log("User created successfully",data);
}).catch((err)=>{
   console.log(err);
})


const PORT=4545;
  app.listen(PORT,()=>{
   console.log(`server listen at http://localhost:${PORT}`);
  })