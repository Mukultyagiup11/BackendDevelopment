console.log("App.js filed is called!...");
//import the math file:-
//method1:-
// const math=require("./math");
// const result1=math.add(34,78);
// const result2=math.sub(45,34);
// console.log(result1);
// console.log(result2);

//Method 2:-
const{add,sub}=require("./math");
const result3=add(34,67);
const result4=sub(90,34);
console.log(result3,result4);
