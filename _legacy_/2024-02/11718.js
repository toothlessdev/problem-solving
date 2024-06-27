let fs = require("fs");
let [...str] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

console.log(str.join("\n"));
