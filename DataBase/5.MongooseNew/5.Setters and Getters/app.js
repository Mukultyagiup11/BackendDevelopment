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


//!====Design Schema====
const bookSchema=new mongoose.Schema(
     {
        title:{
            type:String,
            required:true,
            set:(value)=>value.trim()
        },
        author:{
            type:String,
            required:true,
            set:(value)=>value.trim()
        },
          price:{
            type:Number,
            required:true,
            set:(value)=>Math.round(value*100)/100
        },
        tags:{
            type:[String],
            required:true,
            set:(value)=>value.map(tag=>tag.toLowerCase())
        },
         url:{
            type:String,
            required:true,
            set:(value)=>`http://masyntech.com/books/${value}`
        }
     },{timestamps:true}
)
//!Compile the schema to form the model
const Book=mongoose.model('Book',bookSchema);

const bookCreated =async ()=>{
    try {
        const book=await Book.create({
            title:"mongoose for US",
            author:"Karan",
            price:22.9999,
            tags:["MONGODB","NODEJS","Mongoose"],
            url:"mongoose for everyOne"
        })
      console.log(book);
    } catch (error) {
        console.log(error)
    }
}
 bookCreated();
const PORT =5000||process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server Listen at http://localhost:${PORT}`);
})