const fs = require("fs");
const stdin = process.platform === "linux" ? "/dev/stdin" : "./in.txt";

let [n, m] = fs
    .readFileSync(stdin)
    .toString()
    .trim()
    .split(/\s+/)
    .map((e) => Number(e));

const ans = [];

function combination(beginIdx = 1, selected = []) {
    if (selected.length === m) {
        ans.push(selected.join(" "));
        return;
    }
    for (let idx = beginIdx; idx <= n; idx++) {
        selected.push(idx);
        combination(idx, selected);
        selected.pop();
    }
}

combination();
console.log(ans.join("\n"));
