//3 types of modules
//1. core modules (fs,console.log (global))
//2. custom modules
//3. npm install third party modules

let getabout=()=>{
    return "I am Good Boy";
}
let myname="Gopinath Dhara"

module.exports={
    getabout,
    myname
}