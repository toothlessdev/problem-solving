const fs = require("fs");

let n = Number(fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt"));

console.log(Math.pow(Math.pow(2, n) + 1, 2));
