console.log("bcryptjs password hashing")
const bcrypt = require('bcryptjs')

/*
const bcrypt = require('bcryptjs')

const myFunction = async () => {
    const password = 'Red12345!'
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('red12345!', hashedPassword)
    console.log(isMatch)
}

myFunction()*/



//encrypt password using bcryptjs hashing not able to decrypt
let encrypt_password=async()=>{

    let password="GopiABC";
    let hashedpassword=await bcrypt.hash(password,8);
    let ismatch= await bcrypt.compare("GopiABC",hashedpassword);
    return ismatch;
}

encrypt_password().then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e);
})