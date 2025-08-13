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
//!---CRUD Operation---//
//?--Create Doc
//!.save()

// const newUser=new User({
//     userName:"Yul",
//     age:23,
//     birthDay:new Date("2002-09-06"),
//     isActive:true,
//     hobbies:["Singing","Cricket","Reading"],
//     adress:{
//         street:"789 oak street",
//         city:"Kumasi",
//         postCode:7787
//     },
//     customData:{
//         country:"Ghana"
//     }
// })
//  save the document
// newUser.save().then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//    console.log(err);
// });

// //!.create()
// User.create({
//     userName:"Jong uk",
//     age:25,
//     birthDay:new Date("2003-06-07"),
//     isActive:true,
//     hobbies:["Singing","dancing","Reading"],
//     adress:{
//         street:"790 londan street",
//         city:"Birmigham",
//         postCode:7789
//     },
//     customData:{
//         country:"Britian"
//     }
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err);
// })
// //!.insertMany()
// User.insertMany({userName:"Kang",
//     age:22,
//     birthDay:new Date("2002-07-11"),
//     isActive:true,
//     hobbies:["Cricket","Football"],
//     adress:{
//         street:"788 oak street",
//         city:"Kumasi",
//         postCode:7787
//     },
//     customData:{
//         country:"Ghana"
//     }},
//     {userName:"song Kang",
//     age:26,
//     birthDay:new Date("2002-09-06"),
//     isActive:true,
//     hobbies:["Reading"],
//     adress:{
//         street:"789 oak street",
//         city:"Kumasi",
//         postCode:7787
//     },
//     customData:{
//         country:"Ghana"
//     }}).then((data)=>{
//         console.log(data);
//     }).catch((err)=>{
//    console.log(err);
//     })


//!Read operation
//?-----Where Operation---//
// const findUser=async ()=>{
//     try {
//          const user=await User.find().where('age').gte(23);
//          console.log(user);
//     } catch (error) {
//         console.log(error);
//     }
// }
// findUser();
//?-----Sort Operation---//
// const findUser=async ()=>{
//     try {
//         const user=await User.find().where('age').gte(23).sort({userName:1})
//         console.log(user)
//     } catch (error) {
//         console.log(error);
//     }
// }
// findUser();

//?----limit-Operation---//
// const findUser=async ()=>{
//     try {
//         const user=await User.find().where('age').gte(23).sort({userName:1}).limit(1);
//         console.log(user)
//     } catch (error) {
//         console.log(error);
//     }
// }
// findUser();

//!----Update Operation----//
//?UpdateOne()
// const updatedDoc=async ()=>{
//     try {
//         const updatedDoc=await User.updateOne({userName:'Yul'},{userName:"Mukul",age:45},{new:true});
//         console.log(updatedDoc);
        
//     } catch (error) {
//         console.log(error);
//     }
// }

// updatedDoc();

//?findByIdAndUpdate()---
// const updatedDoc=async ()=>{
//     try {
//         const user=await User.findByIdAndUpdate('688f3cc73ee3aa858a527bb7',{
//             userName:"Megan",
//             age:45,
//             isActive:false
//         },{
//             new:true
//         })
//         console.log(user);
//     } catch (error) {
//         console.log(error);
//     }
// }
// updatedDoc();

//?findOneAndUpdate:-
// const updatedDoc=async ()=>{
//     try {
//         const user=await User.findOneAndUpdate({userName:"Mukul"},{
//             userName:"Sid",
//             age:45,
//             isActive:true
//         },{
//             new:true
//         })
//         console.log(user);
//     } catch (error) {
//         console.log(error);
//     }
// }
// updatedDoc();
//!---Update Operator----
//?$set() and $unset()
// const updatedDoc=async ()=>{
//     try {
//         const user=await User.findOneAndUpdate({userName:"Yul"},
//             {
//            $set:{age:60},
//           //$unset:{age:1}
//         },{
//             new:true
//         })
//         console.log(user);
//     } catch (error) {
//         console.log(error);
//     }
// }
// updatedDoc();
//?$addToSet() $push()
// const updatedDoc=async ()=>{
//     try {
//         const user=await User.findOneAndUpdate({userName:"Yul"},
//             {
         // $addToSet:{hobbies:["swimming","Jumping"]},//no duplication
//            $push:{hobbies:["swimming"]}//duplication
//         },{
//             new:true
//         })
//         console.log(user);
//     } catch (error) {
//         console.log(error);
//     }
// }
// updatedDoc();
//?$inc() $mul()
// const updatedDoc=async ()=>{
//     try {
//         const user=await User.findOneAndUpdate({userName:"Yul"},
//             {
            //$inc:{age:1},
//             $mul:{age:0.10},
//         },{
//             new:true
//         })
//         console.log(user);
//     } catch (error) {
//         console.log(error);
//     }
// }
// updatedDoc();
//?$pop() AND pull()
// const updatedDoc=async ()=>{
//     try {
//         const user=await User.findOneAndUpdate({userName:"Yul"},
//             {
//            // $pop:{hobbies:1}
//              $pull:{hobbies:'Reading'}
//         },{
//             new:true
//         })
//         console.log(user);
//     } catch (error) {
//         console.log(error);
//     }
// }
// updatedDoc();


//!---Delete Operation----

const deleteDoc=async ()=>{
    try {
        //!---FindByIdAndDelete()---
        // const deletedDoc=await User.findByIdAndDelete('688f3cc73ee3aa858a527bb6');
        // console.log(deletedDoc);
        //!---FindOneAndDelete()---
        //  const Doc=await User.findOneAndDelete({userName:'Yul'});
        //  console.log(Doc);

        //!---DeleteMany()---
    //   const data= await User.deleteMany({age:{$gt:30}})
    //     console.log(data);
    } catch (error) {
        console.log(error);
    }
}
deleteDoc();


const PORT =5000||process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server Listen at http://localhost:${PORT}`);
})