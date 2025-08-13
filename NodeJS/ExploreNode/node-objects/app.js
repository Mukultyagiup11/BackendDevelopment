//!Accessing the global object:-

global.myGlobal="Hello,from the global object";
//console.log(global);
//console.log(global.myGlobal);

//!To check if our variable is truly global:-
//console.log("myGlobal" in global);

//console.log(__dirname);
//console.log(__filename);

//!using 'setInterval' and 'clearInterval
// let count=0;
// const intervalId=setInterval(() => {
//       console.log('Hello world');
//       count++;
//       if(count==5){
//         clearInterval(intervalId);
//       }
// },1000);


//!using Timeout
setTimeout(()=>{
   console.log('This message is delayed by 5s');
},5000)
