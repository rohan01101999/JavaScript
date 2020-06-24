let fs = require("fs");

console.log("Before");



fs.readFile("../ro.txt",function(err, data){
    if(err){
        console.log(err);
    }
    else{
        console.log("f1 read complete");
        console.log(data.byteLength);

        fs.readFile("../ro1.txt",function(err,data){
            if(err){
                console.log(err);
            }
            else{
                console.log("f2 read complete")
                console.log(data.byteLength);
                fs.readFile("../ro2.txt",function(err,data){
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log("f3 read complete");
                        console.log(data.byteLength);
                    }
                })
            }
        })
    }
})