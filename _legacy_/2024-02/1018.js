const fs = require("fs");

let [nm, ...rows] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

let [n, m] = nm.split(" ").map(Number);
let arr = rows.map((row) => row.split(""));

const chessBoard = `WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBBBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW`
    .split("\n")
    .map((row) => row.split(""));

let min = Infinity;
for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
        console.log(x, y);
        let diff = 0;
        for (let fromY = 0; fromY < 8; fromY++) {
            for (let fromX = 0; fromX < 8; fromX++) {
                if (chessBoard[fromY][fromX] !== arr[y + fromY][x + fromX]) diff++;
            }
        }
        if (min > diff) min = diff;
    }
}

console.log(min);
