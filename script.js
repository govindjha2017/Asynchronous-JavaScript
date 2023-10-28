console.log('start');

window.setTimeout(()=>{
    console.log('END');
},3000)

// window.setInterval(()=>{
//     console.log('interval');
// },2000)

for(let i=0;i<5;i++){
    window.setTimeout(()=>{
        console.log(i);
    },1000);
}

// function delay(n){
//     let x= new Date().getTime();
//     console.log(x);
//     console.log(x+n);
//     while(new Date().getTime()<x+n){
//         console.log('new date',new Date().getTime());
//         console.log(x+n);
//     }
// }
// console.log('function started')
// delay(5000);
// console.log('function end');