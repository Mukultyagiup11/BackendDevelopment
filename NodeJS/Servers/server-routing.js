//!example Server1:-

const http=require('http');
//create a server:-
const server=http.createServer((req,res)=>{
    //set the content to plain:-
    res.setHeader('Content-Type','text/plain');
    if(req.url==='/' && req.method==='GET'){
          res.statusCode=200;
          res.end('Welcome to homePage!');
    }else if(req.url==='/about' && req.method==='GET'){
      res.statusCode=200;
      res.end('Welcome to AboutPage!');
    }else if(req.url==='/contact' && req.method==='GET'){
        res.statusCode=200;
        res.end('Contact Us at:mukul676767@mail.com!');
    }else{
        res.statusCode=404;
        res.end('Page NotFound!');
    }
})
//define port
const PORT=8080;
//start the server:-
server.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log('press Ctrl+C to stop the server');
})



//example server 2:-
// const http=require('http');
// const server=http.createServer((req,res)=>{
//      res.setHeader('Content-Type','text/plain');
//      if(req.url==='/' && req.method==="GET"){
//           res.statusCode=200;
//           res.end("This is Home Page of My Website!");
//      }else if(req.url==='/about' && req.method==="GET"){
//           res.statusCode=200;
//           res.end("This is About Page of My website!");
//      }else{
//         res.statusCode=400;
//         res.end('404-NOTFOUND');
//      }
// })

// const PORT=5656;
// server.listen(PORT,()=>{
//     console.log(`server is running at http://localhost:${PORT}`);
// })