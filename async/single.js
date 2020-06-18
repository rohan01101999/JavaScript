let fs = require("fs");
let files=["../ro.txt","../ro1.txt","../ro2.txt","../rohan.txt","../rohansh.txt"];

(async function(){
    let data = await fs.promises.readFile(files[0]);
    console.log(data.byteLength);
})();
