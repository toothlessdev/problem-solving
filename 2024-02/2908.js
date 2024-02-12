let fs = require("fs");
let [a, b] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

a = Array.from(a.toString()).reverse().join("");
b = Array.from(b.toString()).reverse().join("");

console.log(a > b ? a : b);
