"use strict";
const fs = require("fs");
const isLocal = false;

let N = +fs
    .readFileSync(isLocal ? "./in.txt" : 0)
    .toString()
    .trim();

function nQueen(N) {
    const usedCol = Array(N).fill(false);
    const diag1 = Array(2 * N - 1).fill(false);
    const diag2 = Array(2 * N - 1).fill(false);

    let count = 0;

    function dfs(row) {
        if (row === N) {
            count++;
            return;
        }
        for (let col = 0; col < N; col++) {
            const d1 = row - col + (N - 1);
            const d2 = row + col;
            if (usedCol[col] || diag1[d1] || diag2[d2]) continue;

            usedCol[col] = diag1[d1] = diag2[d2] = true;
            dfs(row + 1);
            usedCol[col] = diag1[d1] = diag2[d2] = false;
        }
    }

    dfs(0);
    return count;
}

console.log(nQueen(N));
