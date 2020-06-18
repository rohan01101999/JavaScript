let fs = require("fs");
let files=["../ro.txt","../ro1.txt","../ro2.txt","../rohan.txt","../rohansh.txt"];

(async function(){
    
    let data1 = await fs.promises.readFile(files[0]);
    console.log("file 1 "+data1.byteLength);
    if(data1.byteLength>20){
        let data2 = await fs.promises.readFile(files[1]);
        console.log("file 2 "+data2.byteLength);
        if(data2.byteLength>50){
            let data4 = await fs.promises.readFile(files[3]);
            console.log("file 4 "+data4.byteLength);
        }
        else{
            let data5 = await fs.promises.readFile(files[4]);
            console.log("file 5 "+data5.byteLength);
        }
    }
    else{
        let data3 = await fs.promises.readFile(files[2]);
        console.log("file 3 "+data3.byteLength);
        if(data3.byteLength>30){
            let data5 = await fs.promises.readFile(files[4]);
            console.log("file 5 "+data5.byteLength);
        }
        else{
            let data4 = await fs.promises.readFile(files[3]);
            console.log("file 4 "+data4.byteLength);
        }
    }
})();