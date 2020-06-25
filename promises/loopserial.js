let fs = require("fs");
let files = ["../ro.txt","../ro1.txt","../ro2.txt"];

console.log("before");
console.log("start");


function fileReadPromise(){
    let fwbrp = fs.promises.readFile(files[0]);
    for(let i=1;i<files.length;i++){
        fwbrp = fwbrp.then(function(data){
            console.log("file "+(i)+" read complete")
            console.log(data.byteLength);
            let rfPromise = fs.promises.readFile(files[i]);
            return rfPromise;
        })
        
    }
    return fwbrp;
}

fileReadPromise().then(function(data){
    console.log("file 3 read complete");
    console.log(data.byteLength);
})