const fs=require('fs');
const { json } = require('stream/consumers');

//!Read a file
//*synchronous
const dataBuffer=fs.readFileSync("./sample.txt");
const content=dataBuffer.toString();
//console.log(content);
//*Asynchronous:-
// fs.readFile('./sample.txt','utf-8',(err,content)=>{
//     if(err){
//         throw err;
//     }else{
//         console.log(content);
//     }
// })

//!write file
// fs.writeFile('./new.txt','This is new content for this new file',(err)=>{
//         if(err){
//             throw err;
//         }else{
//             console.log('NEW FILE UPDATED!....');
//         }
// })
//!Append file
// fs.appendFile('./sample.txt','Updated second time',(err)=>{
//       if(err){
//         throw err;
//       }else{
//         console.log('Appended successfully.......');
//       }
// })

//!checking if a file exist or not
// fs.access('./new.txt',fs.constants.F_OK,(err)=>{
//      if(err){
//         console.log("File doesn't exist");
//      }else{
//         console.log('file exist...');
//      }
// })

//!Delete a file:-
fs.unlink('./new.txt',(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log('File Deleted Successfully......!');
  }
})
