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


//?Embeded post schema (inline,no separate collection):-
//post
const postSchema=new mongoose.Schema({
    title:String,
    content:String
},{_id:false})

//user
const userSchema=new mongoose.Schema({
   name:String,
   email:String,
   posts:[postSchema]  //Embedded directly
},{_id:true})

const User=mongoose.model('User',userSchema);

//create user with it's posts:-

// User.create({
//     name:"Smith",
//     email:"smith@gmail.com",
//     posts:[{title:"Nodejs Bootcamp live!",content:"Streams are Powerful...."},
//         {title:"HTML Bootcamp live!",content:"Streams are Powerful...."},
//         {title:"Bootstrap5 Bootcamp live!",content:"Streams are Powerful...."}
//     ]
// }).then((user)=>{
//     console.log(user)
// }).catch((err)=>{
//     console.log(err);
// })

//fetch smith post:-

User.findOne({name:"Smith"}).then((userData)=>{
   console.log(userData);
}).catch((err)=>{
  console.log(err);
})


const PORT=4545;
  app.listen(PORT,()=>{
   console.log(`server listen at http://localhost:${PORT}`);
  })