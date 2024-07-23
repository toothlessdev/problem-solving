const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [a, b, c] = fs.readFileSync(io).toString().trim().split(" ").map(BigInt);

function multiply(a, b) {
    if (b === 1n) return a % c;
    let cache = multiply(a, b / 2n);
    cache = (cache * cache) % c;
    if (b % 2n) cache = (cache * a) % c;
    return cache;
}

console.log(multiply(a, b));

/*
dp[0] = 1;
dp[1] = a % c;

function multiply(a, b) {
    if (dp[b] !== undefined) return dp[b] % c;

    if (b % 2 === 1) {
        return (dp[b] = (a * multiply(a, Math.floor(b / 2)) * multiply(a, Math.floor(b / 2))) % c);
    } else {
        return (dp[b] = (multiply(a, Math.floor(b / 2)) * multiply(a, Math.floor(b / 2))) % c);
    }
}

console.log(multiply(a, b));
*/

/**
let [a, b, c] = fs.readFileSync(io).toString().trim().split(" ").map(Number);
let result = a;
for (let multiply = 1; multiply <= b; multiply++) {
    result = (result * a) % c;
}
console.log(result);
시간초과
*/
