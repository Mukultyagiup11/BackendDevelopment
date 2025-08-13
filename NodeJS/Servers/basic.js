
//!ex1
const http=require('http');
//create a server:-
const server=http.createServer((req,res)=>{
    //log request details:-
    console.log(`Received ${req.method} request for ${req.url}`);
    //set status code and header:-
    res.writeHead(200,{"content-type":"text/plain"});
    //send the response
    res.end('Hello world,this is my first nodejs server')

})
//define port
const PORT=5000;
//start the server:-
server.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log('press Ctrl+C to stop the server');
})


//!practice server:-
// const http=require('http');

// const server=http.createServer((req,res)=>{
//       //gives the deatil of the req:-
//       console.log(`Recived ${req.method} request for ${req.url} `);
//       //response setup
//       res.writeHead(200,{"text-content":"txt/plain"});
//       res.end('Hello,This is Mukul Tyagi.');
// })

// //start the server:-
// const PORT=8080;
// server.listen(PORT,()=>{
//     console.log(`server running at http://localhost:${PORT}`);
// })