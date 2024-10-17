let fs = require("fs");
let str = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt").toString();

let index = Array.from({ length: 26 }, (v, k) => k);
let result = "";

index.forEach((value) => {
    let alphabet = String.fromCharCode(value + 97);
    result += Array.from(str).findIndex((value) => value === alphabet);
    result += " ";
});

console.log(result);
