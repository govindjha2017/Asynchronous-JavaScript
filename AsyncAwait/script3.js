const pr = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise Resolved!!');
    },10000);
})

function fun(){
  return pr;
}

// let handlPromise = async ()=>{
//     console.log('hello from handle function');
//     let val = await pr;
//     console.log(val);
//     console.log('after resolved');
// }

// handlPromise();

fun()
    .then((data)=>{
        console.log(data);
    })
console.log('hello')