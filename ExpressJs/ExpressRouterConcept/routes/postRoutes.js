const express=require('express');
const postRouter=express.Router();

const posts=[
    {id:1,title:"Hello Express"},
    {id:2,title:"Router Magic"}
];

//post routes:-
postRouter.get('/posts',(req,res)=>{
    res.json(posts);
})
postRouter.get('/posts/:id',(req,res)=>{
    res.json({message:'post details'});
})
postRouter.put('/posts/:id',(req,res)=>{
    res.json({message:'post Updated'});
})
postRouter.delete('/posts/:id',(req,res)=>{
    res.json({message:'post deleted'});
})


module.exports=postRouter;