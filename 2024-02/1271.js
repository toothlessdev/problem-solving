const fs = require("fs");

let [a, b] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(BigInt);

console.log(parseInt(a / b));
console.log(parseInt(a % b));
