const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [meta, ...input] = fs.readFileSync(io).toString().trim().split("\n");

let [n, m] = meta.split(" ");

let arr = input.slice(0, n);
let test = input.slice(n);

let nameDict = {};
let indexDict = {};

arr.forEach((name, index) => {
    nameDict[name] = index;
    indexDict[index] = name;
});

test.forEach((t) => {
    if (Number(t)) {
        console.log(indexDict[Number(t) - 1]);
    } else {
        console.log(nameDict[t] + 1);
    }
});
