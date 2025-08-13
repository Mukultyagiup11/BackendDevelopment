const express=require('express');
const path=require('path');
const expressLayout=require("express-ejs-layouts");

//!instance express
const app=express();

app.use(express.json());

//!set EJS as ths view engine
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

//middleware:-
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));//pass data from the form
//set ejs layout
app.use(expressLayout);
app.set("layout","layout")
//routes
//render the ejs file:-

app.get('/',(req,res)=>{
     res.render("home.ejs")
})

app.get('/about',(req,res)=>{
    res.render("about.ejs",{
        title:"About Page"
    });
})
app.get('/variables',(req,res)=>{
    res.render('variables.ejs',{
     title:"EJS Variables V2",
     user:{
     id:1,
     name:"Mukul",
     age:23,
     isActive:true
    }
    });
})

app.get('/conditionals',(req,res)=>{
    res.render('conditionals.ejs',{
     title:"EJS Conditionals",
     user:{
      isLoggedIn:true,
      isAdmin:true,
      hasItems:true
    }
    });
})

app.get('/loops',(req,res)=>{
     res.render('loop.ejs',{
        title:"EJS Loops",
        fruits:["Apple","Banana","Orange","Mango","Grapes"],
     })
})

//!Render The Contact Form:-
app.get('/Contact',(req,res)=>{
     res.render('contact.ejs',{
        title:"EJS Contact Form"  
     })
})
//logic of data processing:-
app.post('/Contact',(req,res)=>{
   console.log("Form Submitted",req.body)

     res.render('contact-sucess',{
        title:"Message sent",
        formData:req.body 
     })
})


const PORT=process.env.PORT||4567;
app.listen(PORT,()=>{
    console.log(`Server Liaten At http://localhost:${PORT}`);
})