let fs = require("fs");
let [n, inputs, v] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

n = Number(n);
inputs = inputs.split(" ").map(Number);
v = Number(v);

let result = inputs.reduce((acc, curr) => {
    if (curr === v) return acc + 1;
    return acc;
}, 0);

console.log(result);
