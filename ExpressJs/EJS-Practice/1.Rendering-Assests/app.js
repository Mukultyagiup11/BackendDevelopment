const express=require('express');
const path=require('path')
const app=express();
//*Serve the static file folder
app.use(express.static(path.join(__dirname,"public")));
//*Render home page/route
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"/public/views","home.html"));
})
//*Render gallery page/route
app.get('/gallery',(req,res)=>{
    res.sendFile(path.join(__dirname,"public/views","gallery.html"));
})
//*Render about page/route
app.get('/about',(req,res)=>{
   res.sendFile(path.join(__dirname,"/public/views","about.html"));
})
//?Render contact page
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,"/public/views","contact.html"));
})
const PORT=8082;
app.listen(PORT,()=>{
    console.log(`Server listen at http://localhost:${PORT}`);
})