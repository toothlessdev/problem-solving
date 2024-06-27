const fs = require("fs");
let [n, b] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split(" ");

let format = [...Array.from({ length: 10 }, (v, k) => k.toString()), ...Array.from({ length: 26 }, (v, k) => String.fromCharCode(k + 97))];

n = n.toLowerCase().split("").reverse();

let sum = 0;
for (let i = 0; i < n.length; i++) {
    sum += b ** i * format.findIndex((v) => v === n[i]);
}
console.log(sum);
