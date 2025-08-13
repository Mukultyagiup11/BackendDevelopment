//first nodejs code:-
console.log('hello from node.js!...');
const userName="Mukul Tyagi";
const currentTime=new Date();
const hours=currentTime.getHours();

let greeting;
if(hours<12){
    greeting="Good Morning";
}else if(hours<18){
    greeting="Good AfterNoon";
}else{
    greeting="Good Evening";
}

console.log(`${greeting}${" "}${userName},welcome to node.js`);
