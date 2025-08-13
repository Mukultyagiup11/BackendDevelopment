const greet = require('./utills');
const utills=require('./utills');

//!import the Function
//?first method of callling
//greet('Mukul');
//?second method
//utills('Alice');

//?import the object
// console.log(utills.add(2,4));
// console.log(utills.subtract(5,2));
//?destructuring
// const{add,subtract}=utills;
// console.log(add(56,78));
// console.log(subtract(90,45));

//?import the object
const {myadd,mysub}=utills;
console.log(myadd(90,67));
console.log(mysub(45,23));

//?import Named Function
// const{sayHi,sayGoodBye}=utills; 
// console.log(sayHi('mukul'));
// console.log(sayGoodBye('Mukul'));

//?
const{sayHi}=utills;
console.log(sayHi('Mukul'));
