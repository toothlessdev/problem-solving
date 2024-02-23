const fs = require("fs");
let n = Number(fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt"));

let range = 1;
let block = 1;

while (block < n) {
    block += 6 * range;
    range++;
}
console.log(range);
