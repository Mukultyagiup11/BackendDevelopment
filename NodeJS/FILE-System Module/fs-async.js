const fs=require('fs').promises;
const path=require('path');
//!Define folder path and file path
const folderPath=path.join(__dirname,'Product');
const filePath=path.join(folderPath,'Product.pdf');
console.log(folderPath);
console.log(filePath);

//!(1)Create a directory if doesn't exist:-
async function createFolder(){
    try {
          await fs.access(folderPath);
    } catch {
        await fs.mkdir(folderPath);
        console.log('folderCreated');
    }
}
//createFolder();
//!(2).Create and write to a file:-
async function writeFile(){
    try {
          await fs.writeFile(filePath,"This is the file created asynchronously\n");
          console.log('file created successfully');
    } catch (error) {
         console.log(error);
    }
}
writeFile();

//!3)append file 
async function appendFile(){
    try {
          await fs.appendFile(filePath,"good sold successfully\n");
          console.log('file created successfully');
    } catch (error) {
         console.log(error);
    }
}
//appendFile();

//!4)Read file:-
async function readFile(){
    try {
       const read= await fs.readFile(filePath,'utf-8');
       console.log(read);
    } catch (error) {
        console.log(error);
    }
}
//readFile();

//!(5).Delete file:-
async function deleteFile(){
    try {
        await fs.unlink(filePath);
    } catch (error) {
        console.log(error);
    }
}

//deleteFile();




