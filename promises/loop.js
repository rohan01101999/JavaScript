let fs = require("fs");
let files = ["../ro.txt","../ro1.txt","../ro2.txt"];

console.log("before");
console.log("start");



function readFilesPromise(){
    for(let i=0;i<files.length;i++){
        let fwbrp = fs.promises.readFile(files[i]);
        fwbrp.then(function(data){
            console.log("file "+(i+1)+" read complete");
            console.log(data.byteLength);
        })
    }
}

readFilesPromise();



console.log("After");