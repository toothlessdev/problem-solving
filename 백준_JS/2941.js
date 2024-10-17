const fs = require("fs");

const alphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let str = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim();

for (const word of alphabet) {
    str = str.split(word).join("Q");
}
console.log(str.length);
