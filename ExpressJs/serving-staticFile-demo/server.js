const express=require('express');
const morgan = require('morgan');
const app=express();
app.use(morgan('dev'));
//serve static file from "Public folder"
app.use(express.static("Public"));

const PORT=5000;
app.listen(PORT,()=>{
    console.log(`Server listen at http://localhost:${PORT}`);
})