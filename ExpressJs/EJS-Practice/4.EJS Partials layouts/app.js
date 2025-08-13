const express=require('express');
const ejsLayouts = require('express-ejs-layouts');
const path=require('path')
const ejsLayout=require("express-ejs-layouts");
const { error } = require('console');
const app=express();

//*Serve the static file folder
app.use(express.static(path.join(__dirname,"public")));

app.set("view engine","ejs");
//*Plugin the ejs layout as a middleware
app.use(ejsLayouts);
app.set("layout","layout/main-layout");
//*Render home page/route
app.get('/',(req,res)=>{
    res.render("home.ejs")
})
//*Render gallery page/route
app.get('/gallery',(req,res)=>{
  res.render("gallery.ejs")
})
//*Render about page/route
app.get('/about',(req,res)=>{
  res.render("about.ejs")
})
//?Render contact page
app.get('/contact',(req,res)=>{
    res.render("contact.ejs")
})

//?404 not found
app.use((req,res,next)=>{
  const error=new Error("404,Page Not Found");
  next(error);
})

app.use((err,req,res,next)=>{
    res.render("error.ejs",{error:err.message});
})

const PORT=8084;
app.listen(PORT,()=>{
    console.log(`Server listen at http://localhost:${PORT}`);
})