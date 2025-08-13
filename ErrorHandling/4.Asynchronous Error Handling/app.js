const express=require('express');
const app=express();
const axios=require('axios');

//!Route to fetch user POST:
app.get("/posts",async (req,res,next)=>{
    try {
      const response=await axios.get("https://jsonplaceholder.typicode.com/posts");
      res.json(response.data);
    } catch (error) {
      next(error); // Pass the error to the next middleware
    }
})
 

//?Regular route
app.get('/',(req,res)=>{
    res.json({
        message:"Welcome to built in error handlers"
    })
})
//?Custom Error Handling Middleware
app.use((err,req,res,next)=>{
  //check if it is an axios error
  if(err.response){
    res.status(err.response.status||500).json(err.response.data);
  }else if(err.request){
    res.status(503).json({ message: "No response received from the server." });
  }else{
    res.status(500).json({message:"An unexpected error occurred.", error: err.message});// Handle other errors
  }
})

const PORT=5004;
app.listen( PORT,()=>{
    console.log(`Server listen at http://localhost:${PORT}`);
})


