const fs = require("fs");

let s = Number(
    fs
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
        .toString()
        .trim()
);

let i = 1;
let sum = 0;
while (s >= sum) {
    sum += i;
    i += 1;
}

if (s === 1) console.log(1);
else if (s === 2) console.log(1);
else if (s === 3) console.log(2);
else console.log(i - 2);
