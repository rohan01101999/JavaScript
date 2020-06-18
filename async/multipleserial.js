let fs = require("fs");
let files=["../ro.txt","../ro1.txt","../ro2.txt","../rohan.txt","../rohansh.txt"];

console.log("before");
console.log("start");



(async function(){
    
    let data1 = await fs.promises.readFile(files[0]);
    let data2 = await fs.promises.readFile(files[1]);
    let data3 = await fs.promises.readFile(files[2]);
    let data4 = await fs.promises.readFile(files[3]);
    let data5 = await fs.promises.readFile(files[4]);
    console.log("file 1 "+data1.byteLength);
    console.log("file 2 "+data2.byteLength);
    console.log("file 3 "+data3.byteLength);
    console.log("file 4 "+data4.byteLength);
    console.log("file 5 "+data5.byteLength);
})();