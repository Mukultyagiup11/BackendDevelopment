//!express instance
const express = require("express");
const mongoose = require("mongoose");
const app = express();

//LDY4sTJ1vd840xpg

//!conncet ot mongoDB URI:-
const URI =
  "";
mongoose
  .connect(URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(`error connecting in DB ${error}`);
  });

//?Comman Schema type with validation:-
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        min:[2,"Name must be atleast 2 charactes long"],
        max:[50,"Name Can not exceed 50 character's"]
    },
    age :{
        type:Number,
        required:[true,"Name is required"],
        min:[2,"Name must be atleast 2 charactes long"],
        max:[50,"Name Can not exceed 50 character's"]
    },
    isActive:{
        type:Boolean,
        default:true,
    },
    hobbies:{
        type:[String],
        validate:{
            validator:(arr)=>arr.length<=5,
            message:'A user can have upto 5 hobbies'
        }
    },
    location:{
        city:{
            type:String,
            required:[true,'City is required']
        }
    },
    scores:[Number],
    metadata:{
        type:mongoose.Schema.Types.Mixed,    
    },
    email:{
        type:String,
        required:[true,'Email Is Required']
    },
    role:{
        type:String,
        enum:{
            values:['user','admin'],
            message:"role must br either user or admin"
        },
        default:"user"
    }
},{timestamps:true})

//?compile to form model:-

const User=mongoose.model('User',userSchema);

//! Create New User:-
User.create({name:"Mukul",age:45,isActive:true,hobbies:["football","Cricket"],location:{city:"Gurugram"},scores:890,metadata:{
    browser:'chrome'
},email:"mt834111@gmail.com",role:"admin"}).then((data)=>{
    console.log(data);
}).catch((err)=>{
   console.log(err);
})



//?Define task schema and model
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
    },
  },
  {
    timestamps: true, //date created,updated
  }
);

//?Model
const Task = mongoose.model("Task", taskSchema);

//!CRUD OPERATION(create,read,update,delete):-
//!create new task(crud-create)
// Task.create({title:"shopping"}).then((saveDOC)=>{
//     console.log(saveDOC);
//     console.log('Task Created Succesfully!');
// }).catch((error)=>{
//   console.log(error);
// })

// //?fetch all task(crud-read)
// Task.find({ completed: true })
//   .then((task) => {
//     console.log(task);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//?fetch by id:-
// Task.findById("6882127a7ede6ef095005afd")
//   .then((task) => {
//     console.log(task);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//?Find Task By id and update it:-(crud-update)
// Task.findByIdAndUpdate(
//   "6882127a7ede6ef095005afd",
//   { title: "Coding-Program2", completed: false },
//   { new: true }
// )
//   .then((task) => {
//     console.log(task);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
  
//?Delete task by id(crud-delete)
//   Task.findByIdAndDelete("6882127a7ede6ef095005afd").then(()=>{
//     console.log('Task is deleted sucessfully!');
//   }
//   ).catch((error)=>{
//    console.log(error);
//   })

//!Start the server
const PORT = 5454;
app.listen(PORT, () => {
  console.log(`server listen at http://localhost:${PORT}`);
});
