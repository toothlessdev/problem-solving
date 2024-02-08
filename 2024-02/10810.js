let fs = require("fs");
let [nm, ...inputs] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

let [n, m] = nm.split(" ").map(Number);
let basket = Array.from(Array(n).fill(0));

inputs.forEach((element) => {
    let [from, to, ball] = element.split(" ");

    for (let index = from - 1; index <= to - 1; index++) {
        basket[index] = Number(ball);
    }
});

let result = "";
basket.forEach((element) => {
    result += `${element} `;
});
console.log(result);
