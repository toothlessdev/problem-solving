const fs = require("fs");
const [n, ...input] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

const t = Number(n);

input.map((element) => {
    const [a, b] = element.split(" ").map(Number);
    console.log(a + b);
});
