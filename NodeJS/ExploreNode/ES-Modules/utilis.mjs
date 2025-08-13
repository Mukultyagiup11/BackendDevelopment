//!Default Export
//!Named Export
//!Mixed Export(Default+Mixed)
//!Export Everything


//?Default Export
// export default function(name){
//     return `hello ${name}`;
// }

//?Named Export
// export function add(a,b){
//    return a+b;
// }
// export function sub(a,b){
//    return b-a;
// }

//?Mixed Export(Default+Mixed)
// export default function(name){
//     return `hello ${name}`;
// }

// export function add(a,b){
//    return a+b;
// }

// export function sub(a,b){
//    return b-a;
// }

//?Export Everything
export function add(a,b){
   return a+b;
}

export function sub(a,b){
   return b-a;
}