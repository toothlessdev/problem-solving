const fs = require("fs");
let [time, add] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

let [a, b] = time.split(" ").map(Number);
c = Number(add);

let m = a * 60 + b;
m += c;

a = Math.floor(m / 60) % 24;
b = m % 60;

console.log(a, b);
