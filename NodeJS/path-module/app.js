const path=require('path');
//!getting file name from a path:-
console.log(path.basename('/users/files/text.txt'));
//!getting directory names:-
console.log(path.dirname('/users/files/text.txt'));
//!getting extension name
console.log(path.extname('/users/files/text.html'));
//!Join Paths(work across opertaing system)
console.log(path.join('/users','files','test.txt'));
//!Getting Absolute path:-
console.log(path.resolve('test.txt'));
//!Acess special property:-
console.log(__filename);
console.log(__dirname);
