const fs = require("fs");
const stdin = process.platform === "linux" ? "/dev/stdin" : "./in.txt";
let [n, ...grid] = fs
    .readFileSync(stdin)
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number);

let chessBoard = Array.from({ length: n }).map(() => new Array(n).fill(0));
for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
        chessBoard[y][x] = grid[y * n + x];
    }
}

// /
let used1 = new Array(n * 2).fill(false);
// \
let used2 = new Array(n * 2).fill(false);

let diagonals = [];
for (let y = 0; y < n; y++) diagonals.push({ x: 0, y });
for (let x = 1; x < n; x++) diagonals.push({ x, y: n - 1 });

let ans = 0;

function maxBishop(diagonalIdx = 0, placedCount = 0) {
    if (diagonalIdx === diagonals.length) {
        ans = Math.max(placedCount, ans);
        return;
    }

    const remain = diagonals.length - diagonalIdx;
    if (placedCount + remain <= ans) return;

    const { x: sx, y: sy } = diagonals[diagonalIdx];

    maxBishop(diagonalIdx + 1, placedCount);

    for (let i = 0; i < n; i++) {
        let x = sx + i;
        let y = sy - i;

        if (x >= 0 && x < n && y >= 0 && y < n) {
            if (chessBoard[y][x] === 1 && !used1[x + y] && !used2[x - y + n]) {
                used1[x + y] = true;
                used2[x - y + n] = true;

                maxBishop(diagonalIdx + 1, placedCount + 1);

                used1[x + y] = false;
                used2[x - y + n] = false;
            }
        } else if (y < 0 || x >= n) {
            break;
        }
    }
}

maxBishop();
console.log(ans);
