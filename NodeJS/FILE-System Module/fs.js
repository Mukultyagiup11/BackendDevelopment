const fs=require('fs');
const path=require('path');
//!Define folder path and file path
const folderPath=path.join(__dirname,'studentsFolder');
const filePath=path.join(folderPath,'studentList.pdf');
console.log(folderPath);
console.log(filePath);

//!(1)Create a directory if doesn't exist:-
if(!fs.existsSync(folderPath)){
      //create the folder
  fs.mkdirSync(folderPath);
  console.log('folderCreated');
}

//!(2).Create and write to a file:-
fs.writeFileSync(filePath,'list of students\n');

//!3)append more content into the file:-
fs.appendFileSync(filePath,'This is newly created line');

//!(4)read the content of the file:-
const readFile= fs.readFileSync(filePath,'utf-8');
console.log(readFile);

//!5)delete a file:-
//fs.unlinkSync(filePath);

