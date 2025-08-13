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
//!=====Embedded Modelling====

//?Address schema
// const adressSchema=new mongoose.Schema({
//     street:String,
//     city:String,
//     state:String,
//     zipCode:Number
// },{timestamps:true})

//?courseSchema
// const courseSchema=new mongoose.Schema({
//     course_id:Number,
//     course_Name:String
// },{timestamps:true})

 //postSchema
// const postSchema=new mongoose.Schema({
//     title:String
// },{timestamps:true})
//?User Schema
// const userSchema=new mongoose.Schema({
//     userName:String,
//     age:Number,
//     data:[courseSchema]
// },{timestamps:true})

// const User1=mongoose.model('User1',userSchema)

//?create doc
// const userDoc=async ()=>{
//     try {
//         const user=await User1.create({userName:"Mukul",age:23,
//             data:[{course_id:111,course_Name:"Mongodb"},
//                 {course_id:112,course_Name:"NodeJS"}]})

//                 console.log(user)
//     } catch (error) {
//         console.log(error)
//     }
// }
// userDoc()


//!====Refrencing===
//?Author Schema
const authorSchema=new mongoose.Schema({
    name:String
})
const Author=mongoose.model('Author',authorSchema);

// Author.create({
//     name:'Abhay'
// }).then((data)=>{
// console.log(data)
// }).catch((err)=>{
//    console.log(err)
// })

//?BookSchema
const bookSchema=new mongoose.Schema({
     title:String,
     author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Author'
     }
})

const book=mongoose.model('book',bookSchema)
book.create({
    title:"MongoDb DataBase",
    author:'6891dafdf79bbea42ab04d78'
}).then((data)=>{
  console.log(data)
}).catch((err)=>{
  console.log(err)
})

const PORT =5000||process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server Listen at http://localhost:${PORT}`);
})