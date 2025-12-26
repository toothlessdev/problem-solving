// https://boj.kr/1759
const fs = require("fs");
const stdin = process.platform === "linux" ? "/dev/stdin" : "./in.txt";

let [l, c, ...characters] = fs
    .readFileSync(stdin)
    .toString()
    .trim()
    .split(/\s+/);

[l, c] = [l, c].map(Number);

let aeiouCharset = ["a", "e", "i", "o", "u"];
let aeiou = characters.filter((char) => aeiouCharset.includes(char));
let rest = characters.filter((char) => !aeiouCharset.includes(char));

function combination(depth, candidate) {
    const results = [];
    const path = [];

    function dfs(begin) {
        if (path.length === depth) {
            results.push([...path]);
            return;
        }
        for (let i = begin; i < candidate.length; i++) {
            path.push(i);
            dfs(i + 1);
            path.pop();
        }
    }

    dfs(0);
    return results;
}

let ans = [];

for (let aeiouCount = 1; aeiouCount <= l - 2; aeiouCount++) {
    let restCount = l - aeiouCount;

    let aeiouCombination = combination(aeiouCount, aeiou);
    let restCombination = combination(restCount, rest);

    for (const i of aeiouCombination) {
        const aeiouChars = i.map((idx) => aeiou[idx]);
        for (const j of restCombination) {
            const restChars = j.map((idx) => rest[idx]);

            const password = [...aeiouChars, ...restChars].sort().join("");
            ans.push(password);
        }
    }
}

console.log(ans.sort().join("\n"));
