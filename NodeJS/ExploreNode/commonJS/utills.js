//*Ways of exporting mmodules in cjs:-
//!Single Function Exports
//!Object Exports
//!Named Function exports
//!using export shortHand 


 //*(1)Single Function Exports
 const firstName='Mukul';

// const greet=(name)=>{
//    console.log(`Good Morning:${name}`)
// }

 //expose this file
// module.exports=greet;


//*(2)Object Exports

function add(a,b){
     return a+b;
}
function subtract(a,b){
    return b-a;
}

//expose this file
// module.exports={
//     add:function(a,b){
//         return a+b;
//     },
//     subtract:function(a,b){
//      return a-b;
//     }
// }

//expose this file
module.exports={
    myadd:add,
    mysub:subtract
}


//*(3).Named Function exports
// module.exports.sayHi=(name)=>{
//       return `HII ${name}`;
// }

// module.exports.sayGoodBye=(name)=>{
//   return `GoodBye ${name},meet next time...`;
// }

//*(4)using export shortHand 

exports.sayHi=(name)=>{
  console.log(`HII friends,My self ${name}`);
}