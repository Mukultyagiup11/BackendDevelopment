//!intialize express
const express=require('express');
const app=express();

//!Routes
//home page route:-
app.get('/',(req,res)=>{
     res.send('Welcome to my Mini Express Store!');
})
//Product Page:-
app.get('/product',(req,res)=>{
     res.send('Here Is Our Amazing Products!')
})

//about page:-
app.get('/about',(req,res)=>{
    res.send('We sell cool stuff!');
})

//Contact Page
app.get('/contact',(req,res)=>{
    res.send('Contact Us:mukul4545@gmail.com');
})

//!Route Parameters
//method=req.params.id
// app.get('/product/:ProductId',(req,res)=>{
//     console.log(req.params.ProductId);
//     res.send(`You are requested the data of product has id:${req.params.ProductId}`);
// })

//!query strings
//!/product/search?cateogry=shoes&color=black(query strings)
//method=req.query
app.get('/product/search',(req,res)=>{
    console.log(req.query);
   res.send('Query string demo');
})

//!server listen
const PORT=6767;
app.listen(PORT,()=>{
    console.log(`server listen at http://localhost:${PORT}`);
})
