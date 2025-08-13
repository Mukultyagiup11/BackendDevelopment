const express=require('express');
const app=express();
const {MongoClient,ServerApiVersion}=require('mongodb');
//pass-EOnE6PCim1gKYUTh
//url-
//Connect to mongodb
//1)Create the client
const url='';
const client=new MongoClient(url,{
    serverApi:{
        version:ServerApiVersion.v1,
         strict:true,
         deprecationErrors:true
    }
})

//2)function to connect:-
const connectDB=async () => {
    try {
        await client.connect();
        console.log('MongoDB connected successfully');
        //1)DATABASE name(school)
        const database=client.db("Masyntech");
        //2)Collections(students)
        const students=database.collection('students');
        //!----CREATE OPERATIONS
        //?Create documnet using INSERTONE()
        //3)Documnets
    //    const result= await students.insertOne({
    //            name:"Mukul",
    //            age:23,
    //            subject:['Math','Physics'] 
    //     })
        //?Create documnet using INSERTMANY()
    // const result=await students.insertMany([{name:"Magnus",age:24,subject:['Math','Science']},
    //     {name:"Uk",age:22,subject:['Math','Science']},
    //      {name:"Bravo",age:25,subject:['Math','Science']}])
    //!-----READ OPERATION----
    //?FIND METHOD
    // const resultCursor=students.find();
    // const result=await resultCursor.toArray();
    //?FindOne()-
    // const result= await students.findOne({
    //     age:22
    // })
    //!----Update Operation----

    //?--updateOne()--
//   const result=await students.updateOne({
//         name:"Mukul"//This is my filter
//     },{
//         $set:{age:34}
//     })

//?---UpdateMany()---
// const result=await students.updateMany({
//     grade:"B"
// },{$set:{name:"James"}});

//?---findOneAndUpdate()---
//    const result=await students.findOneAndUpdate({
//     age:22
//    },{$set:{name:"Mukul"}});

   //!---Delete operations---
   //?deleteOne()
//    const result= await students.deleteOne({
//     name:"Thomas"
//    });
//?deleteMany()
// const result= await students.deleteMany({
//     grade:"B"
// });

//?findOneAndDelete()
const result=await students.findOneAndDelete({
    name:"Bravo"
})
 console.log(result);
    } catch (error) {
        console.log(error);
    }
}

//3)call function
connectDB();

//server starting
const PORT=5656;
app.listen(PORT,(req,res)=>{
    console.log(`Server listen at http://localhost:${PORT}`);
})
