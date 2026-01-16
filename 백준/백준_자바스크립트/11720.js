let fs = require("fs");
let [n, num] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

console.log(
    num
        .split("")
        .map(Number)
        .reduce((prev, next) => prev + next)
);
