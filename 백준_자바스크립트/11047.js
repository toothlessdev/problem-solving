const fs = require("fs");
const stdin = process.platform === "linux" ? "/dev/stdin" : "./in.txt";

let [n, k, ...coins] = fs
    .readFileSync(stdin)
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number);

let ans = 0;

for (const coin of coins.reverse()) {
    const count = Math.floor(k / coin);
    k -= count * coin;
    ans += count;
}

console.log(ans);
