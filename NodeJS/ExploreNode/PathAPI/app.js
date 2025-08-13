const path=require('path');
//console.log(path);
//!path.basename()
const filename=path.basename('/user/test/file.txt/somepath');
//console.log(filename);

//!path.dirname()
const directory=path.dirname('/user/test/file.txt/somepath');
//console.log(directory);

//!path.extname()
const ext=path.extname('/user/test/file.txt/somepath.txt');
//console.log(ext);

//!path.join()
const joinedPath=path.join('user','text','sample.txt');
//console.log(joinedPath);

//!path.resolve():-going to resolve sequence of path into absolute path
const absolutePath=path.resolve("text","file.txt");
//console.log(absolutePath);

//!path.isAbsolute()
const isAbs=path.isAbsolute('/user/path');
//console.log(isAbs);

//!path.parse():-This one is going to return an object from path string
const parse=path.parse("/user/text/file.txt");
console.log(parse);
