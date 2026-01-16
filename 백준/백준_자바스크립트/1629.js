const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [a, b, c] = fs.readFileSync(io).toString().trim().split(" ").map(BigInt);

function power(n) {
    if (n === 1n) return a % c;

    const cache = power(n / 2n) % c;
    if (n % 2n) return (cache * cache * (a % c)) % c;

    return (cache * cache) % c;
}

console.log(power(b).toString());
