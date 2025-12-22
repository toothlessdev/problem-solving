const io = process.platform === "linux" ? "/dev/stdin" : "./in.txt";
const fs = require("fs");

const input = fs
    .readFileSync(io)
    .toString()
    .trim()
    .split(/\s+/)
    .map((el) => Number(el));

const n = input[0];
const m = input[1];
const arr = input.slice(2).sort((e1, e2) => e1 - e2);

const ans = [];
const path = [];
const isVisited = new Array(n).fill(false);

function permutation(r, depth = 0) {
    if (r === depth) {
        ans.push(path.join(" "));
        return;
    }
    for (let i = 0; i < n; i++) {
        if (isVisited[i]) continue;

        isVisited[i] = true;
        path.push(arr[i]);

        permutation(r, depth + 1);

        isVisited[i] = false;
        path.pop();
    }
}

permutation(m);
console.log(ans.join("\n"));
