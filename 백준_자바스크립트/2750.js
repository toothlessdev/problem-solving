const fs = require("fs");

let [n, ...arr] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

arr.sort((e1, e2) => e1 - e2);
console.log(arr.join("\n"));
