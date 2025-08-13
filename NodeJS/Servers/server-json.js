const http=require('http');
const server=http.createServer((req,res)=>{
    res.getHeader('Content-Type','application/JSON');
    if(req.url==='/' && req.method==='GET'){
        res.statusCode=200;
        res.end(JSON.stringify({message:'Welcome to the API'}));
    }else if(req.url==='/users' && req.method==='GET'){
        res.statusCode=200;
        const users=[{id:1,name:"Mukul",id:2,name:"Satyam"}];
        res.end(JSON.stringify(users));
    }else if(req.url==='/products' && req.method==='GET'){
         res.statusCode=200;
         const users=[{id:201,name:"Laptop",price:30000,id:202,name:"Mobile",price:10000}];
         res.end(JSON.stringify(users));
    }
    
})

const PORT=7878;
server.listen(PORT,()=>{
    console.log(`Server Listen At http://localhost:${PORT}`);
})