let fs = require("fs");
let [n, ...str] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

str.forEach((s) => {
    console.log(s[0] + s[s.length - 1]);
});
