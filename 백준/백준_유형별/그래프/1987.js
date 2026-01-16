// https://boj.kr/1987
const fs = require("fs");
const stdin = process.platform === "linux" ? "/dev/stdin" : "./in.txt";

let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];
let [r, c, ...map] = fs.readFileSync(stdin).toString().trim().split(/\s+/);
let grid = Array.from({ length: r }).map(() => new Array(c).fill(0));

[r, c] = [r, c].map(Number);

for (let row = 0; row < r; row++) {
    for (let col = 0; col < c; col++) {
        grid[row][col] = map[row][col];
    }
}

let isVisited = new Array(26).fill(false);
let ans = 0;

function dfs(x, y, count) {
    ans = Math.max(ans, count);

    if (ans === 26) return;

    for (let dir = 0; dir < 4; dir++) {
        const nx = x + dx[dir];
        const ny = y + dy[dir];

        if (nx >= 0 && nx < c && ny >= 0 && ny < r) {
            const charIdx = grid[ny][nx].charCodeAt(0) - 65;

            if (!isVisited[charIdx]) {
                isVisited[charIdx] = true;
                dfs(nx, ny, count + 1);
                isVisited[charIdx] = false;
            }
        }
    }
}

const startIdx = grid[0][0].charCodeAt(0) - 65;
isVisited[startIdx] = true;
dfs(0, 0, 1);

console.log(ans);
