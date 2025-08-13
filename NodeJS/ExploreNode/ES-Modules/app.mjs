//!1)Default Import
// import greet from './utilis.mjs';
// console.log(greet('Mukul Tyagi'));

//!2)Named Import
// import {add,sub} from './utilis.mjs';
// console.log(add(89,65));
// console.log(sub(90,43));

//!3)Mixed import(Default+Mixed)
// import greet,{add,sub} from './utilis.mjs'
// console.log(greet('Mukul'));
// console.log(add(90,45));
// console.log(sub(34,43));

//!4)import Everything
import * as utilis from './utilis.mjs'
console.log(utilis.add(90,56));
console.log(utilis.sub(78,90));

