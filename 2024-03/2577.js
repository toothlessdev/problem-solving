const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [a, b, c] = fs.readFileSync(io).toString().trim().split("\n").map(Number);

let multiply = (a * b * c).toString();

for (let i = 0; i <= 9; i++) {
    let count = 0;
    for (let j = 0; j <= multiply.length; j++) {
        if (Number(multiply[j]) === i) count++;
    }
    console.log(count);
}
