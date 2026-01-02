const fs = require("fs");
const stdin = process.platform === "linux" ? "/dev/stdin" : "./in.txt";

let [n, m] = fs
    .readFileSync(stdin)
    .toString()
    .trim()
    .split(/\s+/)
    .map((e) => Number(e));

const ans = [];

function combination(selected = []) {
    if (selected.length === m) {
        ans.push(selected.join(" "));
        return;
    }
    for (let idx = 1; idx <= n; idx++) {
        selected.push(idx);
        combination(selected);
        selected.pop();
    }
}

combination();
console.log(ans.join("\n"));
