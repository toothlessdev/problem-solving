let fs = require("fs");
let char = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim();

console.log(char.charCodeAt());
