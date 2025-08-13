const express=require('express');
const path=require('path');
const mongoose=require('mongoose');
const bcryptjs=require('bcryptjs');
const cookieParser=require('cookie-parser');
const app=express()

//!connect to mongoDB:-
const URL=''
mongoose.connect(URL).then(()=>{
    console.log('MongoDB Connected....!');
}).catch((err)=>{
    console.log(err);
})

//?Create the userSchema
const userSchema=new mongoose.Schema({
    username:String,
    password:String,
    role:{
        type:String,
        default:"user"
    }
})

//*Compile the schema to form model
const User=mongoose.model('User',userSchema);

//!midddleware
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(cookieParser())
//!set the view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

//!Custom Middleware
const isAuthenticated=(req,res,next)=>{
   //check the user in the cookie
   const userDataCookie=req.cookies.userData;
  try {
    const userData=userDataCookie&&JSON.parse(userDataCookie);
    if(userData &&userData.username){
        //Add login user into the request object
        req.userData=userData;
         return next();
    }else{
        res.send('you are not logged in....')
    }

  
  } catch (error) {
    console.log(error);
  }
 
}

const isAdmin=(req,res,next)=>{
   if(req.userData && req.userData.role==="admin"){
     return next()
   }else{
    res.send('forbidden:You dont have acess,admin');
   }
}

//Home Route
app.get("/",(req,res)=>{
    res.render("home.ejs");
})


//Admin route
app.get('/admin-only',isAuthenticated,isAdmin,(req,res)=>{
    res.render('admin.ejs')
})



//Register Route (register Form)
app.get('/register',(req,res)=>{
     res.render('register.ejs')
})


//Register Logic (register Form)
app.post('/register',async (req,res)=>{
    //*Destructure the req.body
   const {username,password}=req.body;
   const hashedPassword=await bcryptjs.hash(password,10);

    User.create({
         username:username,
         password:hashedPassword
   })
 
   //*Redirect To Login
   res.redirect('/login')
})


//login route(login form)
app.get("/login",(req,res)=>{
    res.render("login.ejs")
})

//login route logic
app.post("/login",async (req,res)=>{
    const {username,password}=req.body;
   //!find the user login details in db
   const userFound=await User.findOne({
    username
   })

   if(userFound && await bcryptjs.compare(password,userFound.password)){
//!Create some cookies(cookie)
//*prepare the login user data
//?setting the cookie with the userData
res.cookie('userData',JSON.stringify(userFound),{
    maxAge:3*24*60*1000,//3 days expiration
    httpOnly:true,
    secure:false,
    sameSite:'strict'
})
res.redirect('/dashboard');
}
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
const PORT=3001;
app.listen(PORT,()=>{
    console.log(`server listen at http://localhost:${PORT}`);
})




