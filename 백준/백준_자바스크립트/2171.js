const fs = require("fs");
const isLinux = true;

let input = fs
    .readFileSync(isLinux ? "/dev/stdin" : "./in.txt")
    .toString()
    .trim()
    .split("\n");

let cursor = 0;
let next = () => input[cursor++];

let n = Number(next());

/** @type Map<number, Array<number>> */
let coords = new Map();

while (n--) {
    let [x, y] = next().split(" ").map(Number);
    if (!coords.has(y)) coords.set(y, [x]);
    else coords.get(y).push(x);
}

let sortedCoords = Array.from(coords.entries()).sort(
    ([key1], [key2]) => key1 - key2,
);

let ans = 0;

function combination(candidates = [], picked = [], beginIdx = 0, y) {
    if (picked.length === 2) {
        sortedCoords.map(([yCoord, xCoord]) => {
            // 고른 y 보다 큰 ycoords 에 대해
            if (y < yCoord) {
                // 뽑은 x 가 포함되어있으면
                if (picked.every((x) => xCoord.includes(x))) {
                    ans++;
                }
            }
        });

        return;
    }
    for (let i = beginIdx; i < candidates.length; i++) {
        picked.push(candidates[i]);
        combination(candidates, picked, i + 1, y);
        picked.pop();
    }
}

function countSquares() {}

for (const [y, x] of sortedCoords) {
    // y 에 대해 x 두개 고름
    combination(x, [], 0, y);
}

console.log(ans);
