const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [n, m] = fs.readFileSync(io).toString().trim().split(" ").map(Number);

let isPrime = new Array(1_000_001).fill(true);

for (let i = 2; i <= 1_000_000; i++) {
    for (let j = 2; i * j <= 1_000_000; j++) {
        isPrime[i * j] = false;
    }
}

isPrime[1] = false;
isPrime[2] = true;

let prime = [];
for (let i = n; i <= m; i++) {
    if (isPrime[i] === true) prime.push(i);
}

console.log(prime.join("\n"));
