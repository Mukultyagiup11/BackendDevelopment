const http=require('http');

//mimic database:-
const Employee=[
    {id:1,name:"MukulTyagi"},
    {id:2,name:"Alice"}
]
const requestHandler=(req,res)=>{
  const {method,url}=req;
  const parts=url.split('/');
  const id=parts[2];
 // console.log(parts);
  //!Get all employees:-
  if(method==="GET" && url==="/employees"){
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(Employee));
  }
  //!get single employee:-
 else if(method==="GET"&& parts[1]==='employees' &&id){
      const employee=Employee.find((emp)=>emp.id===parseInt(id));
      if(employee){
        res.setHeader("Content-Type","application/json");
        res.end(JSON.stringify(employee));
      }else{
        res.setHeader("Content-Type","application/json");
        res.end(JSON.stringify({message:'The employee is not found!'}));
      }    
  }
  else if(method==="POST"&& url==="/employee"){
    let body='';
    //!listen to the event of making post request
    req.on('data',(chunk)=>{
      body+=chunk;
    })
    //!send the response
    req.on("end",()=>{
        const newEmployee=JSON.parse(body);
        Employee.push(newEmployee);
        res.setHeader("Content-Type","application/json");
        res.end(JSON.stringify(newEmployee));
    })
  }
 
}

const server=http.createServer(requestHandler);

const PORT=4545;
server.listen(PORT,(req,res)=>{
    console.log(`server listen at http://localhost:${PORT}`);
})
