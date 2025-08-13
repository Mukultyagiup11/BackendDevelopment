//!(1)Import require module
const http=require('http');
//console.log(http);
//!(2)Define the handler
const requestHandler=(req,res)=>{
  
   //!Send Response
   res.writeHead(200,{"content-type":"text-plain"});
   res.end("Hello,World")
}

//!(3)Create server
const server=http.createServer(requestHandler);

//!Start the server:-
const PORT=3000;
server.listen(PORT,(req,res)=>{
    console.log(`server listen at http://localhost:${PORT}`);
})
