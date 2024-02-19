const fs = require("fs");

let [...arr] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

arr = arr.map((row) => row.split(" ").map(Number));

let maxRow = -1,
    maxCol = -1,
    max = -1;

for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
        if (max < arr[y][x]) {
            maxRow = y;
            maxCol = x;
            max = arr[y][x];
        }
    }
}

console.log(max);
console.log(maxRow + 1, maxCol + 1);
