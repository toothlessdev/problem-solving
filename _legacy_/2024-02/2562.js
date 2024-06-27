let fs = require("fs");
let [...arr] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

arr = arr
    .map((element, index) => {
        return { element, index: index + 1 };
    })
    .sort((e1, e2) => e1.element - e2.element);

console.log(arr[arr.length - 1].element);
console.log(arr[arr.length - 1].index);
