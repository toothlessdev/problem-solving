let fs = require("fs");
let [input, arr] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

let [n, x] = input.split(" ").map(Number);

arr = arr.split(" ").map(Number);

let result = "";
arr.forEach((element) => {
    if (element < x) {
        result += `${element} `;
    }
});
console.log(result);
