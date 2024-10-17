const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [workHours, dayHours, pattern] = fs.readFileSync(io).toString().split("\n");
let remainHours =
    Number(workHours) -
    pattern
        .split("")
        .filter((char) => char !== "?")
        .map(Number)
        .reduce((acc, curr) => acc + curr, 0);
let unknownDays = pattern.split("").reduce((days, char) => {
    if (char === "?") return days + 1;
    else return days;
}, 0);

let availableWorkHours = Array.from({ length: Number(dayHours) + 1 }, (v, k) => k);

function permutation(arr, r, sum) {
    let results = [];

    function P(current, currentSum) {
        if (current.length === r) {
            if (currentSum === sum) {
                results.push(current.slice());
            }
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            current.push(arr[i]);
            P(current, currentSum + arr[i]);
            current.pop();
        }
    }
    P([], 0);
    return results;
}

let results = permutation(availableWorkHours, unknownDays, remainHours);

for (let index = 0; index < results.length; index++) {
    let str = [];
    for (let pIndex = 0, i = 0; pIndex < pattern.length; pIndex++) {
        if (pattern[pIndex] !== "?") str.push(pattern[pIndex]);
        else {
            str.push(results[index][i++]);
        }
    }
    console.log(str.join(""));
}
