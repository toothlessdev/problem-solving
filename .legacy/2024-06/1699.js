const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

/**
 * 1 -> 1*1 dp[1] = 1
 * 2 -> 1*1 + 1*1 dp[2] = 2
 * 3 -> 1*1 + 1*1 + 1*1 dp[3] = 3
 * 4 -> 2*2 dp[4] = 1
 * 5 -> 1*1 + 2*2 dp[5] = dp[4]
 *
 * dp[i*i] = 1
 * dp[i] = N 을 제곱수로 표현할때 항의 최소개수
 * dp[i] = i*i - 
 * dp[13] = dp[9] + dp[4]
 * dp[i] = dp[i-k*k] + 1;
 */

const n = +fs.readFileSync(io).toString();

const dp = new Array(100_001);
for (let i = 0; i * i <= 100_000; i++) dp[i * i] = 1;

for (let i = 1; i <= 100_000; i++) {
    dp[i] = dp[parseInt(Math.sqrt(i))];
}
