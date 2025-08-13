console.log('command line interface');


function greetUser(name){
    console.log(`good morning ${name}`);
}
const getUser=process.argv[2]+process.argv[3];
greetUser(getUser);
console.log(process.argv[2]);

