const express=require('express');
const app=express();
 
//?simulate an error in the mmiddleware
app.use((req,res,next)=>{
    const isError=true;
  try {
    if(isError){
        throw new Error('This is a simulated error');
    }
    next();
  } catch (error) {
      next(error);
  }
}
)
//?Regular route
app.get('/',(req,res)=>{
    res.json({
        message:"Welcome to built in error handlers"
    })
})
//?Custom Error Handling Middleware
app.use((err,req,res,next)=>{
  res.status(err.status||500);
  res.json({
    message:err.message,
    stack:err.stack,
  })
})

const PORT=5004;
app.listen( PORT,()=>{
    console.log(`Server listen at http://localhost:${PORT}`);
})


