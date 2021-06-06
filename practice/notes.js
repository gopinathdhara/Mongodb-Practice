const fs = require('fs')
const chalk = require('chalk')
// ################promise chaining###################
//node mynotesapp.js add --title="t2" --firstNumber=500 --secondNumber=600
const addnumber=function(no1,no2,title){
   
    readFile("myfile1.json")
    .then(data => {
        if(data==""){
            readnoteobj=[]; //array is empty
            readnoteobj.push({title:title, myfirstno:no1, mysecondno:no2})// making array of object
            return savenotes(readnoteobj)
        }else{
            const filedata=data.toString()
            const readnoteobj= JSON.parse(filedata)// parse to object
            var founditem = readnoteobj.find(function(item, index) {
                if(item.title == title)
                    return true;
            });
            
            if(founditem==undefined)
            {
                readnoteobj.push({title:title, myfirstno:no1, mysecondno:no2})
                return savenotes(readnoteobj)
            }
            else{
                console.log(chalk.red.inverse('Duplicate title '+founditem.title+' found')) 
                //console.log(founditem.title)
            }
        }
        
    }).then(data1=>{
        if(data1!=undefined){
            console.log(chalk.green.inverse(data1)) 
        }else{
            console.log(data1)
        }
    })
    .catch(err => {
        console.log(err);
    });
}
//##############callback chaining##############
//node mynotesapp.js remove --title="t1" --firstNumber=30 --secondNumber=40
const removenumber=function(title){

    readFileCallback("myfile1.json",(error,result)=>{

        if(error){
            return console.log(error);
        }
        const filedata=result.toString()
        const readnoteobj= JSON.parse(filedata)// parse to object
        const notesToKeep = readnoteobj.filter(function (note) {
            return note.title !== title
        })
        console.log(notesToKeep)
        if(readnoteobj.length > notesToKeep.length)
        {
            saveFileCallback("myfile1.json",notesToKeep,(error1,result1)=>{
                if(error1){
                    return console.log(error);
                }
                console.log(chalk.green.inverse(result1)) 
            })
        }else{
            console.log(chalk.red.inverse("Note not found")) 
        }
        
    })
}
//##########promise#########
const savenotes = (notesarr) => {
    return new Promise((resolve, reject) => {
        const dataJson=JSON.stringify(notesarr) //convert into json and write into file
        fs.writeFile("myfile1.json",dataJson,function(err, data){
            if(err){
                return reject(err);
            }
            resolve("Data wrote in file succesfully");
        })
    });
}
//##########promise#########
const readFile = (fileName, encoding) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, encoding, (err, data) => {
            if (err) {
                return reject(err);
            }

            resolve(data);
        });
    });
}
//#########callback###########
readFileCallback= (fileName,callback)=>{

    //manually resolve and reject...no build in resolve and reject
    fs.readFile(fileName, (err, data) => {
        if (err) {
            callback("error",undefined)
        }

        callback(undefined,data)
    });
}
//#########callback###########
saveFileCallback= (fileName,notesarr,callback)=>{

        const dataJson=JSON.stringify(notesarr) //convert into json and write into file
        fs.writeFile(fileName,dataJson,function(err, data){
            if(err){
                callback("error",undefined)
            }
            callback(undefined,"Data removed successfully")
        })
}

module.exports={
    addnumber:addnumber,
    removenumber:removenumber
}