const fs = require("fs");

let scores = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

console.log(
    scores.reduce((prev, curr) => {
        if (curr < 40) return prev + 40;
        else return prev + curr;
    }, 0) / 5
);
