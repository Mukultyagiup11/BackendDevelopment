const express=require('express');
const morgan=require('morgan');
const app=express();

//In memory database:-
const user=[{id:1,username:"Mukul",role:"user"},
    {id:2,username:"Alice",role:"admin"}
];
//built in middleware:-
app.use(express.json())//parse json
//third party middleware:-
app.use(morgan('dev'));//logging
//custom middleware:-
app.use((req,res,next)=>{
    const date=new Date().toLocaleTimeString();
    console.log(`[${date} ${req.method} ${req.url}]`);
    next();
})
//public route /users:-
app.get('/users',(req,res)=>{
    res.json(user);
})

//application level middleware for admin route:-
//ex(1):-
// app.get("/admin",(req,res,next)=>{
//     const userRole=user.role;
//  const adminFound=user.find((user)=>{
//      return userRole===user.role
//  });
//  next();
// },(req,res)=>{
//     res.json({message:"Welcome To Admin DashBoard!"})
// })

//EX-(2)Application level middleware for admin route:-
 const adminAuthMiddelware=(req,res,next)=>{
       const isAdmin=false;
       if(!isAdmin){
        return res.json({message:"Access denied.Admins Only!"})
       }
       next();
 }

app.get("/admin",adminAuthMiddelware,(req,res)=>{
    res.json({message:"Welcome To Admin DashBoard!"})
})

const PORT=6754;
app.listen(PORT,()=>{
    console.log(`Server Listen At http://localhost:${PORT}`);
})