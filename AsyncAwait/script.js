async function getName(){
    return "Hello ji";
}

let x= getName();
console.log(x);

getName()
    .then((data)=>{
        console.log(data);
    })

fun()
    .then((data)=>{
        console.log(data);
    })

async function fun(){
    let pr  = new Promise((resolve,reject)=>{
        resolve('hii from promise');
    })
    return pr;
}

let y = fun();
console.log(y);