const fs = require("fs");
let n = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt");

n = Number(n);

for (let i = n; i >= 1; i--) {
    console.log(i);
}
