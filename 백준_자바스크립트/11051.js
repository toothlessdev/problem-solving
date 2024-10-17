const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const [n, k] = fs.readFileSync(io).toString().trim().split(" ").map(Number);

const cache = Array.from({ length: n + 1 }, () => Array.from({ length: k + 1 }).fill(-1));
// console.log(cache);

function bin(n, k) {
    if (k < 0 || k > n) return 0;
    if (n === 0 || n === k) return 1;
    else if (cache[n][k] !== -1) return cache[n][k];
    else return (cache[n][k] = (bin(n - 1, k - 1) + bin(n - 1, k)) % 10007);
}

console.log(bin(n, k));
