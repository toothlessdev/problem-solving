const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number)[0];

let ans = "";

Array.from(Array((input - 4) / 4)).map(() => (ans += "long "));
console.log(`${ans}long int`);
