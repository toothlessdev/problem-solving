const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

const [a, b, c] = [...input];

if (a === b && b === c) console.log(10000 + a * 1000);
else if (a !== b && b !== c && c !== a) console.log(Math.max(a, b, c) * 100);
else {
    if (a === b) console.log(1000 + a * 100);
    else if (b === c) console.log(1000 + b * 100);
    else if (a === c) console.log(1000 + c * 100);
}
