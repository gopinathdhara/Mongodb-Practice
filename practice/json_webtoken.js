console.log("Json web token");
const jwt = require('jsonwebtoken')

let json_web_token_generate=()=>{
    return new Promise((resolve,reject)=>{
            let token=  jwt.sign({_id:1},"this is my secret key", { expiresIn: '30 seconds' });
            resolve(token);
    })
}

let json_web_token_verify=(token)=>{
    return new Promise((resolve,reject)=>{
        /*
        setTimeout(()=>{
            let ismatchdata=  jwt.verify(token,"this is my secret key");
            resolve(ismatchdata);
        },5000)*/

        setTimeout(()=>{
                    jwt.verify(token, "this is my secret key", function(err, decoded) {
                        if (err) {
                        /*
                            err = {
                            name: 'TokenExpiredError',
                            message: 'jwt expired',
                            expiredAt: 1408621000
                            }
                        */
                        reject(err);
                        }
                        else{
                            resolve(decoded);
                        }
                    });
        },5000)
    })
}

json_web_token_generate().then((result)=>{
    //console.log(result);
    return json_web_token_verify(result);
}).then((result1)=>{
    console.log(result1);
}).catch((e)=>{
    console.log(e);
})