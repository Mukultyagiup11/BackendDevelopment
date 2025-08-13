const http=require("http");
const url=require("url");
const requestHandler=(req,res)=>{
    const passedURL=url.parse(req.url,true);
    if(passedURL.pathname==="/" && req.method==="GET"){
     res.writeHead(200,{"content-type":"text/plain"});
     res.end("thid is home page");
    }else if(passedURL.pathname==='/about' && req.method==='GET'){
       res.writeHead(200,{"content-type":"text/plain"});
       res.end("This is an About page");
    }
   
}

const server=http.createServer(requestHandler);

const PORT=4000;
server.listen(PORT,()=>{
   console.log(`http://localhost:${PORT}`);
})
