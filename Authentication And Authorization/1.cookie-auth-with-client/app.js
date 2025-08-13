const express=require('express');
const path=require('path');
const cookieParser=require('cookie-parser');
const app=express()
//!midddleware
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(cookieParser())
//!set the view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

//?simulated databse users
const users=[
    {username:"john",password:'123',role:'admin'},
    {username:"Sarah",password:'456',role:'user'}
];

//Home Route
app.get("/",(req,res)=>{
    res.render("home.ejs");
})


//login route(login form)
app.get("/login",(req,res)=>{
    res.render("login.ejs")
})


//login route logic
app.post("/login",(req,res)=>{
   //!find the user login details
    //const {username,password}=req.body;
const userFound=users.find((user)=>{ 
     const {username,password}=req.body;
   return user.username===username && user.password===password;
});
console.log(userFound);
//!Create some cookies(cookie)
//*prepare the login user data
//?setting the cookie with the userData
res.cookie('userData',JSON.stringify(userFound),{
    maxAge:3*24*60*1000,//3 days expiration
    httpOnly:true,
    secure:false,
    sameSite:'strict'
})
//!Render the user dashboard
if(userFound){
    res.redirect('/dashboard');
}
//!redirect user to login page
})


//dashboard route
app.get('/dashboard',(req,res)=>{
    //?grab the user from the cookie
    const userData=req.cookies.userData?JSON.parse(req.cookies.userData):null;
    const username=userData?userData.username:null;
    //?Render the template
    if(username){
      res.render('dashboard.ejs',{username})
    }else{//?Redirect to login
        res.redirect('/login')
    }
   
  
})
//logout route
app.get('/logout',(req,res)=>{
   //!logout
   res.clearCookie("userData");
   //redirect
   res.redirect('/login')
})

//Start the server
const PORT=3003;
app.listen(PORT,()=>{
    console.log(`server listen at http://localhost:${PORT}`);
})




