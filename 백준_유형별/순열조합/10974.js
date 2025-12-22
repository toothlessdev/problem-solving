const io = process.platform === "linux" ? "/dev/stdin" : "./in.txt";
const fs = require("fs");

const N = Number(fs.readFileSync(io));
const arr = Array.from({ length: N }).map((_, i) => i + 1);
const ans = [];

function permutation(arr, n, r, depth = 0) {
    if (depth === r) {
        ans.push(arr.join(" "));
        return;
    }
    for (let i = depth; i < n; i++) {
        [arr[i], arr[depth]] = [arr[depth], arr[i]];
        permutation(arr, n, r, depth + 1);
        [arr[i], arr[depth]] = [arr[depth], arr[i]];
    }
}

permutation(arr, N, N);
console.log(ans.sort().join("\n"));
