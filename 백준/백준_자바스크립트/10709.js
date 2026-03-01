// 10709
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

let [H, W] = nextline().split(" ").map(Number);

let map = [];
let ans = [];

for (let h = 0; h < H; h++) {
    map.push(nextline().split(""));
}

for (let h = 0; h < H; h++) {
    let row = [];

    let lastCloud = -1;

    for (let w = 0; w < W; w++) {
        if (map[h][w] === "c") {
            lastCloud = w;
            row.push(0);
        } else {
            if (lastCloud === -1) row.push(-1);
            else row.push(w - lastCloud);
        }
    }
    ans.push(row);
}

console.log(ans.map((row) => row.join(" ")).join("\n"));
