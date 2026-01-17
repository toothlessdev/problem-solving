const fs = require("fs");
const isLinux = process.platform === "linux";

let [n, a, b] = fs
    .readFileSync(isLinux ? 0 : "./in.txt")
    .toString()
    .trim()
    .split("\n");

a = a
    .split(" ")
    .map(Number)
    .sort((e1, e2) => e1 - e2);

b = b
    .split(" ")
    .map(Number)
    .sort((e1, e2) => e2 - e1);

console.log(b.reduce((acc, cur, idx) => acc + cur * a[idx], 0));
