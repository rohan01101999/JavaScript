let fs =require("fs");

console.log("before");
console.log("start");

let fileWillBeReadPromise = fs.promises.readFile("./ro.txt");

fileWillBeReadPromise.then(scb, fcb);

function scb(data){
    console.log("f1 read complete")
    console.log(data.byteLength);
}

function fcb(err){
        console.log(err);
}


console.log("after")