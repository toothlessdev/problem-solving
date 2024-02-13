const fs = require("fs");
let num = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

const total = [1, 1, 2, 2, 2, 8];

console.log(total.reduce((prev, curr, idx) => prev + (curr - num[idx]) + " ", ""));
