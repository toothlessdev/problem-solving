const fs = require("fs");

let n = Number(
    fs
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
        .toString()
        .trim()
);

for (let y = 0; y < n; y++) {
    let line = "";
    for (let x = 0; x < n - y; x++) {
        line += "*";
    }
    console.log(line);
}
