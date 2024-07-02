const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "./_input.txt";

const n = +fs.readFileSync(io).toString();

const arr = Array.from({ length: n }, (v, k) => k + 1);
const result = [];

function permutation(n, r, depth) {
    if (r === depth) {
        result.push(arr.join(" "));
        return;
    }
    for (let index = depth; index < n; index++) {
        [arr[index], arr[depth]] = [arr[depth], arr[index]];
        permutation(n, r, depth + 1);
        [arr[index], arr[depth]] = [arr[depth], arr[index]];
    }
}

permutation(n, n, 0);
console.log(result.sort().join("\n"));
