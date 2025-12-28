const fs = require("fs");
const stdin = process.platform === "linux" ? "/dev/stdin" : "./in.txt";

let [n, m] = fs.readFileSync(stdin).toString().trim().split(/\s+/).map(Number);
let arr = Array.from({ length: n }).map((_, i) => i + 1);
let ans = [];

function dfs(picked = [], beginIdx = 0) {
    if (picked.length === m) {
        ans.push(picked.join(" "));
        return;
    }
    for (let idx = beginIdx; idx < n; idx++) {
        if (picked.includes(arr[idx])) continue;

        picked.push(arr[idx]);
        dfs(picked, idx + 1);
        picked.pop();
    }
}

dfs();
console.log(ans.join("\n"));
