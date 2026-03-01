// 2870
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

let ans = [];

for (let n = 0; n < N; n++) {
    ans.push(
        nextline()
            .split(/[a-z]+/)
            .filter((num) => num)
            .map((num) => num.replace(/^0+/, ""))
            .map((num) => (num === "" ? "0" : num)),
    );
}

console.log(
    ans
        .flat()
        .sort((e1, e2) => {
            if (e1.length !== e2.length) return e1.length - e2.length;
            else return String(e1).localeCompare(String(e2));
        })
        .join("\n"),
);
