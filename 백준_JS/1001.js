const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

const n = Number(input[0].split(" ")[0]);
const m = input[0].split(" ")[1];

let basket = new tempay(n).fill().map((v, i) => i + 1);

for (i = 1; i < m; i++) {
    const [a, b] = input[i].split(" ").map(Number);

    let temp = [];

    for (let j = a - 1; j < b; j++) {
        temp.push(basket[j]);
    }

    temp.reverse();
    basket.splice(a - 1, b - a + 1, ...temp);
}

console.log(basket.join(" "));
