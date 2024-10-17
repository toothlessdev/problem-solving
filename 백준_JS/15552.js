const fs = require("fs");

let [n, ...input] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

n = Number(n);

let ans = "";
input.forEach((line) => {
    let [a, b] = line.toString().split(" ").map(Number);
    ans += a + b + "\n";
});
console.log(ans);
