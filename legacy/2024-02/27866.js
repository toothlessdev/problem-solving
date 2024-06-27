let fs = require("fs");
let [str, i] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

i = Number(i);

console.log(str[i - 1]);
