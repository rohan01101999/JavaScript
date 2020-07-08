let fs = require("fs");
let path = require("path");
module.exports.view = function () {
    let src = arguments[0];
    let mode = arguments[1];
    if (mode == "-t") {
        viewastree("  ", src);
    }
    else if (mode == "-f") {
        viewasflat(src);
    }

    else {
        console.log("Wrong parameters");

    }
};
function viewastree(a, src) {
    let ans = fs.lstatSync(src).isDirectory();
    if (ans == false) {
        console.log(a + path.basename(src) + "*");
    }
    else {
        console.log(a + path.basename(src))
        let children = fs.readdirSync(src)
        for (let i = 0; i < children.length; i++) {
            let cChPath = path.join(src, children[i]);

            viewastree(a + "      ", cChPath);
        }
    }
}
function viewasflat(src) {
    let ans = fs.lstatSync(src).isDirectory();
    if (ans == false) {
        console.log(path.basename(src) + "*");
    }
    else {
        console.log( path.basename(src))
        let children = fs.readdirSync(src)
        for (let i = 0; i < children.length; i++) {
            let cChPath = path.join(src, children[i]);

            viewasflat(cChPath);
        }
    }
}