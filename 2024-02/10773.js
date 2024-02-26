const fs = require("fs");

let [k, ...inputs] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

let stack = [];

inputs.forEach((input) => {
    if (input === 0) stack.pop();
    else stack.push(input);
});

let sum = 0;
for (const n of stack) {
    sum += n;
}
console.log(sum);
