let fs = require("fs");
let [nm, ...inputs] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

let [n, m] = nm.split(" ").map(Number);
let basket = Array.from({ length: n }, (e, i) => i + 1);

inputs.forEach((element) => {
    let [e1, e2] = element.split(" ").map(Number);
    [basket[e1 - 1], basket[e2 - 1]] = [basket[e2 - 1], basket[e1 - 1]];
});

let result = "";
basket.forEach((element) => (result += `${element} `));
console.log(result);
