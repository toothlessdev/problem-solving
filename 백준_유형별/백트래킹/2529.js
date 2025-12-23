const io = process.platform === "linux" ? "/dev/stdin" : "./in.txt";
const fs = require("fs");

let input = fs.readFileSync(io).toString().trim().split(/\s+/);

let k = Number(input[0]);
let path = [];
let isVisited = new Array(k).fill(false);
let inequality = input.slice(1);

let max = 0,
    maxStr = "0";
let min = 9999999999,
    minStr = "9999999999";

function isValidInEquality(nums) {
    for (let i = 0; i < k; i++) {
        let n1 = Number(nums[i]);
        let n2 = Number(nums[i + 1]);

        switch (inequality[i]) {
            case "<":
                if (n1 > n2) return false;
                break;
            case ">":
                if (n1 < n2) return false;
                break;
        }
    }
    return true;
}

function dfs(k, depth = 0) {
    if (k === depth) {
        if (!isValidInEquality(path)) return;

        const valueStr = path.join("");
        const value = Number(valueStr);

        // console.log(path);
        // console.log(value);

        if (max < value) {
            max = value;
            maxStr = valueStr;
        }
        if (min > value) {
            min = value;
            minStr = valueStr;
        }
        return;
    }
    for (let i = 0; i <= 9; i++) {
        if (isVisited[i]) continue;

        isVisited[i] = true;
        path.push(i);

        dfs(k, depth + 1);

        isVisited[i] = false;
        path.pop();
    }
}

dfs(k + 1);

console.log(maxStr);
console.log(minStr);

// inequality = ["<", ">"];
// console.log(isValidInEquality([1, 3, 2]) === true);

// inequality = ["<", ">", "<"];
// console.log(isValidInEquality(["1", "4", "2", "3"]));
