let fs = require("fs");
let files=["../ro.txt","../ro1.txt","../ro2.txt","../rohan.txt","../rohansh.txt"];



(async function(){
    for(let i=0;i<files.length;i++){
        let data = await fs.promises.readFile(files[i]);
        console.log("file "+(i+1)+" read complete")
        console.log(data.byteLength);
    }
})();