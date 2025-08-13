 const express=require('express');
 const mongoose=require('mongoose');
  //express instance:-
  const app=express();

 
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
},{timestamps:true})

const Course=mongoose.model('Course',courseSchema);

//Student schema:-
const studentSchema=new mongoose.Schema({
  name:String
},{timestamps:true})

const Student=mongoose.model('Student',studentSchema);

//Enrollment schema:-
const enrollmentSchema=new mongoose.Schema({
     student:{type:mongoose.Schema.Types.ObjectId,
      ref:"Student"
     },
     courses:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Course"}],
      enrolledAt:{
        type:Date,
        default:Date.now()
        },
      grade:String,
      status:{
        type:String,
        enum:['active','copleted','dropped']
      }
     }

,{timestamps:true})

const Enrollment=mongoose.model('Enrollment',enrollmentSchema);
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
// }).then((person)=>{
//     console.log(person);
// }).catch((err)=>{
//     console.log(err);
// })

//!enrolled the student in the course with some extra info:-
// Enrollment.create({
//   student:'6884b421c7b905e03523f925',
//   courses:['6884b421c7b905e03523f924'],
//   grade:'A+',
//   status:'active'
// }).then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//    console.log(err);
// })


//!Get all the enrollments for a students(with full course info)
Enrollment.find({student:'6884b421c7b905e03523f925'}).populate('student','name').populate('courses','title')
.then((data)=>{
  console.log(data);
}).catch((err)=>{
   console.log(err);
})

const PORT=4545;
  app.listen(PORT,()=>{
   console.log(`server listen at http://localhost:${PORT}`);
  })