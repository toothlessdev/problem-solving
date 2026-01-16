const io = process.platform === "linux" ? "/dev/stdin" : "./in.txt";
const fs = require("fs");

const [n, ...arr] = fs
    .readFileSync(io)
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number);

let ans = 0;

function absSum(arr) {
    let sum = 0;
    for (let i = 1; i < arr.length; i++) {
        sum += Math.abs(arr[i - 1] - arr[i]);
    }
    return sum;
}

function permutation(n, r, depth = 0) {
    if (r === depth) {
        ans = Math.max(ans, absSum(arr.slice(0, r)));
        return;
    }
    for (let i = depth; i < n; i++) {
        [arr[i], arr[depth]] = [arr[depth], arr[i]];
        permutation(n, r, depth + 1);
        [arr[i], arr[depth]] = [arr[depth], arr[i]];
    }
}

// console.log(n, arr);
permutation(n, n);
console.log(ans);
