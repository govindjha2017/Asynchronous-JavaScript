function fun(x){
    let pr = new Promise((resolve, reject) => {
         if(x){
            resolve();
         }
         else{
            reject();
         }
    })

    return pr;
}

fun(!true)
    .then(()=>{
        console.log('resolved sucessfully');
    })
    .catch(()=>{
        console.log('rejected');
    })