let fs = require("fs");
let [nm, ...inputs] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

let [n, m] = nm.split(" ").map(Number);
let basket = Array.from({ length: n }, (e, i) => i + 1);

function reverse(arr, from, to) {
    let copy = arr.slice(from, to);
    for (let index = from; index <= to; index++) {
        [arr[from], arr[to]] = [arr[to], arr[from]];
    }
}

inputs.forEach((input) => {
    let [from, to] = input.split(" ").map((e) => Number(e) - 1);
    let b = basket.slice(from, to + 1);
    b.reverse()
});

// let result = "";
// basket.forEach((element) => {
//     result += `${element} `;
// });
// console.log(result);
