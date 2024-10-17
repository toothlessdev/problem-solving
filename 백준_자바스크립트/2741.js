const fs = require("fs");
let n = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim();

n = Number(n);

console.log(Array.from({ length: n }, (v, k) => k + 1).join("\n"));
