const fs = require("fs");
let [total, n, ...inputs] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

total = Number(total);

let sum = inputs.reduce((prev, curr) => {
    return (prev += curr
        .split(" ")
        .map(Number)
        .reduce((a, b) => a * b));
}, 0);

console.log(total === sum ? "Yes" : "No");
