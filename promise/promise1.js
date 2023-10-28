// const pr = new Promise((resolve, reject) => {
    
// })

// console.log(pr);

const url = 'https://official-joke-api.appspot.com/random_joke'; //api

fetch(url)
    .then((x)=>{
        // console.log(x);
        return x.json();
    })
    .then((data)=>{
        console.log(data);
        console.log(data.setup);
        console.log(data.punchline);
    })
    .catch((err)=>{
       console.log(err);
    })