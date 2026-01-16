const fs = require("fs");

let [n, b] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

let format = [...Array.from({ length: 10 }, (v, k) => k.toString()), ...Array.from({ length: 26 }, (v, k) => String.fromCharCode(k + 97))];
let number = [];

while (n !== 0) {
    number.push(format[n % b].toUpperCase());
    n = Math.floor(n / b);
}

console.log(number.reverse().join(""));
