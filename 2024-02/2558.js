const fs = require("fs");
let [a, b] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

console.log(Number(a) + Number(b));
