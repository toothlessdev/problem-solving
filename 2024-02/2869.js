const fs = require("fs");

const [a, b, c] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

console.log(Math.ceil((c - b) / (a - b)));
