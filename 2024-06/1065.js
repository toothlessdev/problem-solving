const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

const n = parseInt(fs.readFileSync(io).toString(), 10);

if (n < 100) {
    console.log(n);
} else {
    let count = 99;
    for (let i = 100; i <= n; i++) {
        const digits = i.toString().split("").map(Number);
        const [diff1, diff2] = [digits[0] - digits[1], digits[1] - digits[2]];
        if (diff1 === diff2) count++;
    }
    console.log(count);
}
