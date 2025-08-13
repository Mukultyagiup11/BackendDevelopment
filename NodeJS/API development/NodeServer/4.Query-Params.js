const http=require("http");
const url=require("url");
const requestHandler=(req,res)=>{
    //!Passed URL
    const passedURL=url.parse(req.url,true);
    //!Extract Query
    const queryParam=passedURL.query;
    console.log(queryParam);
    
    res.writeHead(200,{"content-type":"text/plain"});
    res.end('Welcome....!');

}

const server=http.createServer(requestHandler);

const PORT=3450;
server.listen(PORT,()=>{
   console.log(`http://localhost:${PORT}`);
})
