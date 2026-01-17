/*
const fs = require("fs");
const isLinux = process.platform === "linux";

let input = fs
    .readFileSync(isLinux ? "/dev/stdin" : "./in.txt")
    .toString()
    .trim()
    .split("-");

console.log(
    input.slice(1).reduce(
        (acc, cur) => {
            return (
                acc -
                cur
                    .split("+")
                    .map(Number)
                    .reduce((acc, cur) => acc + cur, 0)
            );
        },
        input[0]
            .split("+")
            .map(Number)
            .reduce((acc, cur) => acc + cur, 0),
    ),
);
*/

console.log(
    require("fs")
        .readFileSync(0)
        .toString()
        .trim()
        .split("-")
        .map((g) => g.split("+").reduce((a, b) => a + +b, 0))
        .reduce((a, b) => a - b),
);
