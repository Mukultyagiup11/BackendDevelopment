const express=require('express');
const app=express();


//Middleware(global)
app.use((req,res,next)=>{
    const error =new Error('Something Went Wrong With Your Database!');
    next(error);//without this,the route below wouldn't run
})


//Home Page:-
app.get('/',(req,res)=>{
  res.send(`<h1>Home Page</h1>`)
})
//about page:-
app.get('/about',(teq,res)=>{
  res.send(`<h1>About Page</h1>`);
})

//Error Handling Middleware:-
app.use((err,req,res,next)=>{
   console.log("Error",err.message);
   res.send("something broke!");
})

const PORT=3030;
app.listen(PORT,(req,res)=>{
    console.log(`server listen at http://localhost:${PORT}`);
})