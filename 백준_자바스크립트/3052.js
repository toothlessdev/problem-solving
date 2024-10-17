let fs = require("fs");
let [...inputs] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

inputs = inputs.map((e) => e % 42);
let set = new Set([...inputs]);

console.log(set.size);
