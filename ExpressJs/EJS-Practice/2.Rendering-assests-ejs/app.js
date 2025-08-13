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
//?Render Product Page
app.get("/product",(req,res)=>{
  const products=[{name:"laptop",price:30000},{name:"Mobile",price:10000}];
  res.render("products.ejs",{products});
})

//!render userData page
app.get('/user',(req,res)=>{
  const userData={
    userName:"Mukul",
    age:80,
    isPremiumUser:false,
    email:"mukul6767@gmail.com",
    isLogin:true
};
  res.render("userData.ejs",userData);
})

const PORT=8083;
app.listen(PORT,()=>{
    console.log(`Server listen at http://localhost:${PORT}`);
})