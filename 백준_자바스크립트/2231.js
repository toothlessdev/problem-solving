const fs = require("fs");
const { exit } = require("process");

let n = Number(fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt"));

for (let i = 1; i <= n; i++) {
    let nums = i.toString().split("").map(Number);
    let sum = i + nums.reduce((prev, curr) => prev + curr);

    if (sum === n) {
        console.log(i);
        exit(0);
    }
}
console.log(0);
