const fs = require("fs");
const stdin = process.platform === "linux" ? "/dev/stdin" : "./in.txt";

let [n, offset, apples, ...positions] = fs
    .readFileSync(stdin)
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number);

let move = 0;
let begin = 1;
let end = begin + offset - 1;

for (const position of positions) {
    if (begin <= position && position <= end) {
        move += 0;
    }
    // left
    else if (position < begin) {
        let diff = begin - position;
        move += diff;
        begin -= diff;
        end -= diff;
    }
    // right
    else if (end < position) {
        let diff = position - end;
        move += diff;
        begin += diff;
        end += diff;
    }
}

console.log(move);
