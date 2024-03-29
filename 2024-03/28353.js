const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [metadata, weights] = fs.readFileSync(io).toString().trim().split("\n");

let [, max] = metadata.split(" ").map(Number);
let weight = weights.split(" ").map(Number);

weight.sort((e1, e2) => e1 - e2);

let begin = 0;
let end = weight.length - 1;

let count = 0;

while (begin < end) {
    if (weight[begin] + weight[end] <= max) {
        count++;
        begin++;
        end--;
    } else {
        end--;
    }
}

console.log(count);
