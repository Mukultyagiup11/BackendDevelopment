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




//user
const userSchema=new mongoose.Schema({
   name:String,
   email:String,
},{_id:true})

const User=mongoose.model('User',userSchema);


//post
const postSchema=new mongoose.Schema({
    title:String,
    content:String,
    author:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
    }
},{timestamps:true})

const Post=mongoose.model('Post',postSchema);

//create user with it's posts:-

// User.create({
//     name:"John",
//     email:"John@gmail.com"
// }).then((user)=>{
//     console.log(user)
// }).catch((err)=>{
//     console.log(err);
// })



//!create post for particular user:-

// Post.create({
//   title:"Blog 1",
//   content:"Welcome to my Blog!....",
//   author:'6883e65902fd20b1c9617d06'
// }).then((data)=>{
//   console.log(data);
// }).catch((err)=>console.log(err))

//!Post.create({
//   title:"Blog 2",
//   content:"Welcome to my Blog2!....",
//   author:'6883e65902fd20b1c9617d06'
// }).then((data)=>{
//   console.log(data);
// }).catch((err)=>console.log(err))


//find the user:-
Post.find().populate("author").then((user)=>{
    console.log(user)
}).catch((err)=>{
   console.log(err);
})

const PORT=4545;
  app.listen(PORT,()=>{
   console.log(`server listen at http://localhost:${PORT}`);
  })