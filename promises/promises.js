function downloadFile(path){
    return new Promise((resolve,reject)=>{
        console.log('file started to downloaded from path:',path);
        setTimeout(()=>{
            let file = path.split('/').pop();
            if(!file){
                //throw new error cannot read file
                reject('cannot read file');
            }
            resolve(file);
        },5000);
    })
}

function compressFile(file){
    return new Promise((resolve,reject)=>{
        console.log(`file started to compress`);
        setTimeout(()=>{
            let compressedFile = file.split('.')[0] + '.jip';
            resolve(compressedFile);
        },4000);
    })
}

function uploadFile(compressedFile){
    return new Promise((resolve,reject)=>{
        console.log(`file started to upload at https://facebook.com/${compressedFile}`);
        setTimeout(()=>{
            resolve();
        },5000)
    })
}

downloadFile('https://facebook.com/profile.jpg')
    .then((file)=>{
        console.log(`file Downloaded succesfully as`,file);
        compressFile(file)
            .then((compressedFile)=>{
                console.log('file compressed sucessfully',compressedFile);
                uploadFile(compressedFile)
                    .then(()=>{
                        console.log('file uploaded sucessfully');
                    })
            })
    })