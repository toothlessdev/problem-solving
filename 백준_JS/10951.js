let fs = require("fs");
let [...inputs] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

inputs.forEach((input) => {
    let [a, b] = input.split(" ").map(Number);

    console.log(a + b);
});
