let cm=require("./custom_module.js")
let chkvald=require("validator")
let desc=cm.getabout()
let name=cm.myname
//console.log("Name "+name)
//console.log("Desc "+desc)
//console.log(chkvald.isEmail('foo@bar.com'))
//console.log(chkvald.isMobilePhone("9804669402"))
console.log(chkvald.isAlpha("aaa"))