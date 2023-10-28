function downloadFile(path,downloaded){
    console.log('file started to download from path:',path);
    setTimeout(()=>{
        let file = path.split('/').pop();
        downloaded(file);
    },3000);
}

function compressFile(file,compressed){
    console.log('file startd to compressed');
    setTimeout(()=>{
        let compressFile = file.split('.')[0]+'.zip';
        compressed(compressFile);
    },2000);
}

function uploadFile(compressFile, uploaded){
    console.log(`file started to upload at http://facebookCloud.com/${compressFile}`);
    setTimeout(()=>{
        uploaded();
    },3000);
}

// callback Hell

downloadFile('https://facebook.com/profile.jpg',(file)=>{
    console.log('file downloaded sucessfully as ',file);

    compressFile(file,(compressFile)=>{
        console.log(`file compressed sucessfully as `,compressFile);

        uploadFile(compressFile,()=>{
            console.log('upload sucessfully');
        })
    })
})