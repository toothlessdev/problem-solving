const fs = require("fs");

let [t, ...tests] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

let dp = [1, 1, 1, 2, 2, 3, 4, 5, 7, 9, ...Array(100).fill()];

for (let i = 6; i <= 100; i++) {
    dp[i] = dp[i - 5] + dp[i - 1];
}

let result = "";
tests.forEach((test) => {
    result += dp[test - 1] + "\n";
});

console.log(result);
