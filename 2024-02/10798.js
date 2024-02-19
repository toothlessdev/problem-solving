const fs = require("fs");

let [...arr] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

arr = arr.map((row) => row.split(""));

// console.log(arr);

let result = "";
for (let x = 0; x < 15; x++) {
    for (let y = 0; y < 5; y++) {
        // console.log(arr[y][x]);
        if (arr[y][x] !== undefined) result += arr[y][x];
    }
}
console.log(result);
