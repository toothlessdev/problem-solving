let fs = require("fs");
let [n, inputs] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

inputs = inputs.split(" ").map(Number);
max = Math.max(...inputs);

let sum = inputs.reduce((result, element) => {
    return result + (element / max) * 100;
}, 0);
console.log(sum / inputs.length);
