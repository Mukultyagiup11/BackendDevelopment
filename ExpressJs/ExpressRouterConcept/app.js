const express=require('express');
const morgan=require('morgan');
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');
const app=express();

//plugin the userRouter
app.use('/',userRouter);

//plugin poost Router
app.use('/',postRouter);


app.use(morgan('dev'));


const PORT=6565;
app.listen(PORT,()=>{
    console.log(`server listen at http://localhost:${PORT}`);
})