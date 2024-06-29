let fs = require("fs");
let [...inputs] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

let seats = Array.from(Array(30).fill(0));

let result = "";
inputs.forEach((e) => (seats[e - 1] = 1));
seats.forEach((e, i) => {
    if (e === 0) result += `${i + 1}\n`;
});

console.log(result);
