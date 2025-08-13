const express=require('express');
const app=express();
app.use(express.json());

//sending JSON Data as a response:-
app.get('/',(req,res)=>{
     res.json({
        name:"Mukul Tyagi",
        Email:"mt676767@mail.com",
        Address:"Jaroda Panda(saharanpur)"
     })
})
//Making post request
//Clients:Postman/Browser/mobile/thunder Clients
//req.body:-contains data a user is sending into our server for processing.

app.post('/books',(req,res)=>{
  res.json({message:"Hey your data added successfully!",
    data:req.body
  });
})

//example:-
app.post('/products',(req,res)=>{
    res.json({message:"Your data admitted sucessfully",
        data:req.body
    })
})
const PORT=4000;
app.listen(PORT,()=>{
    console.log(`server listen at http://localhost:${PORT}`);
})