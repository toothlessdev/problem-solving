const fs = require("fs");
let [n, b] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split(" ");

let format = Array.from(Array(36).keys());

console.log(format);

n = n.split("");
b = Number(b);

console.log(n, b);
