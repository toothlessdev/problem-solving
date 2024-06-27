const fs = require("fs");

let [n, k] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

let divs = [];

for (let i = 1; i <= n; i++) {
    if (n % i === 0) divs.push(i);
}

if (divs[k - 1] !== undefined) console.log(divs[k - 1]);
else console.log(0);
