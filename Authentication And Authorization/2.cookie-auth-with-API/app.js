const express=require('express');
const path=require('path');
const cookieParser=require('cookie-parser');
const app=express()
//!midddleware
app.use(express.json())
app.use(cookieParser())


//?simulated databse users
const users=[
    {username:"john",password:'123',role:'admin'},
    {username:"Sarah",password:'456',role:'user'}
];

//Home Route
app.get("/",(req,res)=>{
  res.json({
    message:"welcome to the API"
  })
})


//!login route logic
app.post("/login",(req,res)=>{
const userFound=users.find((user)=>{ 
     const {username,password}=req.body;
   return user.username===username && user.password===password;
});
res.cookie('userData',JSON.stringify(userFound),{
    maxAge:3*24*60*1000,//3 days expiration
    httpOnly:true,
    secure:false,
    sameSite:'strict'
})
if(userFound){
   res.json({
    message:'Login Success....!'
   })
}else{
    res.json({
        message:'Login Failed....!'
    })
}
})


//dashboard route
app.get('/dashboard',(req,res)=>{
    //?grab the user from the cookie
    const userData=req.cookies.userData?JSON.parse(req.cookies.userData):null;
    const username=userData?userData.username:null;
    //?Render the template
    if(username){
     res.json({message:`Welcome ${username},role:${userData.role}`});
    }else{
        res.json({
            message:"Unauthorized please login first...."
        })
    }
})
//logout route
app.get('/logout',(req,res)=>{
   //!logout
   res.clearCookie("userData");
   //redirect
   res.json({
    message:'Logged Out successfully'
   })
})

//Start the server
const PORT=3002;
app.listen(PORT,()=>{
    console.log(`server listen at http://localhost:${PORT}`);
})




