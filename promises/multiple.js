let fs = require("fs");

let files=["../ro.txt","../ro1.txt","../ro2.txt"];

console.log("before");
console.log("start");



let f1wbrp = fs.promises.readFile(files[0]);
let f2wbrp = fs.promises.readFile(files[1]);
let f3wbrp = fs.promises.readFile(files[2]);

f1wbrp.then(function(data){
    console.log("f1 read complete");
    console.log(data.byteLength);
})

f2wbrp.then(function(data){
    console.log("f2 read complete");
    console.log(data.byteLength);
})

f3wbrp.then(function(data){
    console.log("f3 read complete");
    console.log(data.byteLength);
})



console.log("after");