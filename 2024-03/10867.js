const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [size, arr] = fs.readFileSync(io).toString().trim().split("\n");

size = Number(size);
arr = Array.from(new Set(arr.split(" ").map(Number)));

// function SelectionSort(arr, size) {
//     for (let i = 0; i < size - 1; i++) {
//         let idx = i;
//         for (let j = i + 1; j < size; j++) {
//             if (arr[idx] > arr[j]) idx = j;
//         }
//         [arr[i], arr[idx]] = [arr[idx], arr[i]];
//     }
// }

// SelectionSort(arr, size);

arr.sort((e1, e2) => e1 - e2);
console.log(arr.join(" "));
