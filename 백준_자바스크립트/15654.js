const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [nm, arr] = fs.readFileSync(io).toString().trim().split("\n");
let [n, m] = nm.split(" ").map(Number);

arr = arr.split(" ").map(Number);

let result = [];
let sequence = [];
function DFS(arr, length) {
    if (length === 0) {
        result.push(sequence.join(" "));
    }
    sequence.push(arr);
    DFS(arr, length - 1);
    sequence.pop();
}

DFS(arr, m);
