const express=require('express');
const path=require('path');

const app=express();
//let serve the static file to run on different operating system:-
app.use(express.static(path.join(__dirname,"public")));

//!Home Page Route:-
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"views","index.html"));
})
//!contact page route
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,"views","contact.html"));
})
//!About Page Route:-
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,"views","about.html"));
})



const PORT=4500;
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})