const fs = require("fs");

const count = Array.from({ length: 26 }, () => 0);

let str = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .toLowerCase();

Array.from(str).forEach((value) => {
    count[value.charCodeAt() - 97]++;
});

let maxCount = Math.max.apply(null, count);
let index = [];

for (let i = 0; i < count.length; i++) {
    if (maxCount === count[i]) {
        index.push(i);
    }
}

if (index.length !== 1) console.log("?");
else console.log(String.fromCharCode(index[0] + 97).toUpperCase());
