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

let N = Number(nextline());
let triangle = [];

for (let n = 0; n < N; n++) {
    triangle.push(nextline().split(" ").map(Number));
}

let height = triangle.length;
let cache = triangle.map((row) => row.slice());

for (let y = 1; y < height; y++) {
    for (let x = 0; x <= y; x++) {
        cache[y][x] += Math.max(cache[y - 1][x] ?? 0, cache[y - 1][x - 1] ?? 0);
    }
}

console.log(Math.max(...cache[height - 1]));
