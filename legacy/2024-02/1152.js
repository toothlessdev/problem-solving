let fs = require("fs");
let str = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split(" ");

console.log(str.filter((word) => word !== "").length);
