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

const N = Number(nextline());

/**
 * n = 2
 * 1,2
 * 1,3
 * 2,3
 *
 * n = k 개이면
 * 첫번째 기둥에 k-1 개를 두번째 기둥으로 옮기고
 * 첫번째 기둥에 마지막 1개를 세번째 기둥으로 옮기고
 * 두번째 기둥에 k-1 개를 세번째 기둥으로 올긴다
 */

let ans = [];

/**
 * top 을 from 에서 to 로 옮김
 */
function moveHanoi(num, from, to, other) {
    if (num === 0) return;
    moveHanoi(num - 1, from, other, to);
    ans.push(`${from} ${to}`);
    moveHanoi(num - 1, other, to, from);
}

moveHanoi(N, 1, 3, 2);

console.log(ans.length);
console.log(ans.join("\n"));
