const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

const romanStr = fs.readFileSync(io).toString();

function romanToInt(s) {
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const currentVal = romanMap[s[i]];
        const nextVal = romanMap[s[i + 1]];

        if (currentVal < nextVal) {
            total -= currentVal;
        } else {
            total += currentVal;
        }
    }

    return total;
}
console.log(romanToInt(romanStr));
