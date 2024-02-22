const fs = require("fs");
let n = Number(fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt"));

let dp = [0, 1, 2, 2, 2, 2, 2, 2];

for (let i = 8; i < n; i++) {
    dp[i];
}

console.log(n);
