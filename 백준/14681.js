const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "linux" ? 0 : "../input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const [x, y] = [...input];
// console.log(x, y);

let division = 0;

if (x > 0 && y > 0) division = 1;
else if (x < 0 && y > 0) division = 2;
else if (x < 0 && y < 0) division = 3;
else if (x > 0 && y < 0) division = 4;

console.log(division);
