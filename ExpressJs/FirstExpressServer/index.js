const express=require('express');
//Intiliaze express
const app=express();

//basic route:-
app.get('/',(req,res)=>{
   res.send('Hello,From Express');
})
//about route:-
app.get('/about',(teq,res)=>{
    res.send(`<h1>About Home Page</h1>`);
})
//Contact Route:-
app.get('/contact',(req,res)=>{
    res.send(`<h2>Contact Us At:</h2>mukultyagi@gmail.com`);
})
//!We have http Methods:-
//GET-Get data from the server
//POST-To post data from the server
//PUT/PATCH-to update data
//DELETE-delete
//signup route:-
app.post('/register',(req,res)=>{
    res.send("Registration Route")
})


//start the server
const PORT=8080;
app.listen(PORT,()=>{
    console.log(`server listen at http://Localhost:${PORT}`);
})