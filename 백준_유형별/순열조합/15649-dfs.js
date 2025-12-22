const io = process.platform === "linux" ? "/dev/stdin" : "./in.txt";
const fs = require("fs");

const [n, m] = fs
    .readFileSync(io)
    .toString()
    .trim()
    .split(/\s+/)
    .map((el) => Number(el));

const arr = Array.from({ length: n }).map((_, i) => i + 1);
const isVisited = new Array(n).fill(false);
const path = [];
const ans = [];

function dfs(r, depth = 0) {
    if (r === depth) {
        ans.push(path.join(" "));
        return;
    }
    for (let i = 0; i < n; i++) {
        if (isVisited[i]) continue;

        isVisited[i] = true;
        path.push(arr[i]);

        dfs(r, depth + 1);

        isVisited[i] = false;
        path.pop();
    }
}

dfs(m);
console.log(ans.join("\n"));
