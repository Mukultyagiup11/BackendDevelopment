const http=require('http');
const os=require('os');
const { parse } = require('path');
const process=require('process');
const { json } = require('stream/consumers');
const url=require('url');

//!Format bytes to human readable format:-
function formatBytes(bytes,decimal=2){
  if(bytes===2){
     return "0 Bytes"
  }
  //set base unit 2
  const k=1024;
  const sizes=['Bytes','KB','MB','GB','TB','PB'];
  const i=Math.floor(Math.log(bytes)/Math.log(k));
  return parseFloat((bytes/Math.pow(k,i))).toFixed(decimal)+' '+sizes[i];
}
//?Fotrmat seconds to humann readible time:-
function formatTime(seconds){
  const days=Math.floor(seconds/(3600*24));
  const hours=Math.floor((seconds%(3600*24))/3600);
  const minutes=Math.floor((seconds%3600)/60);
  const remainingseconds=Math.floor((seconds/60))
  return `${days}d ${hours}h ${minutes} ${remainingseconds}`
}

//console.log(os.cpus()[0]);
//!Get Cpu info
function getCpuInfo(){
    const model=os.cpus()[0].model;
     const cores=os.cpus().length;
     const architecture=os.arch();
     const loadAvg=os.loadavg();
     console.log({model,cores,architecture,loadAvg});
    return {model,cores,architecture,loadAvg}
}
//getCpuInfo();
//!get Memory info:-
function getMemoryInfo(){
   const total=os.totalmem();
   const free=os.freemem();
   const usage=((1-os.freemem()/os.totalmem())*100).toFixed(2)+'%';
   console.log(formatBytes(total),formatBytes(free),usage);
   return {total,free,usage}
}
//getMemoryInfo();
//!get os info:-
function getOsInfo(){
  const platform=os.platform();
  const type=os.type();
  const release=os.release();
  const hostName=os.hostname();
  const uptime=formatTime(os.uptime());
console.log({platform,type,release,hostName,uptime})
return {platform,type,release,hostName,uptime}
}
//getOsInfo();
//!get user info:-
function getuserInfo(){
   const user=os.userInfo();
   console.log(user);
   return user;
}
//getuserInfo();
//!get network info:-
function getNetworkInfo(){
  const network=os.networkInterfaces();
  console.log(network);
  return network;

}
//getNetworkInfo();
//!get process info:-
function getProcessInfo(){
  const pid=process.pid;
  const title=process.title;
  const version=process.version;
  const upTime=formatTime(process.uptime());
  console.log(pid,title,version,upTime);
  cwd:process.cwd();
 
  return {pid,title,version,upTime,
    memoryUsage:{
    rss:formatBytes(process.memoryUsage().rss),
    heapTotal:formatBytes(process.memoryUsage().heapTotal),
    heapUsed:formatBytes(process.memoryUsage().heapUsed),
    external:formatBytes(process.memoryUsage().external)
  },
   env:{
    NODE_ENV:process.env.NODE_ENV||'Not Set',
   }}

}
//getProcessInfo();


//!http server:-
const server=http.createServer((req,res)=>{
    const parsedUrl=url.parse(req.url,true);
    res.setHeader('Content-Type','application/JSON');
    if(parsedUrl.path==='/'){
      res.statusCode=200;
      res.end(
        JSON.stringify({
          name:"SysView-System Info Api",
          description:"Access system stats via simple JSON Routes",
          routes:["/cpu","/memory","/user","/process","/network"]
        })
      )
    }else if(parsedUrl.path==='/cpu'){
      res.statusCode=200;
      res.end(JSON.stringify(getCpuInfo(),null,2));
    }else if(parsedUrl.path==='/memory'){
      res.statusCode=200;
      res.end(JSON.stringify(getMemoryInfo(),null,2));
    }else if(parsedUrl.path==='/user'){
      res.statusCode=200;
      res.end(JSON.stringify(getuserInfo(),null,2));
    }else if(parsedUrl.path==='/process'){
      res.statusCode=200;
      res.end(JSON.stringify(getProcessInfo(),null,2));
    }else if(parsedUrl.path==='/network'){
      res.statusCode=200;
      res.end(JSON.stringify(getNetworkInfo(),null,2));
    }else{
      res.statusCode=400;
      res.end(JSON.stringify({
      error:"Route not found",
      }))
    }
})

//server PORT:-
const PORT=3000;
//listen at port 6000:-
server.listen(PORT,()=>{
  console.log(`server run at http://localHost:${PORT}`);
})