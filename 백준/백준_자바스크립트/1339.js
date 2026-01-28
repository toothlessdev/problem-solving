"use strict";
const fs = require("fs");
const isLocal = false;

let [, ...strs] = fs
    .readFileSync(isLocal ? "./in.txt" : 0)
    .toString()
    .trim()
    .split("\n");

strs.sort((e1, e2) => e2.length - e1.length);

let radixMap = new Map();

strs.forEach((str) => {
    let reversed = Array.from(str).reverse();

    for (let radix = str.length - 1; radix >= 0; radix--) {
        let char = reversed[radix];

        if (radixMap.has(char)) {
            radixMap.set(char, radixMap.get(char) + Math.pow(10, radix));
        } else {
            radixMap.set(char, Math.pow(10, radix));
        }
    }
});

let value = 9;
let valueMap = new Map();

Array.from(radixMap.entries())
    .sort((e1, e2) => e2[1] - e1[1])
    .forEach(([key]) => valueMap.set(key, value--));

let ans = 0;
strs.forEach((str) => {
    let num = [];
    Array.from(str).forEach((char) => {
        num.push(valueMap.get(char));
    });

    ans += Number(num.join(""));
});

console.log(ans);
