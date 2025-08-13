const express=require('express');
const {MongoClient,ServerApiVersion}=require('mongodb');
const app=express();
//connect mongoDB
const URL='';
const client=new MongoClient(URL,{
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true
    }
});

const connectDB=async ()=>{
    try {
        await client.connect();
        console.log('MongoDB Connected.....!');
        //Database
        const database=client.db('Querying');
        
        //Create Collection
        const employees=database.collection('employees');
        const books=database.collection('books')
        //collections
        // const employeesDocs=[{name:"Alice",age:25,department:"HR"},
        //     {name:"Naksu",age:45,department:"IT"},
        //     {name:"BOB",age:32,department:"Finance"},
        //     {name:"Bravo",age:56,department:"It"},
        //     {name:"Lakshay",age:66,department:"HeadQuarter"}
        // ]
        // const result=await employees.insertMany(employeesDocs);
       
    //       const bookDocs=[{title:"To kill a mocking bird",author:"Harper Lee",year:1960,genre:"Drama",},
    //         {title:"Mahabharat",author:"Ved vyas",year:1970,genre:"Epic",},
    //     {title:"Ramayan",author:"Valmiki",year:1980,genre:"Epic",},
    // {title:"Geeta",author:"Shree Krishna",year:1990,genre:"Epic",}]
    //   const result=await books.insertMany(bookDocs);
    //!---Querying Operator---
    //?---$gt---
    // const employeesCursor=employees.find({age:{$gt:30}});
    // const result=await employeesCursor.forEach((doc)=>{console.log(doc)});
    //?---$gte---
    // const employeesCursor=employees.find({age:{$gte:45}});
    // const result=await employeesCursor.toArray();
    //?----$ne-----
    // const employeesCursor=employees.find({age:{$ne:45}});
    // const result=await employeesCursor.toArray();
    //   //?----$lt-----
    // const employeesCursor=employees.find({age:{$lt:45}});
    // const result=await employeesCursor.toArray();
    //?----$lt-----
    // const employeesCursor=employees.find({age:{$nin:[25,32,56]}});
    // const result=await employeesCursor.toArray();
    //?---Multiple query
    // const employeesCursor=employees.find({age:{$gt:25,$lt:50}});
    // const result=await employeesCursor.toArray();

   //!------Logical Opereators-----//
   //?Or operator
//   const bookCursor=books.find({$or:[{genre:"Drama"},{year:{$lt:1970}}]});
//   const result=await bookCursor.toArray();
   //?Or operator
  const bookCursor=books.find({$and:[{genre:"Epic"},{year:{$lte:1980}}]});
  const result=await bookCursor.toArray();
  console.log(result);
    } catch (error) {
        console.log(error);
    }
}
connectDB()
const PORT=6969;
app.listen(PORT,()=>{
   console.log(`server listen at http://localhost:${PORT}`);
})
