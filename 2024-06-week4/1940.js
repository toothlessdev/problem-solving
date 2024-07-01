const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [n, m, arr] = fs.readFileSync(io).toString().trim().split("\n");

n = +n;
m = +m;
arr = arr.split(" ").map(Number);

let count = 0;
function combination(start, selected = []) {
    if (selected.length === 2) {
        if (arr[selected[0]] + arr[selected[1]] === m) {
            count++;
        }
        return;
    }
    for (let index = start + 1; index < n; index++) {
        selected.push(index);
        combination(index, selected);
        selected.pop();
    }
}

combination(-1);
console.log(count);
