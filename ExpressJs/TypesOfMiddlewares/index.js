const express=require('express');
const app=express();
const morgan=require('morgan');//used for log
const cors=require('cors')//cross origin resource sharing

//!(1)-Built-In Middlewares
app.use(express.json());//parse JSON
app.use(express.static("public"))//use to serve the images and css

//!(2)-Third Party Middlewares:-
//first install it by using terminal as( npm install cors morgan)than require them
// into your file to use in your project as:-
//const morgan=require('morgan');//used for login
//const cors=require('cors')//cross origin resource sharing
app.use(morgan('dev'));//log http request
app.use(cors())//allow Cross-Origin Request

//!(3)-Custom Middlewares:-
app.use((req,res,next)=>{
    console.log(`Custom Logger:${req.method}-${req.url}`);
    req.requestTime=new Date();
    next();
})
 
//!(4)Application middleware:-
app.get('/admin',(req,res,next)=>{
    console.log('Checking Admin Access....');
    next();
},(req,res)=>{
    res.json({message:"Welcome To Admin Panel...."});
})

//!(5):-Router Level Middelware:-
const userRouter=express.Router();
userRouter.use((req,res,next)=>{
    console.log('User Router Middleware');
    next();
})
userRouter.get('/profile',(req,res)=>{
    res.json({message:"User Profile"});
})


app.get('/about',(req,res)=>{
    console.log(req.requestTime);
    res.json({message:"Welcome To About Page"});
    
})
//plugin the router middelware:-
app.use('/',userRouter);
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server listen at http://localhost:${PORT}`);
})