const express=require('express');
//Express Router
const userRouter=express.Router();

const users=[
    {id:1,username:"alice"},
    {id:2,username:"Mukul"}
];

//user routes:-
userRouter.get('/users',(req,res)=>{
    res.json(users);
})
userRouter.get('/users/:id',(req,res)=>{
    res.json({message:`Get user with id:${req.params}`})
})
userRouter.post('/users',(req,res)=>{
    res.json({message:`user Created`});
})
userRouter.put('/users/:id',(req,res)=>{
    res.json({message:`User Updated`})
})
userRouter.delete('/users/:id',(req,res)=>{
    res.json({message:`User Deleted`})
})


//Export Router
module.exports=userRouter;
