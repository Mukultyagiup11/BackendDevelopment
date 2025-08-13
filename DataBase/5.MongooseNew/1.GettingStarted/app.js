const express=require('express');
const mongoose=require('mongoose');
const app=express();
const URL=''

const connectDB=async ()=>{
    try {
        await mongoose.connect(URL);
        console.log('MongoDB Connected Succcessfully.....!');
    } catch (error) {
        console.log(error);
    }
}
connectDB();

const userProfileSchema=new mongoose.Schema({
    userName:String,
    age:Number,
    birthDay:Date,
    isActive:Boolean,
    hobbies:[String],//arrays of sttring
    objectId:mongoose.Schema.Types.ObjectId,
    adress:{
        street:String,
        city:String,
        postCode:Number
    },
    customData:mongoose.Schema.Types.Mixed
})
const User=mongoose.model('User',userProfileSchema);


const PORT =5000||process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server Listen at http://localhost:${PORT}`);
})