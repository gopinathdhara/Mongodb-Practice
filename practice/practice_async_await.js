
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
 console.log('start');
 /*
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
})*/
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  //alert(result); // "done!"
}

f();
console.log('end');
/*
let getData= ()=>{

    return new Promise((resolve,reject)=>{
	
			 fs.readFile('./users.json', 'utf-8', function(err, data) {

					if(err) {
					  reject("error for read");
					}
					else {
					  try {
						  data = JSON.parse(data);
						  resolve(data);
					  }
					  catch (e) {
						  reject("invalid json file");
					  }
					}
				  });

    })
}

mydoworkasync=async()=>{
	
	try{
		let m1=await getData();
		console.log(m1);
	}catch(err){
		console.log(err);
	}
    
}
mydoworkasync();
*/