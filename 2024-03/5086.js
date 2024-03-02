const fs = require("fs");

let lines = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

lines.forEach((line) => {
    let [a, b] = line.split(" ").map(Number);

    if (a === 0 && b === 0) process.exit(0);

    if (a % b === 0) console.log("multiple");
    else if (b % a === 0) console.log("factor");
    else console.log("neither");
});
