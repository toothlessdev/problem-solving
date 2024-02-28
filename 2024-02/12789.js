/**
 * next 나올때 까지 stack 에 push,
 * next 나오면 sorted 에 push
 * sorted 에 next 에서 빼서 push
 * 기존풀이의 문제점 : 21435 와 같은 입력이 들어왔을때 대기열에서 2를 바로 뺄수 있음
 */

const fs = require("fs");

let [n, line] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

function isAcceptible(line) {
    let next = 1;
    let waiting = [];
    let sorted = [];

    for (const index of line.split(" ").map(Number)) {
        waiting.push(index);
        while (waiting.length !== 0 && waiting.at(-1) === next) {
            waiting.pop();
            next++;
        }
        if (waiting.length > 1 && waiting.at(-1) > waiting.at(-2)) return "Sad";
    }
    return "Nice";
}

// console.log(line);
console.log(isAcceptible(line));
