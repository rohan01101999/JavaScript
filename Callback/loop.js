let fs = require("fs");

let files = ["../ro.txt","../ro1.txt","../ro2.txt"];

console.log("Before");
console.log("start");


for(let i=0;i<files.length;i++){
    fs.readFile(files[i],function(err,data){
        if(err){
            console.log(err);
        }
        else{
            console.log("file "+(i+1)+" read complete");
            console.log(data.byteLength);
            
        }
    })
}


console.log("After");