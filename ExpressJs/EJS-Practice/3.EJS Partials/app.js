const express=require('express');
const path=require('path')
const app=express();
//*Serve the static file folder
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
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



const PORT=8084;
app.listen(PORT,()=>{
    console.log(`Server listen at http://localhost:${PORT}`);
})