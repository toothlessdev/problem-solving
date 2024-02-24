const fs = require("fs");

let [nm, numbers] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

let [n, m] = nm.split(" ").map(Number);
numbers = numbers.split(" ").map(Number);

let dist = Infinity;
let max = 0;

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        for (let k = 0; k < numbers.length; k++) {
            if (i !== j && j !== k && i !== k) {
                let sum = numbers[i] + numbers[j] + numbers[k];
                if (sum <= m && m - sum < dist) {
                    dist = m - sum;
                    max = sum;
                }
            }
        }
    }
}

console.log(max);
