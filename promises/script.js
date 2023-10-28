// function result(kalMilneAunga){
//     return new Promise((resolve,reject)=>{
//         if(kalMilneAunga){
//             resolve();
//         }
//         else{
//             let error ="new error"
//             reject(error);
//         }
//     })
// }

// result(!true)
//     .then(()=>{
//         console.log('han milne aayega!!');
//     })
//     .catch((err)=>{
//         console.log('nhi milne aayya',err);
//     })


function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let data = [{id:1, name:'laptop', price:200}, {id:2, name:'phone', price:100}, {id:3, name:'pen', price:50}];
            resolve(data);
        },3000);
    })
}

fetchData()
    .then((data)=>{
        console.log(data);
        let finalData = data.filter((item)=>{
            if(item.price>=100){
                return item;
            }
        })
        return finalData;
    })

    .then((finalData)=>{
        console.log(finalData);
    })