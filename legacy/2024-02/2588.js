const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const [a, b] = [input[0], [...input[1].toString().split("").map(Number).reverse()]];

b.map((e) => console.log(a * e));
console.log(input[0] * input[1]);
