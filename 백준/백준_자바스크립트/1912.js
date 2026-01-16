const io = process.platform === "linux" ? "/dev/stdin" : "_input.txt";
const fs = require("fs");

let [N, arr] = fs.readFileSync(io).toString().trim().split("\n");
arr = arr.split(" ").map(Number);

let max_sum = -Infinity;
let current_max_sum = -Infinity;

for (let i = 0; i < N; i++) {
    current_max_sum = current_max_sum + arr[i] > arr[i] ? current_max_sum + arr[i] : arr[i];
    max_sum = current_max_sum > max_sum ? current_max_sum : max_sum;
}

console.log(max_sum);
