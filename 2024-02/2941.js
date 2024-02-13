const fs = require("fs");

const alphabet = ["c=", "c-", "dz=", "d-", "li", "nj", "s=", "z="];
let str = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim();

let count = 0;

for (let i = 0; i < str.length; i++) {
    str.substring(i, i + 1);
}
