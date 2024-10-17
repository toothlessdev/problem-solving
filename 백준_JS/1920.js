const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, a, m, arr] = fs.readFileSync(io).toString().trim().split("\n");

let N = Number(n);
let A = a
    .split(" ")
    .map(Number)
    .sort((e1, e2) => e1 - e2);

function BinarySearch(begin, end, key) {
    if (begin > end) return -1;

    let mid = Math.floor((begin + end) / 2);
    if (A[mid] === key) return mid;
    else if (A[mid] > key) return BinarySearch(begin, mid - 1, key);
    else if (A[mid] < key) return BinarySearch(mid + 1, end, key);
}

let find = arr.split(" ").map(Number);
let isExist = [];

for (const element of find) {
    if (BinarySearch(0, A.length - 1, element) !== -1) isExist.push(1);
    else isExist.push(0);
}

console.log(isExist.join("\n"));
