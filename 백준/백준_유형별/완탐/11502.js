const fs = require("fs");
const stdin = process.platform === "linux" ? "/dev/stdin" : "./in.txt";
const n = 1000;

let [t, ...tests] = fs
    .readFileSync(stdin)
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number);

let isPrime = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

for (let i = 2; i * i <= n; i++) {
    for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
    }
}

const prime = isPrime.reduce((acc, cur, idx) => {
    if (cur) return [...acc, idx];
    return acc;
}, []);

const ans = [];
let found = false;

function sumOfPrimes(idxs) {
    let sum = 0;
    for (const idx of idxs) {
        sum += prime[idx];
    }
    // console.log(sum);
    return sum;
}

function combination(target, beginIdx = 0, selected = []) {
    if (selected.length === 3) {
        if (sumOfPrimes(selected) === target) {
            found = true;
            ans.push(selected.map((i) => prime[i]).join(" "));
        }
        return;
    }
    for (let idx = beginIdx; idx < prime.length; idx++) {
        if (found) return;
        selected.push(idx);
        combination(target, idx, selected);
        selected.pop();
    }
}

tests.forEach((test) => {
    found = false;
    combination(test);
    if (!found) ans.push("0");
});
console.log(ans.join("\n"));
