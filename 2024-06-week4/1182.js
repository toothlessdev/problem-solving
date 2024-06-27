const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [meta, arr] = fs.readFileSync(io).toString().trim().split("\n");

let [n, s] = meta.split(" ").map(Number);
arr = arr.split(" ").map(Number);

let count = 0;

function combination(start, selected, size) {
    if (selected.length === size) {
        let sum = 0;
        selected.forEach((index) => {
            sum += arr[index];
        });
        if (sum === s) count++;
        return;
    }
    for (let index = start + 1; index < n; index++) {
        selected.push(index);
        combination(index, selected, size);
        selected.pop();
    }
}

for (let i = 1; i <= n; i++) {
    combination(-1, [], i);
}

console.log(count);
