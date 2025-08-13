//!analyzing process
//console.log(process);
//!Encironment Variables
//console.log(process.env);
//!accessing environment variables
const appENV=process.env.APP_ENV||'development';
//!Display the env
//console.log(`Our NodeApp is running ${appENV} `);
//!setting the env
//interminal we can set as[ APP_ENV=production node app.js] and can run the file
//output will be:-Our NodeApp is running production


//!process.exit()
//?Check the current environment variable using 'NODE_ENV' environment variable
if(process.env.NODE_ENV!=='production'){
    //!Display some error
    console.log('This script should run in production');
    //!Exit the process
   // process.exit();
} 

//!`process.cwd()` and `process.chdir(directory)`
//?Log the current working directory of the process

console.log(`current working directory is ${process.cwd()}`);

try {
    //change the current working directory
    process.chdir('/temp');
    //log the new current working directory after the change
    console.log(`The new current working directory is ${process.cwd()}`);

} catch (error) {
    //log any error that might occurs during the directory change
    console.log(error);
}