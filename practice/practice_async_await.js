
/*
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non-negative')
            }

            resolve(a + b)
        }, 2000)
    })
}

const doWork = async () => {
    const sum = await add(1, -99)
    const sum2 = await add(sum, 50)
    const sum3 = await add(sum2, -3)
    return sum3
}

doWork().then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log('e', e)
})*/

// async await is like promise chaining and make synchronized
let multiply= (a,b)=>{

    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            if(a<0 ||b<0)
            {
                reject("error for negative no");
            }
            resolve(a*b);
        }, 3000);
    })
}

mydoworkasync= async(a1,b1)=>{

    let m1=await multiply(a1,b1);
    let m2=await multiply(m1,5);
    let m3=await multiply(m2,6)
    return m3;
}
mydoworkasync(-10,30).then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e);
})