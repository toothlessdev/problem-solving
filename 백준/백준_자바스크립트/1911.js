"use strict";
const fs = require("fs");
const isLocal = false;

let input = fs
    .readFileSync(isLocal ? "./in.txt" : 0)
    .toString()
    .trim()
    .split("\n");

let _line = 0;
let nextline = () => input[_line++];

let positions = [];
let [N, L] = nextline().split(" ").map(Number);

for (let n = 0; n < N; n++) {
    positions.push(nextline().split(" ").map(Number));
}

positions.sort((p1, p2) => p1[0] - p2[0]);

let ans = 0;
let cur = 0;

for (let [start, end] of positions) {
    let begin = start;

    if (cur < begin) cur = begin;
    if (cur >= end) continue;

    let count = Math.ceil((end - cur) / L);
    ans += count;
    cur += count * L;
}

console.log(ans);
