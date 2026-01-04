const fs = require("fs");
const stdin = process.platform === "linux" ? "/dev/stdin" : "./in.txt";

let input = fs.readFileSync(stdin).toString().trim().split("\n");
let ans = [];

function combination(arr, beginIdx = 0, picked = []) {
    if (picked.length === 6) {
        ans.push(picked.map((idx) => arr[idx]).join(" "));
        return;
    }
    for (let idx = beginIdx; idx < arr.length; idx++) {
        picked.push(idx);
        combination(arr, idx + 1, picked);
        picked.pop();
    }
}

let line = 0;
while (Number(input[line]) !== 0) {
    let [n, ...arr] = input[line++].split(" ").map(Number);
    combination(arr);
    ans.push([]);
}

console.log(ans.join("\n"));
