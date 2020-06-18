let fs = require("fs");
let files=["../ro.txt","../ro1.txt","../ro2.txt","../rohan.txt","../rohansh.txt"];

console.log("before");
console.log("start");

(async function(){
    let data = await fs.promises.readFile(files[0]);
    console.log("file 1 "+data.byteLength);
})();

(async function(){
    let data = await fs.promises.readFile(files[1]);
    console.log("file 2 "+data.byteLength);
})();

(async function(){
    let data = await fs.promises.readFile(files[2]);
    console.log("file 3 "+data.byteLength);
})();

(async function(){
    let data = await fs.promises.readFile(files[3]);
    console.log("file 4 "+data.byteLength);
})();

(async function(){
    let data = await fs.promises.readFile(files[4]);
    console.log("file 5 "+data.byteLength);
})();





console.log("after")