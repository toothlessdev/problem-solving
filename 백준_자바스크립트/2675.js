let fs = require("fs");
let [t, ...inputs] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

inputs.forEach((input) => {
    let [repeat, str] = input.split(" ");

    let result = Array.from(str).reduce((prev, curr) => {
        return prev + curr.repeat(repeat);
    }, "");
    console.log(result);
});
