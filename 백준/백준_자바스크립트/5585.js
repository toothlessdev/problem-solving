"use strict";
const fs = require("fs");
const isLocal = false;

let input = +fs
    .readFileSync(isLocal ? "./in.txt" : 0)
    .toString()
    .trim();

input = 1000 - input;

let types = [500, 100, 50, 10, 5, 1];
let ans = 0;

for (const type of types) {
    if (type <= input) {
        let cnt = Math.floor(input / type);
        input -= cnt * type;
        ans += cnt;
    }
}

console.log(ans);
