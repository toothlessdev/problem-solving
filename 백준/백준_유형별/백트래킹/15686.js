// https://boj.kr/15686
const fs = require("fs");
const stdin = process.platform === "linux" ? "/dev/stdin" : "./in.txt";

let [n, m, ...grid] = fs
    .readFileSync(stdin)
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number);

let houses = [];
let chickens = [];

let ans = Infinity;

for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
        const cell = grid[y * n + x];

        if (cell === 1) houses.push({ x, y });
        else if (cell === 2) chickens.push({ x, y });
    }
}

function distance(pos1, pos2) {
    return Math.abs(pos1.x - pos2.x) + Math.abs(pos1.y - pos2.y);
}

function combination(depth, begin = 0, selected = []) {
    if (selected.length === depth) {
        let dist = 0;

        for (const house of houses) {
            let minDistToChicken = Infinity;

            for (const include of selected) {
                minDistToChicken = Math.min(
                    distance(chickens[include], house),
                    minDistToChicken
                );
            }
            // console.log(minDistToChicken);
            dist += minDistToChicken;
        }

        ans = Math.min(ans, dist);

        return;
    }
    for (let i = begin; i < chickens.length; i++) {
        selected.push(i);
        combination(depth, i + 1, selected);
        selected.pop();
    }
}

combination(m);

// console.log({ houses });
console.log(ans);
