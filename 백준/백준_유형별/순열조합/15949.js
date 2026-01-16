const io = process.platform === "linux" ? "/dev/stdin" : "./in.txt";
const fs = require("fs");

const [n, r] = fs.readFileSync(io).toString().trim().split(" ").map(Number);
const arr = Array.from({ length: n }).map((_, i) => i + 1);

const ans = [];

function permutation(n, r, depth = 0) {
    if (r === depth) {
        const selected = arr.slice(0, r);
        ans.push(selected.join(" "));
        return;
    }
    for (let i = depth; i < n; i++) {
        [arr[i], arr[depth]] = [arr[depth], arr[i]];
        permutation(n, r, depth + 1);
        [arr[i], arr[depth]] = [arr[depth], arr[i]];
    }
}

permutation(n, r);

console.log(ans.sort().join("\n"));
