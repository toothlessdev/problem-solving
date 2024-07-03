const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [n, ...tests] = fs.readFileSync(io).toString().trim().split("\n");

n = Number(n);

let count = 0;
for (let test of tests) {
    const stack = [];
    for (let char of test.trim()) {
        if (stack.length === 0) stack.push(char);
        else if (stack.at(-1) === char) stack.pop();
        else stack.push(char);
    }
    if (stack.length === 0) count++;
}
console.log(count);

/**
 * 오답노트
 * - 문제보고 아예 이해가 안될시 !!도식화!!
 * - 문제를 돌려보기!
 * - 문제를 반복해보기!
 *
 * 이문제의 경우 문제를 돌려보면
 * A
 * A
 * B
 * B
 * 같은 단어가 스택에 쌓여 있을때 소거!
 */
