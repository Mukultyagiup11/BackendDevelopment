 const express=require('express');
 const mongoose=require('mongoose');
  //express instance:-
  const app=express();

  //1MgsMUt0RizzbUAP
//connect mongoDb:-
const MONGO_URI=''

mongoose.connect(MONGO_URI).then(()=>{
    console.log('MongoDB Successfully Connected!');
}).catch((err)=>{
    console.log(err);
})

//course schema:-
const courseSchema=new mongoose.Schema({
  title:String,
  students:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Student"
  }]
},{timestamps:true})

const Course=mongoose.model('Course',courseSchema);

//Student schema:-
const studentSchema=new mongoose.Schema({
  name:String,
  courses:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Course"
  }]
},{timestamps:true})

const Student=mongoose.model('Student',studentSchema);


//?Create some course:-
// Course.create({
//   title:"JavaScript Basics"
// }).then((course)=>{
//     console.log(course);
// }).catch((err)=>{
//    console.log(err);
// })

// Course.create({
//   title:"MongoDB-Basics"
// }).then((course)=>{
//     console.log(course);
// }).catch((err)=>{
//    console.log(err);
// })

//?create students and enroll(courses)
// Student.create({
//   name:"Mukul Tyagi",
//   courses:['6884a3712d1a8715dba62e73','6884a3712d1a8715dba62e74']
// }).then((person)=>{
//     console.log(person);
// }).catch((err)=>{
//     console.log(err);
// })


 //update courses to reference the student
// Course.updateMany({_id:{$in:['6884a3712d1a8715dba62e73','6884a3712d1a8715dba62e74']}},
//   {$push:{students:"6884a65d429b035da0086e59"}}
// )

//populate the data:-
Student.find({name:"Mukul Tyagi"}).populate({path:"courses",select:"title"}).then((courses)=>{
    console.log(courses);
}).catch((err)=>{
   console.log(err);
})

const PORT=4545;
  app.listen(PORT,()=>{
   console.log(`server listen at http://localhost:${PORT}`);
  })