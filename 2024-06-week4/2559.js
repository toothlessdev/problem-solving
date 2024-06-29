const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [meta, arr] = fs.readFileSync(io).toString().trim().split("\n");

let [n, k] = meta.split(" ").map(Number);
arr = arr.split(" ").map(Number);

let prefixSum = [0];

for (let i = 1; i <= n; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i - 1];
}

let max = -Infinity;

for (let index = k; index <= n; index++) {
    let sum = prefixSum[index] - prefixSum[index - k];
    max = sum > max ? sum : max;
}
console.log(max);
