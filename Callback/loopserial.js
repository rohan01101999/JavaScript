let fs = require("fs");

let files = ["../ro.txt","../ro1.txt","../ro2.txt"];

console.log("Before");
console.log("start");



function readFile(file,i){
    fs.readFile(file,function(err,data){
        if(err){
            console.log(err);
        }
        else{
            console.log("file "+i+" read complete")
            console.log(data.byteLength);
            if(i<files.length)
            readFile(files[i],i+1);
        }
    })
}

readFile(files[0],1);

