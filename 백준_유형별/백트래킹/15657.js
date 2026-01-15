const fs = require("fs");
const stdin = process.platform === "linux" ? "/dev/stdin" : "./in.txt";

let [n, m, ...arr] = fs
    .readFileSync(stdin)
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number);

let ans = [];
arr = arr.sort((e1, e2) => e1 - e2);

function combination(beginIdx = 0, picked = []) {
    if (picked.length === m) {
        // ans.push(picked);
        // console.log(picked);
        ans.push(picked.join(" "));
        return;
    }

    for (let idx = beginIdx; idx < arr.length; idx++) {
        picked.push(arr[idx]);
        combination(idx, picked);
        picked.pop(arr[idx]);
    }
}

combination();
console.log(ans.join("\n"));
