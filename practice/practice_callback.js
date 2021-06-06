console.log("practice callback start");
var myDBRequest;
var express = require('express');
var app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'todonotes'
});



//Connect to database and create a sql request object
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

//subtraction with arrow function
//function stored in a variable
/*
let sub = (a,b)=>{
    let result=a-b;
    return result;
}

console.log("subtarction"+ sub(5,2));*/

my1stcallback= (a,b,callback)=>{

    setTimeout(() => {
        //perform a task
        let sum=a+b;
        callback(undefined,sum) //return value resolve it (resolve/reject)

    }, 5000);
}
//then and catch
my1stcallback(130,20,(error,result)=>{

    if(error){
        return console.log(error);
    }
    console.log("success"+result)
})
console.log("end of calback");
/*
app.get('/getEmp',function(request,response){
    GetEmpList(); 
})*/
/*
//call back chain
my2ndcallback= (a,b,callback)=>{

    con.query('SELECT e.id, e.name, e.address, e.email FROM employees e', (error, result) => {
    if (error) {
        callback(error,undefined); //reject
    }
    else {
        //callback(undefined,result[0].email);//resolve
        con.query('SELECT e.id, e.name, e.address, e.email FROM employees e where e.name="'+result[0].name+'"', (error1, result1) => {
            if (error1) {
                callback(error1,undefined); //reject
            }
            else {
                callback(undefined,result1[0].address);//resolve
            }
          }); 
    }
  }); 
}
//try catch
my2ndcallback(130,20,(error,result)=>{

    if(error){
        return console.log(error);
    }
    console.log("success data1"+result)
})

*/

/*
const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error!', undefined)
        callback(undefined, [1, 4, 7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})
*/