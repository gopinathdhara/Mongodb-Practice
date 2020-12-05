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

/*
let firstpromise= new Promise((resolve,reject)=>{

        setTimeout(() => {
            console.log("promise");
            resolve("Success"+[1,2,3]); // resolve or reject
        }, 3000);
})

//then catch
firstpromise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})
*/

/*
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// add(1, 2).then((sum) => {
//     console.log(sum)

//     add(sum, 5).then((sum2) => {
//         console.log(sum2)
//     }).catch((e) => {
//         console.log(e)
//     })
// }).catch((e) => {   
//     console.log(e)
// })

add(1, 1).then((sum) => {
    console.log(sum)
    return add(sum, 4)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})*/

/*
let add= (a,b)=>{

    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            console.log("promise sum");
            resolve(a+b); // resolve or reject
        }, 3000);
    })
}

let subtract= (a,b)=>{

    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            console.log("promise subtract");
            resolve(a-b); // resolve or reject
        }, 3000);
    })
}
//promise chaining
add(3,4).then((sum1)=>{
    console.log(sum1);
    return subtract(sum1,2);
}).then((sub)=>{
    console.log(sub);  
}).catch((error)=>{
    console.log(error);
})
*/

let dbfetch1= (id)=>{
    return new Promise((resolve,reject)=>{
        con.query('SELECT e.id, e.name, e.address, e.email FROM employees e where e.id='+id, (error, result) => {
            if (result) {
                resolve(result)
            }
            else{
                reject("DB error");
            }
        });
    })
}

/*
dbfetch1(1).then((result1)=>{
    console.log(result1);
    //return subtract(sum1,2);
}).catch((error)=>{
    console.log(error);
})*/

module.exports = {
    dbfetch1,
  };