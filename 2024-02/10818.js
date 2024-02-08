let fs = require("fs");
let [n, arr] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

arr = arr
    .split(" ")
    .map(Number)
    .sort((e1, e2) => e1 - e2);

console.log(arr[0], arr[arr.length - 1]);
