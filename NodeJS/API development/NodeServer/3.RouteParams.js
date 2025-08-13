const http=require("http");
const url=require("url");
const requestHandler=(req,res)=>{
    const passedURL=url.parse(req.url,true);
    //console.log(passedURL);
   const pathname=passedURL.pathname;
   console.log(pathname);
  
   //split the path name
   const pathComponent=pathname.split('/').filter(Boolean);
   console.log(pathComponent)

   //logic
   if(pathComponent[0]==="products" && pathComponent[1]){
  const productId=pathComponent[1];
     //send to the user
     res.writeHead(200,{"content-type":"text/plain"});
     res.end(`productId:${productId}`);
   }else{
     res.writeHead(200,{"content-type":"text/plain"});
     res.end('Not Found....!');
   }
}

const server=http.createServer(requestHandler);

const PORT=3450;
server.listen(PORT,()=>{
   console.log(`http://localhost:${PORT}`);
})
