let fs = require("fs");

console.log("before");

console.log("start");

fs.readFile("../ro.txt",function(err, data){
    
    if(err){
        console.log(err);
    }
    else{
        console.log(data.byteLength);
    }
})

console.log("After");