const fs = require("fs");
const isLinux = process.platform === "linux";

let [source, target] = fs
    .readFileSync(isLinux ? 0 : "./in.txt")
    .toString()
    .trim()
    .split(/\s+/);

let sourceArr = Array.from(source).slice();
let targetArr = Array.from(target).slice();

while (targetArr.length > sourceArr.length) {
    let top = targetArr[targetArr.length - 1];

    if (top === "A") {
        targetArr.pop();
    } else if (top === "B") {
        targetArr.pop();
        targetArr.reverse();
    }
}

console.log(targetArr.join("") === source ? 1 : 0);
