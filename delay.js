console.log('start');


let d = new Date().getTime();
console.log(d);

var endDate =d;
while(endDate<d+10000){
    endDate= new Date().getTime();
}



console.log('end');