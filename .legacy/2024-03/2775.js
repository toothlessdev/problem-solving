const fs = require("fs");

let [t, ...tests] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n");

let count = Array(15).fill([]);
count[0] = count[0].map((v, i) => count[0].push(i));

console.log(count);

for (let i = 0; i < tests.length - 1; i++) {
    let [k, n] = [tests[i], tests[i + 1]];
    console.log(k, n);
}

// console.log(tests);
