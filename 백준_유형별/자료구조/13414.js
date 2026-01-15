const fs = require("fs");
const stdin = process.platform === "linux" ? "/dev/stdin" : "./in.txt";

let [k, l, ...studentIds] = fs
    .readFileSync(stdin)
    .toString()
    .trim()
    .split(/\s+/);

[k, l] = [+k, +l];

let map = new Map();

studentIds.forEach((studentId) => {
    if (map.has(studentId)) {
        map.delete(studentId);
        map.set(studentId);
    } else {
        map.set(studentId);
    }
});

let ans = [];
for (const id of map.keys()) {
    if (ans.length >= k) break;
    ans.push(id);
}

console.log(ans.join("\n"));
