
function fun1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('promise1 resolved data');
        },10000);
        
    })
}
function fun2(){
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve('promise2 resolved data');
            const e = new Error("error hai ji")
            reject(e);
        },20000);
        
    })
}
console.log('start');
async function handlePromise(){
    try{
        console.log('Hello World');
 
    let data2 = await fun1();
    console.log(data2);

    console.log('console after resolved');

    let data1 = await fun2();
    console.log(data1);
    console.log('after error')
    }
   catch(err){
        console.log(err);
   }
}

handlePromise();


console.log('End');