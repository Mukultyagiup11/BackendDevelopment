const http=require("http");
const { json } = require("stream/consumers");
const url=require("url");
const requestHandler=(req,res)=>{
  const data={
    name:"Mukul Tyagi",
    age:45,
    email:"user123@mail.com"
  }
    
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(data));

}

const server=http.createServer(requestHandler);

const PORT=3450;
server.listen(PORT,()=>{
   console.log(`http://localhost:${PORT}`);
})
