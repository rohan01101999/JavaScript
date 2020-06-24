let fs = require("fs");

let files = ["../ro.txt","../ro1.txt","../ro2.txt"];

fs.readFile("../ro.txt",function(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log("f1 read complete")
        console.log(data.byteLength)
        if(data.byteLength>20){
            fs.readFile("../ro1.txt",function(err,data){
                if(err){
                    console.log(err);
                }
                else{
                    console.log("f2 read complete")
                    console.log(data.byteLength);

                }
            })
        }
        else{
            fs.readFile("../ro2.txt",function(err, data){
                if(err){
                    console.log(err);
                }
                else{
                    console.log("f3 read complete");
                    console.log(data.byteLength);
                }
            })
        }
    }

})
