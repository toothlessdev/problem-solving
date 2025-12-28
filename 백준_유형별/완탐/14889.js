const fs = require("fs");
const stdin = process.platform === "linux" ? "/dev/stdin" : "./in.txt";

let [n, ...grid] = fs
    .readFileSync(stdin)
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number);

let s = Array.from({ length: n }).map(() => new Array(n).fill(0));

for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
        let cell = y * n + x;
        s[y][x] = grid[cell];
    }
}

function diff(picked) {
    let startTeam = picked;
    let linkTeam = [];

    let isPicked = new Array(n).fill(false);

    for (let p of picked) isPicked[p] = true;
    for (let i = 0; i < n; i++) {
        if (!isPicked[i]) linkTeam.push(i);
    }

    let sumStart = 0;
    let sumLink = 0;
    const teamSize = n / 2;

    for (let i = 0; i < teamSize; i++) {
        for (let j = 0; j < teamSize; j++) {
            sumStart += s[startTeam[i]][startTeam[j]];
            sumLink += s[linkTeam[i]][linkTeam[j]];
        }
    }
    return Math.abs(sumStart - sumLink);
}

let min = Infinity;

function combination(picked = [], beginIdx = 0) {
    if (picked.length === n / 2) {
        min = Math.min(diff(picked), min);
        return;
    }
    for (let idx = beginIdx; idx < n; idx++) {
        picked.push(idx);
        combination(picked, idx + 1);
        picked.pop();
    }
}

combination();
console.log(min);
