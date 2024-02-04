const fs = require("fs");
let [n, ...inputs] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

n = Number(n);
inputs.forEach((input, index) => {
    let [a, b] = input.toString().split(" ").map(Number);
    console.log(`Case #${index + 1}: ${a + b}`);
});
